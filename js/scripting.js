
console.log("JS IS Connected to Index")
//First I set all my environment variables 
//Use the DOM to store HTML elements inside the following Javascript variables
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const alertPlaceholderTwo = document.getElementById('liveAlertPlaceholderTwo');

let btnClearOne = document.getElementById('liveAlertBtn');

let btnClearTwo = document.getElementById('liveAlertBtnTwo');

let inputs = document.querySelectorAll('input');

let textarea = document.querySelectorAll('textarea');

let select = document.querySelectorAll('select');


function sendMessage(params) {

    console.log("Button Pressed")
    
    var tempParams ={
        fullName:document.getElementById("fullName").value,
        phoneNumber:document.getElementById("phoneNumber").value, 
        email:document.getElementById("emailAddress").value,
        serviceNeeded:document.getElementById("serviceNeeded").value,
        propertyType:document.getElementById("propertyType").value,
        customMessage:document.getElementById("customMessage").value
    };

    if(tempParams.email.length>10 && tempParams.fullName.length>5 && tempParams.phoneNumber.length>6 && tempParams.serviceNeeded.length > 1) {
        emailjs.send('service_aunxboi', 'template_e5a7xf8', tempParams).then(function(res){
            console.log("successful", res.status);
                })

            alert('Your Message Has Been Sent!', 'success');
    }

    else {
        alert('Please Fill Out The Entire Form Correctly', 'warning')
    }
}


//Creating the two alert message functions and storing it inside a variable
//These methods accept two parameters
// 1) The message contained in the alert box
// 2) The Bootstrap class I will use to style the alert box
const alert = (message, type) => {
    const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholder.append(wrapper)
      }


//The numbers only input function
function restrictAlphabets(e) {
    var x = e.which || e.keycode;
    if((x>=48 && x<=57)) {
      return true;
    }
    else {
      return false;
    }
  }