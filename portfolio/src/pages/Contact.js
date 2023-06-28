import React, {useState} from "react";

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [requestTpye, setRequestType] = useState('');
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was sent!');

    const data = {
        name: name,
        email: email,
        message: message,
        requestTpye: requestTpye
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
        alert('Wir haben Ihre Nachricht bekommen und werden Sie so rasch wie möglich kontaktieren!');
        // Reset the form
        setName('');
        setEmail('');
        setMessage('');
        setRequestType('');
        } else {
        console.log('Failed to send email.');
        }
    })
    .catch((error) => {
        console.log('Error occurred:', error);
        alert('An error occurred while sending the message. Error:', error);
    });
    }
    return(
        <div className="App">
            <h1>Kontakt</h1>
            <p>Haben Sie eine Frage zu unseren Angeboten, möchten Sie eine 
                Reparaturanfrage stellen oder möchten sie uns Feedback geben?
                Kontaktieren Sie uns über das untenstehende Formular!</p>
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input name="name" required={true} onChange={(e) => setName(e.target.value)}/>
                <label for="email">E-Mail</label><br/>
                <input name="email" type="email" required={true} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p id="formLabel">Grund Ihrer Anfrage</p>
                <label for="support">Supportanfrage</label>
                <input type="radio" name="support" value="Support request" checked={requestTpye === 'Support request'} onChange={(e) => setRequestType(e.target.value)}></input>
                <label for="repairRequest">Reparaturanfrage</label>
                <input type="radio" name="repairRequest" value="Repair request" checked={requestTpye === 'Repair request'} onChange={(e) => setRequestType(e.target.value)}></input>
                <label for="support">Frage</label>
                <input type="radio" name="question" value="Question" checked={requestTpye === 'Question'} onChange={(e) => setRequestType(e.target.value)}></input>
                <label for="repairRequest">Feedback</label>
                <input type="radio" name="feedback" value="Feedback" checked={requestTpye === 'Feedback'} onChange={(e) => setRequestType(e.target.value)}></input>
                <label for="message">Ihre Nachricht</label>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}/><br/>
                <button type="submit">Absenden</button>
            </form>
        </div>
    );
}
export default Contact;