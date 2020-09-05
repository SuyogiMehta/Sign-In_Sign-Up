function load() {
    var a = Number(document.getElementById("trial1").innerHTML);
    document.getElementById("trial1").innerHTML = Number(a + 1);
    var a = Number(document.getElementById("trial1").innerHTML);
    var username = localStorage.getItem("names" + a);
    var password = localStorage.getItem("pass" + a);
    var p = document.createElement("p");
    p.innerHTML = username;
    p.id = "names" + a;
    localStorage.setItem(p.id, p.innerHTML);
    document.getElementById("names").appendChild(p);
    var p2 = document.createElement("p");
    p2.innerHTML = password;
    p2.id = "pass" + a;
    localStorage.setItem(p2.id, p2.innerHTML);
    document.getElementById("pass").appendChild(p2);
    var b = localStorage.getItem("trial");
    if (a == b || b == null) {
        document.getElementById("trial1").innerHTML = "1";
    }
    if (a != b && b != null) {
        load();
    }
    document.getElementById("create-account").disabled = true;
    document.getElementById("create-account").style.backgroundColor = "rgb(200, 200, 0)";
    document.getElementById("create-account").style.color = "rgb(200, 0, 0)";
    // sleep(3);
}






function enterAccount() {

    // alert("");

    var UserName = document.getElementById("UserName").value;
    var password = document.getElementById("password").value;
    var a = Number(document.getElementById("trial1").innerHTML);
    var d = localStorage.getItem("trial");
    var names = document.getElementById("names" + a).innerHTML;
    var pass = document.getElementById("pass" + a).innerHTML;

    if (UserName == "" && password != "") {
        alert("Please enter your username.")
    }
    if (UserName != "" && password == "") {
        alert("Please enter your password.")
    }
    if (UserName == "" && password == "") {
        alert("Please enter your username and password.")
    }

    if (UserName != "" && password != "" && UserName != names && d != a && d != null) {
        document.getElementById("trial1").innerHTML = Number(a + 1);
        enterAccount();
    }

    if (UserName != "" && password != "" && UserName != names && d == a) {
        alert("Your username or password is incorrect. Please try again.");
    }

    if (d == null) {
        alert("Your username or password is incorrect. Please try again.");
    }

    if (UserName != "" && UserName == names) {
        if (password != pass && password != "") {
            alert("Your username or password is incorrect. Please try again.");
        }
        if (password == pass && password != "") {
            document.getElementById("trial1").innerHTML = "1";
            alert("Welcome " + UserName + ".");
        }
    }

    //     if (UserName == "Vijay Mehta" && password == "controlRoom.alert") {
    //         // document.getElementById("inner-ent-prsnl-acnt").style.transition = "1s";
    //         // document.getElementById("inner-ent-prsnl-acnt").style.opacity = "0";
    //         // document.getElementById("inner-ent-prsnl-acnt").style.transition = "0s";
    //         setTimeout(() => {
    //             loading();
    //         }, 0000)
    //         setTimeout(() => {
    //             document.getElementById("loadingcheck").innerHTML = "done";
    //         }, 3000)
    //     }

    //     if (UserName == "" && password != "") {
    //         document.getElementById("track").innerHTML = "no need";
    //         alert("Please enter your username.");
    //         setTimeout(() => {
    //             document.getElementById("track").innerHTML = "";
    //         }, 0100)
    //     }

    //     if (password == "" && UserName != "") {
    //         document.getElementById("track").innerHTML = "no need";
    //         alert("Please enter your password.");
    //         setTimeout(() => {
    //             document.getElementById("track").innerHTML = "";
    //         }, 0100)
    //     }

    //     if (UserName == "" && password == "") {
    //         alert("Please enter both, your username and password.")
    //     }

    //     if ((UserName != "Vijay Mehta" && UserName != "") || (password != "controlRoom.alert" && password != "")) {
    //         var track = document.getElementById("track").innerHTML;
    //         if (track == "") {
    //             setTimeout(() => {
    //                 document.getElementById("password").value = "";
    //                 alert("Either your username, or password is incorrect.");
    //                 alert("Please, try again.");
    //             }, 0100)
    //         }
    //     }
}

function typechange() {
    var password = document.getElementById("password").type;
    if (password == "password") {
        document.getElementById("password").type = "text";
    }
    if (password == "text") {
        document.getElementById("password").type = "password";
    }
}

function signIn() {
    document.getElementById("sign-in-page").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("med-ent-prsnl-acnt").style.width = "0%";
        document.getElementById("med-ent-prsnl-acnt-2").style.filter = "blur(20px)";
        document.getElementById("med-ent-prsnl-acnt-2").style.webkitFilter = "blur(20px)";
        document.getElementById("inner-crt-nw-acnt").style.left = "-1500px";
        setTimeout(() => {
            document.getElementById("sign-in-page").style.width = "0%";
            document.getElementById("inner-ent-prsnl-acnt").style.opacity = "1";
        }, 1000)
    }, 500)
}

