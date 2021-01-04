function sendMsg() {
    let Name = document.getElementById("msgName").value;
    let Email = document.getElementById("msgEmail").value;
    let phoneNumber = document.getElementById("msgPhoneNumber").value;
    let message = document.getElementById("MsgMsg").value;
    if(!Name){
        Swal.fire('Oops...', 'Please enter a name!', 'error');
    } else if(!Email){
        Swal.fire('Oops...', 'Please enter an email', 'error')
    } else if(!message){
        Swal.fire('Oops...', 'Please enter a message!', 'error')
    } else {
        
    }
}