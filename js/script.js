// Full Stack Javascript
// Project 3
// Cedric P. Clark





// Global variables

let total = 0;
const nameInput = document.querySelector('#name');
const email = document.querySelector('#mail');
const totalPrice = document.querySelector('.total');
const checkboxParent = document.getElementsByClassName('pValidation');
const checkboxes = checkboxParent[4];
const ccNumber = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const validationFields = document.querySelectorAll('#validation');
const CreditCardFields = document.getElementById('credit-card');
const creditCard = document.querySelector('#credit-card');
const $form = $('form');


// Error Messages

validationFields[0].style.visibility = 'hidden';
validationFields[1].style.visibility = 'hidden';
validationFields[2].style.visibility = 'hidden';
validationFields[3].style.visibility = 'hidden';


// Regular Expressions

const regexName = /^[A-Za-z ][A-Za-z0-9@ ]*$/;
const regexEmail = /^[^@]+@[^@]+\.[^@]+$/;
const regexCC = /^([0-9]{13,16})$/;
const regexZip = /^([0-9]{5})$/;
const regexCVV = /^([0-9]{3})$/;


// Sets form focus to 'name' ID input field

const getFocus = () => {
    document.getElementById('name').focus();
}

// Creates input element when the user selects 'other' for job role.
// Hides the input for 'other' option when not selected and displays when selected.

const jobRole = () => { 
        const title = document.getElementById('title');
        const otherTitle = document.getElementById('other-title');
        const fieldset = document.getElementsByTagName('fieldset');
        const labelOther = fieldset[0].children[4];



        otherTitle.style.visibility = 'hidden';
        labelOther.style.visibility = 'hidden';
        title.addEventListener('change' , (event) => {
            
            if(event.target.value === 'other'){
                otherTitle.style.visibility = '';
                labelOther.style.visibility = '';
        }   else{           
                otherTitle.style.visibility = 'hidden';      
                labelOther.style.visibility = 'hidden';
        }
    });
}



// Hides 'js puns' options if 'heart js' is selected along with the 'color' label.
// Hides 'heart js' options if 'js puns' is selected along with the 'color' label.
// Color selection is hidden until the user selects a design Theme
const shirtInfo = () => {
    const design = document.getElementById('design');
    const colorID = document.getElementById('color');
    const colorLabel = document.getElementById('colors-js-puns');
    const color = colorLabel.children[0];
    color.hidden = true;
    colorID.hidden = true;

    design.addEventListener('change' , (event) => {     
        if( event.target.value === 'js puns'){
            colorID.hidden = false;
            color.hidden = false;
            
            colorID[0].style.display = 'block';
            colorID[1].style.display = 'block';
            colorID[2].style.display = 'block';
            colorID[3].style.display = 'none';
            colorID[4].style.display = 'none';
            colorID[5].style.display = 'none';
            colorID[0].selected = true;

        } else if (event.target.value === 'heart js'){
            colorID.hidden = false;
            color.hidden = false;

            colorID[0].style.display = 'none';
            colorID[1].style.display = 'none';
            colorID[2].style.display = 'none';
            colorID[3].style.display = 'block';
            colorID[4].style.display = 'block';
            colorID[5].style.display = 'block';
            colorID[3].selected = true;

         } else {
            colorID.hidden = true;
            color.hidden = true;
        }   
    });
}


 
// Doesn't allow the user to select conflicting activity schedules.
// Disables the activities that conflict with what the user selects and changes the color to gray of the disabled labels.

const activities = () => {

/** Activity prices**/

const main = 200;

const js_frameworks = 100;
const express = 100;
const build_tools = 100;

const js_libs = 100;
const node = 100;
const npm = 100;

/********************/

const  fieldSetAct = document.querySelector('.activities');
const div = document.createElement('div');
fieldSetAct.append(div);

const h3 = document.createElement('h3');
h3.setAttribute('class','total');
h3.innerHTML = 'Total: $' + total;
div.append(h3);

const paragrapghAct = document.getElementsByClassName('pValidation');
const actColor = paragrapghAct[4].children;



// Main Conference

$('input[name=all]').change(function() {
    if($(this).is(':checked')) {
        // Checkbox is checked
        total += 200;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);

    } else {
        // Checkbox is not checked
        total -= 200
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        
    }
});

// 9am - 12pm Tuesday  Activities

