import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.post('/api/contact', async (req, res) => {
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

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001')
})