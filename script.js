let getInput = document.querySelector('.input')
let button =  document.querySelector('.button')
let error = document.querySelector('.error')
const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

button.addEventListener('click', () => {  
if (getInput.value.match(emailRegex)){
    error.textContent = 'Thank you for subscribing to Base Apparel'
}
else{
    error.textContent = 'Please enter a valid email'
}
})
