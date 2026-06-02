import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { Resend } from 'resend'

/// <reference types="node" />

type ContactFormData = {
  name: string
  email: string
  message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY')
}

const redis = Redis.fromEnv()

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(
    5,
    '10 m'
  ),
})

const escapeHtml = (text: string) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for') ??
    'anonymous'

  const { success } =
    await ratelimit.limit(ip)

  if (!success) {
    return Response.json(
      {
        error:
          'Too many requests',
      },
      { status: 429 }
    )
  }

  try {
    const body = await req.json() as ContactFormData

    if (
      typeof body.name !== 'string' ||
      typeof body.email !== 'string' ||
      typeof body.message !== 'string'
    ) {
      return Response.json(
        { error: 'Invalid input' },
        { status: 400 }
      )
    }

    if (
      !body.name.trim() ||
      !body.email.trim() ||
      !body.message.trim()
    ) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const name = escapeHtml(body.name)
    const email = escapeHtml(body.email)
    const message = escapeHtml(body.message)


    const data =
      await resend.emails.send({
        from:
          'contact@epiphanyai.co.uk',
        to: 'milly.palmer@epiphanyai.co.uk',
        replyTo: email,
        subject: `Contact Form - ${name}`,
        html: `
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        `,
      })

    return Response.json(data)
  } catch (error) {
    return Response.json(
      { error },
      { status: 500 }
    )
  }
}
