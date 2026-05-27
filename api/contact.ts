import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const redis = Redis.fromEnv()

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(
    5,
    '10 m'
  ),
})

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
    const body = await req.json()

    const data =
      await resend.emails.send({
        from:
          'onboarding@resend.dev',
        to: 'milly.palmer@epiphanyai.co.uk',
        subject: 'Contact Form',
        html: `
          <p>${body.message}</p>
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
