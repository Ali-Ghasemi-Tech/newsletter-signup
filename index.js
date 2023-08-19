const invalidText = document.getElementById('email-invalid-text');
const input = document.getElementById('input');
const button = document.getElementById('signup-button');
const successScreen = document.getElementById('success-popup');
const successText = document.getElementById('success-text');
const dismiss =document.getElementById('dismiss-button');
const success = document.getElementById('success');
const already = document.getElementById('already-done');
const bg = document.getElementById('success-bg');
let validEmail;

button.addEventListener('click' , () =>{
    let email = String(input.value);
    email = email.split('');
    
    
    if(!validateEmail(email)){
        success.classList.add('hidden');
        invalidText.classList.remove('hidden');
        already.classList.add('hidden');

        input.style.backgroundColor = "rgb(255 237 213)";
        input.style.color ="rgb(194 65 12)";
        input.style.borderColor = "rgb(251 146 60)";
    } else if(validateEmail(email) && validEmail !== input.value) {
        if (successText.hasChildNodes()){ 
            console.log(successText.hasChildNodes());
            let child = successText.lastElementChild;
            successText.removeChild(child);
        }
        const email = input.value;
        const span =  document.createElement('span');
        span.innerHTML = `A confirmation email has been sent to ${email.bold()}. 
        Please open it and click the button inside to confirm your subscription.`
        successText.appendChild(span);

        bg.classList.remove('opacity-0');
        bg.classList.remove('-z-10');
        successScreen.classList.remove('translate-y-full');
        successScreen.classList.remove('md:translate-y-[200%]');

        success.classList.remove('hidden');
        invalidText.classList.add('hidden');
        already.classList.add('hidden');

        input.style.backgroundColor = "rgb(187 247 208)";
        input.style.color ='green';
        input.style.borderColor = "rgb(156 163 175)";
        // signup just once
        validEmail = input.value;
    }
    else if(validEmail === input.value){
        already.classList.remove('hidden');
        success.classList.add('hidden');
        invalidText.classList.add('hidden');

    }
}); 

dismiss.addEventListener('click' , () =>{
    successScreen.classList.add('translate-y-full');
    successScreen.classList.add('md:translate-y-[200%]');
    bg.classList.add('opacity-0');
    bg.classList.add('-z-10');
});


function validateEmail(email) {
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
  }
  
