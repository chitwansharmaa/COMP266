//Contact form validation 

/**
 * 
 * Various functions here will help validate contact form enteries such as name, email etc. 
 */

/**
 * 
 * validateName picks up the contact name from span ID in contact.html
 * This function checks for proper name to be entered in the field. 
 * If no input is added then form gives the user a prompt mentioning that Name is a required field. 
 * If the inputed value has special characters the form prompts user to enter proper values.
 * Once a proper value is added the form accepts the entry as valid. 
 * All this is done is real time as the user types.
 */
function validateName() {

    var name = document.getElementById('contact-name').value;
  
    if(name.length == 0) {
  
      producePrompt('Name is required', 'name-error' , 'red')
      return false;
  
    }
  
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  
      producePrompt('First and last name, please.','name-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'name-error', 'green');
    return true;
  
  }
  
/**
 * 
 * validateEmail picks up the contact email from span ID in contact.html
 * This function checks for proper email to be entered in the field. 
 * If no input is added then form gives the user a prompt mentioning that Email is a required field. 
 * If the inputed value doesn't contain characters such as "@" the form prompts user to enter proper values.
 * Once a proper value is added the form accepts the entry as valid. 
 * All this is done is real time as the user types.
 */
  function validateEmail () {
  
    var email = document.getElementById('contact-email').value;
  
    if(email.length == 0) {
  
      producePrompt('Email is required','email-error', 'red');
      return false;
  
    }
  
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
      producePrompt('Email Invalid', 'email-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'email-error', 'green');
    return true;
  
  }
  
/**
 * 
 * validateMessage picks up the message that the user wants to send to the website from span ID in contact.html
 * This function checks for proper message to be entered in the field. 
 * I have set required number of characters to 20 to get a proper and valid message. 
 * If the inputed value doesn't contain enough characters the form prompts user to add more characters
 * Once a proper value is added the form accepts the entry as valid. 
 * All this is done is real time as the user types.
 */
  function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 20;
    var left = required - message.length;
  
    if (left > 0) {
      producePrompt(left + ' more characters required','message-error','red');
      return false;
    }
  
    producePrompt('Valid', 'message-error', 'green');
    return true;
  
  }
  
/**
 * 
 * function validateForm validates the whole form.
 * If any of the entries are not valid then the user gets the prompt to correct the entry and unless the whole form is correctly validated 
 * the user won't be able to submit the form.
 * 
 */
  function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      jsShow('submit-error');
      producePrompt('Please fix errors to submit.', 'submit-error', 'red');
      setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
    else {
  
    }
  }
  
  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  
  
  
  function producePrompt(message, promptLocation, color) {
  
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
  
  
  }