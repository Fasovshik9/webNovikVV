//dark
function changeTheme(isChecked) {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}
//valid
let reg3 = /^[0-9]{3,255}$/,
    reg4 = /^[a-zA-Z]{3,7}$/;
let inpUserName = document.querySelector('#user-name-input')
let inpUserPassword = document.querySelector('#password-input')
let inpUserType = document.querySelector('#user-type-input')

let spanUserName = document.querySelector('.spanUserName')
let spanUserPassword = document.querySelector('.spanUserPassword')
let spanUserRole = document.querySelector('.spanUserRole')

document.querySelector('.btn').onclick = function(e){
    e.preventDefault();
    if (!validate(reg4, inpUserName.value)){
        notValidate(inpUserName, spanUserName, 'Username can only contain letters, no more than 3 and no less than 7 characters')
    }else{
        valid(inpUserName, spanUserName, '')
    }
    if (!validate(reg3, inpUserPassword.value)){
        notValidate(inpUserPassword, spanUserPassword, 'User password can only contain numbers, no more than 3')
    }else{
        valid(inpUserPassword, spanUserPassword, '')
    }
    if (validate(reg4, inpUserName.value) && (validate(reg3, inpUserPassword.value))){
        console.log("OK");
    }

}

function validate(regex, inp){
    return regex.test(inp)
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