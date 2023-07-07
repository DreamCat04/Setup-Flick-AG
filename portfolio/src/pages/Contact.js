import React, {useState} from "react";
import axios from "axios";

function Contact(){
    const [selectedFile, setSelectedFile] = useState();
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [requestType, setRequestType] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form was sent!');

        const data = {
            name: name,
            email: email,
            message: message,
            requestType: requestType
        }

        fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then((response) => {
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
        }).catch((error) => {
            console.log('Error occurred:', error);
            alert('An error occurred while sending the message. Error:', error);
        });
        
    }
    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
    
            axios.post('https://thierry.kellyburger.com', formData)
            .then((response) => {
                // Handle successful upload
                alert('Upload successful:', response.data);
            })
            .catch((error) => {
                // Handle error
                console.error('Upload failed:', error);
                alert('Upload failed:', error)
            });
        }
    };
    return(
        <div className="App">
            <h1>Kontakt</h1>
            <p>Haben Sie eine Frage zu unseren Angeboten, möchten Sie eine 
                Reparaturanfrage stellen oder möchten sie uns Feedback geben?
                Kontaktieren Sie uns über das untenstehende Formular!</p>
            <form onSubmit={handleSubmit}>
                <label for="name" className="formLabel">Name</label><br/>
                <input name="name" required={true} onChange={(e) => setName(e.target.value)}/><br/>
                <label for="email" className="formLabel">E-Mail</label><br/>
                <input name="email" type="email" required={true} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <h4 className="formLabel">Grund Ihrer Anfrage</h4>
                <div id="radioDiv">
                    <label for="support" className="radioLabel">Supportanfrage</label>
                    <input type="radio" name="support" value="Support request" checked={requestType === 'Support request'} onChange={(e) => setRequestType(e.target.value)}></input>
                    <label for="repairRequest" className="radioLabel">Reparaturanfrage</label>
                    <input type="radio" name="repairRequest" value="Repair request" checked={requestType === 'Repair request'} onChange={(e) => setRequestType(e.target.value)}></input>
                    <label for="question" className="radioLabel">Frage</label>
                    <input type="radio" name="question" value="Question" checked={requestType === 'Question'} onChange={(e) => setRequestType(e.target.value)}></input>
                    <label for="repairRequest" className="radioLabel">Feedback</label>
                    <input type="radio" name="feedback" value="Feedback" checked={requestType === 'Feedback'} onChange={(e) => setRequestType(e.target.value)} style={{"margin-bottom": "20px"}}></input>
                </div>
                <label for="message" className="formLabel">Ihre Nachricht</label><br/>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}/><br/>
                <label for ="upload">Laden Sie hier ein Foto Ihres Schadens hoch</label>
                <input type="file" name="upload" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
                <button type="submit">Absenden</button>
            </form>
        </div>
    );
}
export default Contact;