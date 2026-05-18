import { useState } from 'react';
import * as styles from '../Contact.css'

const Contact = () => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = () => {
    console.log('Sent message', { name, email });
    alert('Sent message!');
  };

  return (
     <div className={styles.page}>
    <main>
      <h1 className={styles.title}>Contact</h1>
</main>
      <div className={styles.card}>
        {/* Contact Section */}
        <div>
       <section>
          <h2 className={styles.title}>Drop us a line!</h2>

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
            onClick={handleSave}
            className={styles.button}
          >
            Send Message
          </button>
        </div>
      </div>

        
    </div>  
  );
};

export default Contact;