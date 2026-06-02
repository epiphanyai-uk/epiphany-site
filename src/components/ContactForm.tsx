import { useState } from 'react';
import * as styles from '../styles/Contact.css'

type Props = {
  onSuccess: () => void
}

const ContactForm = ({ onSuccess }: Props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (
    e: React.SubmitEvent
  ) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error()

      onSuccess()
    } catch (err) {
      console.error(err)
      setError('Please fill in this field')
    } finally {
      setIsLoading(false)
    }
  }

  return (

    <form onSubmit={handleSubmit}>
      <h1 className={styles.title}>
        Drop us a line!
      </h1>

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className={styles.textarea}
        />
      </div>

      {error && (
        <p>
          {error}
        </p>
      )}

      <div className={styles.buttonWrap}>
        <button
          type="submit"
          disabled={isLoading}
          className={styles.button}
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}

  export default ContactForm;