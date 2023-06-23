function Contact(){
    return(
        <div className="App">
            <h1>Kontakt</h1>
            <form action={submit()}>
                <label for="name">Name</label>
                <input name="name" required="true"></input>
                <label for="email">E-Mail</label>
                <input name="email" type="email" required="true"></input>
                <label for="message">Ihre Nachricht</label>
                <input name="message"></input>
                <button type="submit">Absenden</button>
            </form>
        </div>
    );
}
function submit(){

}
export default Contact;