let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=() => {
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=() => {
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
}