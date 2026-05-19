import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'
import rateLimit from 'express-rate-limit'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per window
  message: {
    error: 'Too many messages sent. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

const resend = new Resend(process.env.RESEND_API_KEY)

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'milly.palmer@epiphanyai.co.uk',
      subject: 'New Contact Form Message',
      html: `
        <h1>Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    })

    res.json(data)
  } catch (error) {
    res.status(500).json({ error })
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})