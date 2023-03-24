//dark
function changeTheme(isChecked) {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}
//valid
let inpUserName = document.querySelector('#user-name-input')
let inpUserPassword = document.querySelector('#password-input')

let spanUserName = document.querySelector('.spanUserName')
let spanUserPassword = document.querySelector('.spanUserPassword')

let inputValueUserName;
let inputValueUserPassword;

let checkValidUserName = false;
let checkValidUserPassword = false;
inpUserName.addEventListener("input", ()=> {
    inputValueUserName = inpUserName.value
})
inpUserPassword.addEventListener("input", ()=> {
    inputValueUserPassword = inpUserPassword.value
})

inpUserName.addEventListener("blur", ()=> {
    if (!inputValueUserName || inputValueUserName.length < 3){
        notValidate(inpUserName, spanUserName, 'Username must be longer than 3 characters')
        document.getElementById("submit-input").disabled = true;
        checkValidUserName = false
    }else{
        valid(inpUserName, spanUserName, '')
        checkValidUserName = true
        disabledButton()
    }
})
inpUserPassword.addEventListener("blur", ()=> {
    if (!inputValueUserPassword || inputValueUserPassword.length < 3){
        notValidate(inpUserPassword, spanUserPassword, 'User password must be longer than 3 characters')
        document.getElementById("submit-input").disabled = true;
        checkValidUserPassword = false
    }else{
        valid(inpUserPassword, spanUserPassword, '')
        checkValidUserPassword = true
        disabledButton()
    }
})

function disabledButton(){
    if (checkValidUserName && checkValidUserPassword){
        document.getElementById("submit-input").disabled = false;
    }
}

function notValidate(inp, el, mess){
    inp.classList.add('is-invalid');
    el.innerHTML = mess;
}
function valid(inp, el, mess){
    inp.classList.remove('is-invalid');
    inp.classList.add('is-invalid');
    el.innerHTML = mess;
}
