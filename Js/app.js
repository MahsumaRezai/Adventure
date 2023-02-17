// vaild date
function data() {
    let username = document.getElementById("name").value;
    let pass = document.getElementById("email").value;
    let phone_num = document.getElementById("phone").value;
    let vaild = true;
    if (username == "") {
        document.getElementById("start-name").innerText = "*";
        vaild = false;
    }
    else if (username.indexOf(" ") > 0) {
        document.getElementById("start-name").innerText = "can not use space!";
        vaild = false

    }
    else {
        document.getElementById("start-name").innerText = "";

    }

    if (pass == "") {
        document.getElementById("start-email").innerText = "*"
        vaild = false;
    }
    else {
        document.getElementById("start-email").innerText = ""

    }
    if (phone_num == "") {
        document.getElementById("start-phone").innerText = "*";
        vaild = false;

    }
    else {
        document.getElementById("start-phone").innerText = "";
    }

    window.setTimeout(time, 8000)
    return vaild;
}
// time function 
function time() {
    document.getElementById("suser").innerText = ""
    document.getElementById("semail").innerText = ""
    document.getElementById("spassword").innerText = ""
    document.getElementById("sbd").innerText = ""

}