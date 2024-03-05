let btn= document.getElementById("submit-button");
let fn= document.getElementById("name");
let email= document.getElementById("email");
let mess= document.getElementById("message");
var emvalid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ; 

function validateForm(event){
    let data= {};
    let err= [];

    if (fn.value !== ""){
        data.name = fn.value;
    }
    else{
        err.push ("Full Name is missing!");
    }

    if(email.value !== ""){
      if(emvalid.test(email.value.trim())){
        data.email= email.value;
      }
      else{
        err.push ("Invalid Email address!");
    }
    }
    else{
        err.push ("Email is missing!");
    }

    if(mess.value.trim() !== ""){
        data.message = mess.value.trim();
    }
    else{
        err.push ("Message is missing!");
    }

    if (err.length > 0){
        console.log("ERRORS");
        err.forEach(err => console.log(err));
    }
    else{
        console.log("DATA SUBMITTED");
        console.log (data);

        fn.value= "";
        email.value= "";
        mess.value = "";
    }

    event.preventDefault();
}

btn.addEventListener("click", validateForm);