function loading() {
    // document.getElementById("loading").style.left = "0%";
    document.getElementById("loading").style.width = "100%";
    document.getElementById("loadingcheck").innerHTML = "left";
    setTimeout(() => {
        loadcheck();
    }, 0001)
}

function loadcheck() {
    var loadingcheck = document.getElementById("loadingcheck").innerHTML;
    if (loadingcheck == "done") {
        document.getElementById("loading").style.left = "100%";
        document.getElementById("loading").style.width = "0%";
        document.getElementById("loadingcheck").innerHTML = "left";
        setTimeout(() => {
            document.getElementById("loading").style.left = "0%";
        }, 1001)
    }
    if (loadingcheck == "left") {
        setTimeout(() => {
            loadcheck();
        }, 0001)
    }
}











function CreateAccount() {
    // alert("v");
    document.getElementById("sign-in-page").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("med-ent-prsnl-acnt").style.width = "0%";
        document.getElementById("med-ent-prsnl-acnt-2").style.filter = "blur(20px)";
        document.getElementById("med-ent-prsnl-acnt-2").style.webkitFilter = "blur(20px)";
        document.getElementById("inner-crt-nw-acnt").style.left = "0px";
        setTimeout(() => {
            document.getElementById("sign-in-page").style.width = "0%";
            document.getElementById("inner-crt-nw-acnt").style.opacity = "1";
        }, 1000)
    }, 500)
}

function typechange2() {
    var password = document.getElementById("password2").type;
    if (password == "password") {
        document.getElementById("password2").type = "text";
    }
    if (password == "text") {
        document.getElementById("password2").type = "password";
    }
}

function CreateAccount2() {
    // setTimeout(() => {
    loading();
    // }, 0)
    // setTimeout(() => {
    var a = Number(Number(localStorage.getItem("trial")) + 1);
    document.getElementById("trial1").innerHTML = a;
    localStorage.setItem("trial", a);
    var username = document.getElementById("UserName2").value;
    var password = document.getElementById("password2").value;
    var p = document.createElement("p");
    p.innerHTML = username;
    p.id = "names" + localStorage.getItem("trial");
    localStorage.setItem(p.id, p.innerHTML);
    document.getElementById("names").appendChild(p);
    var p2 = document.createElement("p");
    p2.innerHTML = password;
    p2.id = "pass" + localStorage.getItem("trial");
    localStorage.setItem(p2.id, p2.innerHTML);
    document.getElementById("pass").appendChild(p2);
    // }, 500)
}

function validation() {
    var a = Number(document.getElementById("trial1").innerHTML);
    var a = Number(document.getElementById("trial1").innerHTML);
    var b = document.getElementById("names" + a).innerHTML;
    var c = document.getElementById("UserName2").value;
    var d = localStorage.getItem("trial");
    if (d == null) {
        document.getElementById("create-account").disabled = false;
        document.getElementById("create-account").style.backgroundColor = "yellow";
        document.getElementById("create-account").style.color = "red";
    }
    if (c != b && a != d && d != null) {
        document.getElementById("trial1").innerHTML = Number(a + 1);
        validation();
    }
    if (c != b && a == d && d != null) {
        document.getElementById("create-account").disabled = false;
        document.getElementById("create-account").style.backgroundColor = "yellow";
        document.getElementById("create-account").style.color = "red";
    }
    if (c == b || c == "") {
        document.getElementById("create-account").disabled = true;
        document.getElementById("create-account").style.backgroundColor = "rgb(200, 200, 0)";
        document.getElementById("create-account").style.color = "rgb(200, 0, 0)";
    }
    // var username = localStorage.getItem("names" + a);
    // var password = localStorage.getItem("pass" + a);
    // var p = document.createElement("p");
    // p.innerHTML = username;
    // p.id = "names" + a;
    // localStorage.setItem(p.id, p.innerHTML);
    // document.getElementById("names").appendChild(p);
    // var p2 = document.createElement("p");
    // p2.innerHTML = password;
    // p2.id = "pass" + a;
    // localStorage.setItem(p2.id, p2.innerHTML);
    // document.getElementById("pass").appendChild(p2);
    // var b = localStorage.getItem("trial");
    // if (a != b && b != null) {
    //     load();
    // }
}


// var a = Number(document.getElementById("trial1").innerHTML);
// document.getElementById("trial1").innerHTML = Number(a + 1);
// document.getElementById("names" + a).innerHTML = localStorage.getItem(p.id);
// document.getElementById("pass" + a).innerHTML = localStorage.getItem(p2.id);
