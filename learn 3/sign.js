function signup(event) {
    event.preventDefault();
    var num = document.getElementById('mobile').value;
    var gmail = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(num.length < 1 || num.length > 11) {
        alert("Please enter your Mobile number correctly");
    } else if(password.length <=5) {
        alert("Your password is incorrect.")
    } else if(num.length > 1 || gmail.length > 1) {
        window.location.href = 'shop.html';
    } 
}

function showBtn() {
    let password = document.getElementById('password');
    let btn = document.getElementById('passbtn');
    if(password.type === 'password') {
        password.type = 'text';
        btn.textContent = '🙈'
    } else {
        password.type = 'password'
        btn.textContent = '👁️'
    }
}
