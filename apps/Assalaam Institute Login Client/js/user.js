$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

function loadUser() {
    firebase.auth().onAuthStateChanged(function(user) {
        if(!user){
            window.location = "../index.html"
        }
    })
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location="../index.html"
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
        }).then((res) => {
          return;
        })
    });
}