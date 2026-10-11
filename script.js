const form = document.getElementById("form") ;

form.addEventListener("submit" , function(event){
    event.preventDefault()  ;

    let name =document.getElementById("name").value ;
    let dob =document.getElementById("dob").value ;
    // let gender =document.getElementsByClassName("gender").value ;
    let gender =document.querySelector('input[name="gender"]:checked');
    let course =document.getElementById("course").value ;
    let mobile =document.getElementById("mobile").value ;
    let email =document.getElementById("email").value ;
    let address =document.getElementById("address").value ;

    let valid = true ;

    document.getElementById("nameError").innerText = "";
    document.getElementById("dobError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("courseError").innerText = "";
    document.getElementById("mobileError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("addressError").innerText = "";

    if (name.trim() === "") { 
       document.getElementById("nameError").innerText = "Name is required" ;
       valid = false ;
    }

    if(dob === ""){
        document.getElementById("dobError").innerText = "DOB is required";
         valid = false ;
    }

    if(gender === null){
        document.getElementById("genderError").innerText = "Gender is required" ;
         valid = false ;
    }

    if(course === ""){
        document.getElementById("courseError").innerText = "Course is required" ;
         valid = false ;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
        document.getElementById("mobileError").innerText = "Mobile No is required"
        valid = false ;
    }

    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required" ;
        valid = false ;
    }

    if(address === ""){
       document.getElementById("addressError").innerText = "Address is required" ;
       valid = false ;
    }

    if (valid === false){
        return ;
    }

    document.getElementById("result").innerHTML =
    "<b> <hr> </b>" +
    "<h1> Registration Form </h1> " + 
    "<b> Name : </b>" + name +  "<br>" +
    "<b> DOB : </b>" + dob + "<br>" +
    "<b> Gender : </b>" + gender.value + "<br>" +
    "<b> Course : </b>" + course + "<br>" +
    "<b> Mobile : </b>" + mobile + "<br>" +
    "<b> Email : </b>" + email + "<br>" +
    "<b> Address : </b>" + address ;

});


    form.addEventListener("reset", function() {
    document.querySelectorAll("span").forEach(function(span) {
        span.innerText = "";
    });

    document.getElementById("result").innerHTML = "";
});

