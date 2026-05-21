import { Resend } from 'resend'

/* TO-DO: Install @upstash/redis @upstash/ratelimit
for serverless function instead */

// const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5, // limit each IP to 5 requests per window
//   message: {
//     error: 'Too many messages sent. Please try again later.',
//   },
//   standardHeaders: true,
//   legacyHeaders: false,
// })

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'milly.palmer@epiphanyai.co.uk',
      subject: 'Contact Form',
      html: `<p>${body.message}</p>`,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json(
      { error },
      { status: 500 }
    )
  }
}

