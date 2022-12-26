const email = document.getElementById("email")
const emailContact = document.getElementById("email-contact");
const error = document.getElementById('error');
const errorContact = document.getElementById("error-contact");

document.querySelectorAll(".submit").forEach(e => {
    e.addEventListener('click', function (event) {
        //email verification
        let validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        error.style.display = 'block'
        errorContact.style.display = 'block'

        if(!(email.value.match(validEmail))){
            error.innerText = "Please check your email"
            email.style.borderColor = "red"
        }
        
        if(!(emailContact.value.match(validEmail))){
            errorContact.innerText = "Please check your email"
            emailContact.style.borderColor = "red"
        }

        //setting timeout to 2 seconds
        setTimeout(() => {
            error.style.display = 'none'
            errorContact.style.display = 'none'
            email.style.borderColor = "#000"
            emailContact.style.borderColor = "#000"
        }, 2000);

        //setting default email value to  an empty string
        email.value = ""
        emailContact.value = ""
    })
})