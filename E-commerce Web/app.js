let signUp = () =>{
    let fullName = document.querySelector("#fullName").value.trim();
    let email = document.querySelector("#email").value.trim();
    let password = document.querySelector("#password").value.trim();

    if(fullName === "" || email === "" || password === ""){
        alert("Please fill all the fields");
        return;
    }

    let allSignupUser = JSON.parse(localStorage.getItem("SignUpUsers")) || [];

    let user = {
        fullName: fullName,
        email:email,
        password: password,
    }

    allSignupUser.push(user);
    localStorage.setItem("SignUpUsers", JSON.stringify(allSignupUser));
    alert("Account created successfully");
    window.location.href = "./login.html";
}

let logIn = () =>{
    let Lemail = document.querySelector("#email").value.trim();
    let Lpassword  = document.querySelector("#password").value.trim();

    let allSignupUser = JSON.parse(localStorage.getItem("SignUpUsers")) || [];

    let filterUser = allSignupUser.filter((user)=>{
        return user.email == Lemail && user.password == Lpassword;
    })

    if(!filterUser){
        alert("Invalid credentials");
        return;
    }

    localStorage.setItem("LoggedInUser", filterUser.fullName);
    alert("Login successful");
    window.location.href = "./e-com.html";
}