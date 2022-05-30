function trip(obj, trip) {
    document.getElementById(obj).innerHTML = "<b>" + trip + "</b>";
}

function checkForm() {
    console.log("进入checkForm")
    //获取用户名输入项
    var userNname = document.getElementById("userNname");
    var uName = userNname.value;
    console.log(uName)
    if (uName.length < 1 || uName.length > 10) {
        trip("name_trip", "name should less than 10 letters");
        return false;
    } else {
        trip("name_trip", "OK!!");
    }
    console.log("进入checkForm")
    //获取用户名输入项
    var userlastNname = document.getElementById("userlastNname");
    var uName = userlastNname.value;
    console.log(uName)
    if (uName.length < 1 || uName.length > 10) {
        trip("lastname_trip", "name should less than 10 letters");
        return false;
    } else {
        trip("lastname_trip", "OK!!");
    }
    //phonenumber
    var phoneNumber = document.getElementById("phoneNumber");
    var pName = phoneNumber.value;
    console.log(pName)
    if (uName.length < 1 || uName.length > 10) {
        trip("phoneNumber_trip", "phone number should less than 10 letters");
        return false;
    } else {
        trip("phoneNumber_trip", "OK!!");
    }
    //校验邮箱(正则表达式):/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
    var inputEmail = document.getElementById("email");
    var uEmail = inputEmail.value;
    if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(uEmail)) {
        trip("email_trip", "please enter correct email address");
        return false;
    } else {
        trip("email_trip", "OK!!");
    }
    return true;
}
function submitT() {
    if (checkForm()) {
        alert("Bigo!");
        window.open('http://127.0.0.1:5500/html%20file/html+css+java/payment2.html');
    }
    else {
    }
}