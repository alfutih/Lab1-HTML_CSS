const form= document.getElementById("contactForm");

const firstName= document.getElementById("firstName");

const lastName= document.getElementById("lastName");

const email= document.getElementById("email");

const phone= document.getElementById("phone");

const subject= document.getElementById("subject");

const message= document.getElementById("message");

const submit= document.querySelector(".submitButton");

const clear= document.querySelector(".clearButton");


//Validation functions for name and message.
function isNotEmpty (inputs){
    return inputs.value.trim().length > 0;
}

function validateMessage(message){
    return message.value.trim().length >= 20;
}

// The problem is when we click submit the browser 
// sends the form, reloads the page and removes all
// JS state. To stop the browser from reloading the page so I can validate the 
// inputs with JS i should use: event.preventDefault();

form.addEventListener("submit", function(event){
    event.preventDefault();
    if(!isNotEmpty(firstName)){
    console.log("The first name is empty");
    }

    //Implement last name validation function

    if(!isNotEmpty(lastName)){
        console.log("The last name is empty");
    }

    //Implement message validation function
    // The validateMessage function checks if the message length is at least 20 characters and returns true or false. 
    // If it’s false, I handle the error in the submit logic.”

    if(!validateMessage(message)){
    console.log("The message must be at least 20 characters.")
    }

});