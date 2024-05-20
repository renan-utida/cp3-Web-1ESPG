//Criando um Slideshow automatico

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Troca de imagem a cada 5 segundos
}


//Login e Senha

//VALIDAÇÃO DE LOGIN

function validar(){
    // Declarando as variáveis
    let usuario = document.getElementById("usuario").value.toLowerCase(); // Obtém o valor do campo de usuário em letras minúsculas
    let senha = document.getElementById("senha").value; // Obtém o valor do campo de senha

    // Verifica se o usuário é "admin" e a senha é "12345"
    if(usuario === "admin" && senha === "12345"){
        window.open("quiz.html"); // Abre a página "quiz.html"
    } else {
        alert("Usuário ou senha inválidos"); // Exibe um alerta se o usuário ou a senha forem inválidos
    }
}