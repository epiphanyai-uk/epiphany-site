import * as styles from "../styles/Contact.css";


export const SuccessContent = ({ onReset }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Your message has been sent</h1>
      <button className={styles.button} onClick={onReset}>
        Send another message
      </button>
    </div>
  )
}