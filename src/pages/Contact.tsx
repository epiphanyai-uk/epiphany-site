import { useState } from "react"
import ContactForm from "../components/ContactForm"
import { SuccessContent } from "../components/SuccessContent"
import * as styles from '../styles/Contact.css'

const Contact = () => {

const [isSent, setIsSent] = useState(false)
 return (
    <div className={styles.page}>
      <div className={styles.card}>
        {isSent ? (
          <SuccessContent onReset={() => setIsSent(false)} />
        ) : (
          <ContactForm onSuccess={() => setIsSent(true)} />
        )}
      </div>
    </div>
  )
}
export default Contact;