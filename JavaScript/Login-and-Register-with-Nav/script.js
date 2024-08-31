const container = document.querySelector('.container');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const button = document.querySelector('.btn-login');
const close = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    container.classList.add('active');
})

loginlink.addEventListener('click', ()=> {
    container.classList.remove('active');
})

button.addEventListener('click', ()=> {
    container.classList.add('active-button');
})

close.addEventListener('click', ()=> {
    container.classList.remove('active-button');
})