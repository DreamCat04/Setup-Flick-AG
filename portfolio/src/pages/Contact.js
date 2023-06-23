import React, {useState} from "react";

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was sent!');

    const data = {
        name: name,
        email: email,
        message: message
    }

    // Make an API call to the server-side endpoint
    fetch('http://localhost:5000/api/send-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.ok) {
        console.log('Email sent successfully!');
        // Reset the form
        setName('');
        setEmail('');
        setMessage('');
        } else {
        console.log('Failed to send email.');
        }
    })
    .catch((error) => {
        console.log('Error occurred:', error);
    });
}
    return(
        <div className="App">
            <h1>Kontakt</h1>
            <p className="description">Haben Sie eine Frage zu unseren Angeboten 
            oder möchten sie uns Feedback geben? Kontaktieren Sie uns über das 
            untenstehende Formular!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input name="name" required={true} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="email">E-Mail</label>
                <input name="email" type="email" required={true} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="message">Ihre Nachricht</label>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Absenden</button>
            </form>
        </div>
    );
}
export default Contact;