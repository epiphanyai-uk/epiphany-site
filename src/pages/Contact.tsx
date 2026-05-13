import { useState } from 'react';

const Contact = () => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = () => {
    console.log('Sent message', { name, email });
    alert('Sent message!');
  };

  return (
     <div>
    <main>
      <h1>Contact</h1>
</main>
      <div>
        {/* Contact Section */}
        <div>
       <section>
          <h2>Drop us a line!</h2>

            <div>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
              </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          
          <div>
          <label>Message</label>
          <textarea
          rows={8}
          value={message}
          placeholder='Type your message here...'
          onChange={(e) => setMessage(e.target.value)}
          />
          </div>
        </section>
        </div>

        {/* Save Button */}
        <div>
          <button
            onClick={handleSave}
          >
            Send Message
          </button>
        </div>
      </div>

        
    </div>  
  );
};

export default Contact;