import { useState } from 'react';
import * as styles from '../styles/Contact.css'

const ContactForm = ({onSuccess}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.page}>

      <div className={styles.card}>
        {/* Contact Section */}
        <div>
          <section>
            <h1 className={styles.title}>Drop us a line!</h1>

            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>
            <div>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>

            <div>
              <label className={styles.label}>Message</label>
              <textarea
                rows={8}
                value={message}
                placeholder='Type your message here...'
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
              />
            </div>
          </section>
        </div>

        {/* Save Button */}
        <div className={styles.buttonWrap}>
          <button
          disabled={isLoading}
            onClick={handleSubmit}
            className={styles.button}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;