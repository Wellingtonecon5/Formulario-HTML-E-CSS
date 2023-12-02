
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
 event.preventDefault();

    checkForm(); 

    alert ("Formulario Enviado com Sucesso")

})


function checkInputUserName(){
 const usernameValue = username.value;
    
    if(usernameValue === ""){
        errorInput(username, "Preencha esse campo!")
    } else{
        const formItem =  username.parentElement;
        formItem.className = "form-content"
    }

}


function checkInputEmail(){
    const emailValue = email.value;
       
       if(emailValue === ""){
           errorInput(email, "Email é obrigatorio!")
       } else{
           const formItem =  email.parentElement;
           formItem.className = "form-content"
       }
   
   }

function checkInputPassword(){
    const passwordValue = password.value;

    if(password === ""){
        errorInput(password, "A senha é obrigatória")
    } else if (passwordValue.length < 6){
        errorInput(password, "A senha deve ter no minimo 6 caracteres")
    }else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A senha é obrigatória")
    } else if (passwordValue.length !== passwordValue){
        errorInput(passwordConfirmation, "A senhas devem ser iguais !")
    }else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}


function checkForm(){
    checkInputUserName();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems];

    console.log(isValid);
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