$('input[name=js-frameworks]').change(function() {
    if($(this).is(':checked')) {
        // Checkbox is checked
        total += js_frameworks;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=express]').prop("disabled", true);
        actColor[4].style.color = 'gray';
       
    } else {
        // Checkbox is not checked
        total -= js_frameworks
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=express]').prop("disabled", false);
        actColor[4].style.color = 'black';
    }
});
    
$('input[name=express]').change(function() {
    if($(this).is(':checked')) {
        // Checkbox is checked
        total += express;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=js-frameworks]').prop("disabled", true);
        actColor[2].style.color = 'gray';

    } else {
        // Checkbox is not checked
        total -= express
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=js-frameworks]').prop("disabled", false);
        actColor[2].style.color = 'black';
        
    }
});

// 9am - 12pm Wednesday Activities 

$('input[name=build-tools]').change(function() {
    if($(this).is(':checked')) {
        // Checkbox is checked
        total += build_tools;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
       
    } else {
        // Checkbox is not checked
        total -= build_tools;   
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
       }
    });

// 1pm - 4pm Tuesday  Activities 

$('input[name=js-libs]').change(function() {
    if($(this).is(':checked')) {
        // Checkbox is checked
        total += js_libs;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=node]').prop("disabled", true);
        actColor[6].style.color = 'gray';
        
        

    } else {
        // Checkbox is not checked
        total -= js_libs;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=node]').prop("disabled", false);
        actColor[6].style.color = 'black';
        
    }
});
    
$('input[name=node]').change(function() {
    if($(this).is(':checked')) {
        // Checkbox is checked
        total += node;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=js-libs]').prop("disabled", true);
        actColor[3].style.color = 'gray';
        

    } else {
        // Checkbox is not checked
        total -= node;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        $('input[name=js-libs]').prop("disabled", false);
        actColor[3].style.color = 'black';
    }
});

// 1pm - 4pm Wednesday Activities

$('input[name=npm]').change(function() {
    if($(this).is(':checked')) {
        // Checkbox is checked
        total += npm;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
    } else {
        // Checkbox is not checked
        total -= npm;
        h3.innerHTML = 'Total: $' + total;
        div.append(h3);
        console.log(total);
        }
    });
}

// 



// Starts with 'credit card' as the default payment selection.
// Hides the other selections if 'credit card ' is selected.
// If 'PayPal' is selected the other options including content will be hidden.
// If 'Bitcoin' is selected the other options including content will be hidden.


const payment = () => {

    const payments = document.querySelector('#payment');
    const fieldSetTags = document.getElementsByTagName('fieldset');
    payments[0].setAttribute('disabled','disabled');
    payments[1].setAttribute('selected','');

    
    creditCard.style.visibility = '';

    const bitCoin = fieldSetTags[3].children[5];
    bitCoin.style.visibility = 'hidden';

    const payPal = fieldSetTags[3].children[4];
    payPal.style.visibility = 'hidden';


    payments.addEventListener('change', (event) => {

        if(event.target.value === 'credit card') { 
            creditCard.style.visibility = '';
            bitCoin.style.visibility = 'hidden';
            payPal.style.visibility = 'hidden';

    }   else if (event.target.value === 'paypal'){
            creditCard.style.visibility = 'hidden';
            bitCoin.style.visibility = 'hidden';
            payPal.style.visibility = '';

    }   else if (event.target.value === 'bitcoin'){
            creditCard.style.visibility = 'hidden';
            bitCoin.style.visibility = '';
            payPal.style.visibility = 'hidden';

     }

    });
}

        // Name Input Validation

const validateName = () => {   
    if ( regexName.test(nameInput.value)) { 
        return true;

    } else if (nameInput.value === ''){
        return false;
          
    }else  {   
        return false;
    }
 }    
         
nameInput.addEventListener('input', () =>  {
    if ( regexName.test(nameInput.value)) {
        $(nameInput).css("border","2px solid #c1deeb");
        validationFields[0].style.visibility = 'hidden';
        console.log(' name right'); 
        
    } else {
        $(nameInput).css("border","2px solid red");
        validationFields[0].textContent = 'Must contain your name.';
        validationFields[0].style.visibility = '';
        console.log('name wrong');  
    }
});








        // Email Input Validation

const validateEmail = () => {    
    if ( regexEmail.test(email.value)) {
            return true;

    }   else if (email.value === '') {
            return false;

    }   else {     
            return false;
    }
}  

email.addEventListener('input', () => {
    if ( regexEmail.test(email.value)) {
        $(email).css("border","2px solid #c1deeb");
        validationFields[1].style.visibility = 'hidden';
        console.log('email right'); 
        
    } else {
        $(email).css("border","2px solid red");
        validationFields[1].textContent = 'Email field must contain an valid Email.';
        validationFields[1].style.visibility = '';
        console.log('email wrong');  
    }
});

        // Activities Validation

