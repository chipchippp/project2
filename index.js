let id = (id) => document.getElementById(id);

let classes =(classes) => document.getElementsByClassName(classes);

let username = id("username"), 
    password = id("password"), 
    emai = id("email"),
    form = id("form"),
    errorMsg = classes ("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");
    
form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username,0, "Username cannot be blank!");
    engine(email,1, "Username cannot be blank!");
    engine(password,2, "Username cannot be blank!");
});

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){       //ham trim loai bo khoang trang (dau cach)
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";


        failureIcon[serial].style.opactity = "1";
        successIcon[serial].style.opactity = "0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";


        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
};