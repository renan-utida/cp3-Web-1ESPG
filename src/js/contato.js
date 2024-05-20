const form = document.getElementById('form')
const email = document.getElementById('email')
const username = document.getElementById('username')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()

    if (usernameValue === '') {     //mostrar que esta vazio

        errorValidation(username, 'Preencha esse campo!')
    } else {
        successValidation(username)
    }
    

    if (emailValue === '') {        //mostrar que esta vazio

        errorValidation(email, 'Preencha esse campo!')
    } else {
        successValidation(email)
    }


    if (telefoneValue === '') {     //mostrar que esta vazio
        errorValidation(telefone, 'Preencha esse campo!')
    } else {
        successValidation(telefone)
    }
}

function errorValidation(input, message){
    const formControl = input.parentElement;

    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'

}

function successValidation(input){
    const formControl = input.parentElement;
    
    formControl.className = 'form-control success'
}


//-------------------------------------------------------------------//
//DOUBLE CLICK PARA CORES

let colors = ['#dfdfdf', '#add8e6', '#9bedd8'];
let colorIndex = 0;

document.body.style.backgroundColor = colors[colorIndex]; // Define a cor inicial

document.body.addEventListener('dblclick', function() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];
});