const form = document.querySelector(".sign-in-form");

function loadLogin(){
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      login()
    }
  })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    login();
})

function checkUser(UID, FILE) {
    if(UID && FILE){
      firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          if(user.uid === UID) return window.location = FILE
        } else {
          let email = document.getElementById("email").value;
          let password = document.getElementById("password").value;
          firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            Swal.fire({
              title: `${email} Logged in`,
              timer: 10000,
              timerProgressBar: true,
              didOpen: () => {
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
                window.location = FILE
            })
          }).catch((error) => {
            Swal.fire({
              title: error.message,
              timer: 10000,
              timerProgressBar: true,
              didOpen: () => {
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              return;
            })
          })
        }
      })
    }
  }

function login() {
  checkUser('uEcv5sBHqDfxVf0IiCkdBSzzITX2', 'users/abbas_alvi.html'); //abbas
  checkUser('ppDqqgHmXchKk7dGS90hkQz9yUq1', 'users/abdussamad_siddiqi.html'); //abdussamad siddiqi
  checkUser('yL8qHbpfUFZD7045BvYmZybtXR73', 'users/abdullah_malek.html'); //Abdullah Malek
  checkUser('pts6EzfsQyQWhxD7onzvU4pBehh1', 'users/abdur-rafay_khan.html'); //Abdur-rafay Khan
  checkUser('S3Ti5aS9EmYKVNmSN0rSKj01H113', 'users/abuzar_poplazai.html'); //Abuzar
  checkUser('lZt8XdMWpiarmnZmcrZQV48qem83', 'users/affan_shaikh.html'); //Affan Shaikh
}