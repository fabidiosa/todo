const form= document.getElementBy('form');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#Email');
const formPassword= document.querySelector('#Password');
const formConfirmPassword = document.querySelector('#confirmPassword');
const formCheck= document.querySelector('#Check');

form.addEventListener('submit', e => {
    e.prevenDefault();
    checkInpumts();

    
});
function checkInpumts(){
    const formNameValue= name.nodeValue.trim();
    const formEmailValue= email.nodeValue.trim();
    const formPasswordValue= Password.nodeValue.trim();
    const formConfirmPassworddValue= ConfirmPassword.nodeValue.trim();
    const formCheckValue= check.nodeValue.trim();

    if(formNameValue===""){
        setErrorFor()
    }
}

function setErrorFor(input, mensaje){
    const formControl= input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=mensaje;

}

function setSuccesFor(input){
    const formControl= input.parentElement;
    formControl.className= ' form-cpntrol success';
}
function isEmail(){
    return 
}