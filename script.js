const scriptURL = 'https://script.google.com/macros/s/AKfycbzxwiivcl2Q1OETJMR4LW1t5xmjkHUO0fYAAHky3mEsZn3EOswKvEh2Pwdbh2dpKWzW/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 6000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})



function toggleProjects() {
    var hiddenProjects = document.querySelectorAll('.hidden');
    var viewMoreButton = document.getElementById('view-more-button');
    var viewLessButton = document.getElementById('view-less-button');

    for (var i = 0; i < hiddenProjects.length; i++) {
        if (hiddenProjects[i].style.display === 'none' || hiddenProjects[i].style.display === '') {
            hiddenProjects[i].style.display = 'block';
            viewMoreButton.style.display = 'none';
            viewLessButton.style.display = 'block';
        } else {
            hiddenProjects[i].style.display = 'none';
            viewMoreButton.style.display = 'block';
            viewLessButton.style.display = 'none';
        }
    }
}



