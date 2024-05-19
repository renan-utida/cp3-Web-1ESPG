// Exibe uma mensagem de boas-vindas
alert("Bem-vindo!");

//----------------------------------------------------//

// Define um array com os caminhos das imagens para o slide show
/*let imagens = ['../img/nikeAirforce.png', '../img/nikeAirmax.jpeg', '../img/adidasAzul.jpeg', '../img/nikeAirmax1.png'];
let index = 0; // Índice da imagem atual
let time = 3000; // Tempo de transição entre imagens em milissegundos

// Função para o slide show
function slideShow(){
    // Define a imagem do elemento com o ID 'imgbanner' para a imagem atual
    document.getElementById("imgbanner").src = imagens[index];
    index++; // Incrementa o índice para a próxima imagem

    // Verifica se atingiu o final do array de imagens
    if(index == imagens.length){
        index = 0; // Reinicia o índice para o início do array
    }

    // Configura um temporizador para chamar recursivamente a função slideShow após o tempo especificado
    setTimeout(slideShow, time);
}

// Inicia o slide show
slideShow();*/

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}