const validateActivities = () => { 
    if(total >= 100 ) {
        return true;

    } else {
        return false;
    }
}  

checkboxes.addEventListener('change', () => {
     if(total > 0) {
        validationFields[2].style.visibility = 'hidden';
        console.log('activities right');
        
    } else if (total === 0){
        validationFields[2].textContent = 'Must select at least one activity.';
        validationFields[2].style.visibility = '';
        console.log('total');
    }
});

        // Credit Card Validation

const validateCC = () => {         
    if( regexCC.test(ccNumber.value)) {
            return true;

    }   else if (creditCard.style.visibility === 'hidden' ){
            return true;

    }   else if ( ccNumber.value === ''){
            return false;
    }
        else {
            return false;
       } 
}
       
ccNumber.addEventListener('input', () => {
    if( regexCC.test(ccNumber.value)) {
        console.log('cc right');
        $(ccNumber).css("border","2px solid #c1deeb");
       
    }   else {
             $(ccNumber).css("border","2px solid red");
             validationFields[3].textContent = 'The highlighted Field is incorrect.';
             validationFields[3].style.visibility = '';
             console.log('cc wrong');           
    }
   
});




// Zip Validation

const validateZip = () => { 
        if( regexZip.test(zip.value)) {
            return true;

        } else if (creditCard.style.visibility === 'hidden' ){
            return true;

       }  else if ( zip.value === ''){
            return false;
       }
          else {
            return false;
       } 
}
        
zip.addEventListener('input', () => {
        if( regexZip.test(zip.value)) {
            console.log('zip right');
            $(zip).css("border","2px solid #c1deeb");

        }   else {
                validationFields[3].textContent = 'The highlighted Field is incorrect.';
                validationFields[3].style.visibility = '';
                $(zip).css("border","2px solid red");
                console.log('zip wrong');
        }
});

// CVV Validation

const validateCVV = () => { 
    if( regexCVV.test(cvv.value)) {

        return true;

       }else if (creditCard.style.visibility === 'hidden' ){
            return true;

       }else if ( cvv.value === ''){
            return false;
       }
        else {
            return false;
       } 
}

cvv.addEventListener('input', () => {

        if( regexCVV.test(cvv.value)) {
            console.log('cvv right');
            $(cvv).css("border","2px solid #c1deeb");
            
        }   else  {
            validationFields[3].textContent = 'The highlighted Field is incorrect.';
            validationFields[3].style.visibility = '';
            $(cvv).css("border","2px solid red");
            console.log('cvv wrong');
            
        }
});

CreditCardFields.addEventListener('input', () => {
    if(validateCC() && validateZip() && validateCVV() === true){
        validationFields[3].style.visibility = 'hidden';

    }  else {
        null;
    } 

});



// Form submit validation

$('#form').on('submit', function(event) {
   if(  validateName()       &&
        validateEmail()      &&
        validateActivities() &&
        validateCC()         &&
        validateZip()        &&
        validateCVV()           )
      { 
        alert('Form submitted!');
        
      }
    else{

        if(validateName() === false){
        validationFields[0].textContent = 'Must contain your name.';
        validationFields[0].style.visibility = '';
        event.preventDefault();

     }  else if (validateEmail() === false){
        validationFields[1].textContent = 'Email field must contain an valid Email.';
        validationFields[1].style.visibility = '';
        event.preventDefault();

     }  else if (validateActivities() === false){
        validationFields[2].textContent = 'Must select at least one activity.';
        validationFields[2].style.visibility = '';
        event.preventDefault();
     }    
        else if (validateCC() === false){
        validationFields[3].textContent = 'The highlighted Field is incorrect.';
        validationFields[3].style.visibility = '';
        event.preventDefault();
        $(ccNumber).css("border","2px solid red");
      }   
        else if (validateZip() === false){
        validationFields[3].textContent = 'The highlighted Field is incorrect.';
        validationFields[3].style.visibility = '';
        $(zip).css("border","2px solid red");
        event.preventDefault();
     }
        else if (validateCVV() === false){
        validationFields[3].textContent = 'The highlighted Field is incorrect.';
        validationFields[3].style.visibility = '';
        $(cvv).css("border","2px solid red");
        event.preventDefault();
        }  

    }       
});
   
    activities();
    getFocus();
    jobRole();
    shirtInfo();
    payment();


    


