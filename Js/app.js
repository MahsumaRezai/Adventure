function submitdata() {
    let username = document.getElementById("name").value;
    let phon_number = document.getElementById("phone").value;
    let emailadd = document.getElementById("email").value;
    let valid = true;
    if (username == "") {
        document.getElementById("start-name").innerText = "*"
        valid = false;
    }

    if (phon_number == "") {
        document.getElementById("start-phone").innerText = "*"
        valid = false;
    }
    if (emailadd == "") {
        document.getElementById("start-email").innerText = "*"
        valid = false;
    }

    window.setTimeout(time_set, 10000);
    return valid;

}


function time_set() {
    document.getElementById("start-name").innerText = "";
    document.getElementById("start-phon").innerText = "";
    document.getElementById("start-email").innerText = "";



}