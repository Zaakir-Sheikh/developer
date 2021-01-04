function sendMsg() {
    let Name = document.getElementById("msgName").value;
    let Email = document.getElementById("msgEmail").value;
    let phoneNumber = document.getElementById("msgPhoneNumber").value;
    let Message = document.getElementById("MsgMsg").value;
    if(!Name){
        Swal.fire('Oops...', 'Please enter a name!', 'error');
    } else if(!Email){
        Swal.fire('Oops...', 'Please enter an email', 'error')
    } else if(!Message){
        Swal.fire('Oops...', 'Please enter a message!', 'error')
    } else {
        let db = firebase.firestore();
        db.collection('Emails').doc(Name).set({
            Name: Name,
            Email: Email,
            Message: Message,
        })
    }
}