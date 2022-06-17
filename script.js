const message = "Thank you for submitting your request. The crew will respond shortly.";
const contactForm = document.getElementById("contactForm")
const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputMessage = document.getElementById("message")


contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (inputName.value <= 3){
        inputName.style.borderColor = "red";
        alert("your name must have at least three letters")
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value) == false){
        inputEmail.style.borderColor = "red";
        alert("please enter a valid email")
    } else if (inputMessage.value <= 10){
        inputMessage.style.borderColor = "red";
        alert("your message must have at least ten letters")
    } else {
        alert(message);
        location.reload();
    }
});

