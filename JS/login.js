const loginForm = document.querySelector(".login_form");

function cerateFrom(){
    // Create input(ID, PW)
    const inputID = document.createElement("input");
    inputID.id = 'input_id';
    inputID.title = '아이디';
    inputID.type = 'text';
    inputID.placeholder = '아이디';
    inputID.maxLength = '41';
    inputID.required = true;

    const inputPW = document.createElement("input");
    inputPW.id = 'input_pw';
    inputPW.title = '아이디';
    inputPW.type = 'password';
    inputPW.placeholder = '비밀번호';
    inputPW.maxLength = '16';
    inputPW.required = true;

    // Create button
    const btn = document.createElement("button");
    btn.id = 'login_btn';
    btn.innerText = 'LogIn!';

    // AppenChild!
    loginForm.appendChild(inputID);
    loginForm.appendChild(inputPW);
    loginForm.appendChild(btn);
}

cerateFrom();

const inputID = document.getElementById("input_id");

console.log(inputID.id);