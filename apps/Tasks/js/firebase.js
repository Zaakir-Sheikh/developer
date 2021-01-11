var firebaseConfig = {
  apiKey: "AIzaSyCUuKvmWQ_alyZ4WcSJHuWn84AqQUIxe9g",
  databaseURL: "https://to-do-list-app-c332f-default-rtdb.firebaseio.com/",
  authDomain: "to-do-list-app-c332f.firebaseapp.com",
  projectId: "to-do-list-app-c332f",
  storageBucket: "to-do-list-app-c332f.appspot.com",
  messagingSenderId: "298622339525",
  appId: "1:298622339525:web:0bf8730e1ba88bcf13a3ac"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

function createDB() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      if(user.uid){
        let id = uuidv4();
        db.collection(user.uid).doc(id).set({
          isCompleted: false,
          name: "Delete this",
          identifier: id,
        })
        window.location="to-do-list.html"
      }
    }
  })
}

function signUp(){
  var email = document.getElementById("email_input").value;
  var password = document.getElementById("password_input").value;

  if(!email){ 
    alert('Please enter a valid email');
    return;
  } else if(!password){
    alert('Please enter a valid password');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
      createDB()
      let timerInterval
      Swal.fire({
        title: `${email} Signed Up!`,
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
          firebase.auth().signInWithEmailAndPassword(email, password);
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log(`user is signed in`);
            } else {
              // No user is signed in.
            }
          });
      })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    let timerInterval
    Swal.fire({
        title: errorMessage,
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
          window.location="signup.html";
      })
  });
}

function login(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location="to-do-list.html";
      return;
    } else {
      let email = document.getElementById("email_input2").value;
      let password = document.getElementById("password_input2").value;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
         
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
          window.location="to-do-list.html"
        })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Swal.fire({
          title: errorMessage,
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
            window.location="login.html";
        })
      });
    }
  });
}

function logout() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      firebase.auth().signOut();
      window.location="index.html"
    } else {
      window.location="index.html"
    }
  })
}

function addItem() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      let item = document.getElementById("inputItem").value;
      if(!item) {
        Swal.fire({
          title: `Please enter a task`,
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
          window.location="to-do-list.html"
          return;
        })
      }
      if(item.length > 40){
        Swal.fire({
          title: `Task must be shorter than 40 characters`,
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
          window.location="to-do-list.html"
          return;
        })
      } else {
        let id = uuidv4();
        if(item && id){
          db.collection(user.uid).doc(id).set({
            name: item,
            isCompleted: false,
            identifier: id,
          })
          .then(function() {
            window.location="to-do-list.html" //do this to trigger the loadAll function without overwriting the html
          })
          .catch(function(error) {
            Swal.fire({
              title: `error: ${error}`,
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
              window.location="to-do-list.html"
            })
          });
        }
      }
    } else {
      window.location="index.html"
    }
  })
}

function loadAll() {
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      let todos = [];
      let renderTodos = function(){
        db.collection(user.uid).get().then(data => {
          data.docs.forEach(element => {
            const singleTodo = element.data();
            todos.push(singleTodo);
          });
          createList(todos);
        })
      }
      renderTodos();

    } else {
      window.location="index.html";
    }

    const createList = function(todos){
      todos.forEach(element => {
        $('.todoUl').append('<li> <label> <input type="checkbox" name=""> <p>' + element.name + '</p> <span> <button onclick="deleteTask(this.id)" id="' + element.identifier +'"> <i class="far fa-trash-alt"> </i> </button> </span> </label> </li>');
      })
    }
  })
}

function deleteTask(clicked_id) {
  let taskID = clicked_id
  firebase.auth().onAuthStateChanged(function(user) {
    if(user){
      db.collection(user.uid).doc(taskID).delete().then(() => {
        window.location="to-do-list.html"
      }).catch(function(error){
        Swal.fire({
          title: `error: ${error}`,
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
          window.location="to-do-list.html"
        })
      })
    } else {
      window.location="index.html"
    }
  })
}