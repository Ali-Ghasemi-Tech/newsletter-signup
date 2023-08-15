const invalidText = document.getElementById('email-invalid-text');
const input = document.getElementById('input');
const button = document.getElementById('signup-button');

button.addEventListener('click' , () =>{
    let email = String(input.value);
    email = email.split('');
    
    if(!validateEmail(email)){
        invalidText.classList.remove('hidden');
        input.style.backgroundColor = "rgb(255 237 213)";
        input.style.color ="rgb(194 65 12)";
        input.style.borderColor = "rgb(251 146 60)";
    } else if(validateEmail(email)) {
        // go to the success page
        console.log('succuss')
    }
    console.log(validateEmail(email));
}); 


function validateEmail(email) {
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
  }
  
