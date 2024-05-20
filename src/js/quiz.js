const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual é a principal função dos tênis de corrida?",
    answers: [
      { text: "Melhorar a postura", correct: false },
      { text: "Fornecer amortecimento", correct: true },
      { text: "Aumentar a altura", correct: false },
      { text: "Reduzir o peso", correct: false },
    ],
  },
  {
    question: "Qual material é mais comumente usado na fabricação de solas de tênis?",
    answers: [
      { text: "Borracha", correct: true },
      { text: "Algodão", correct: false },
      { text: "Couro", correct: false },
      { text: "Lã", correct: false },
    ],
  },
  {
    question: "Qual é a principal vantagem dos tênis de performance?",
    answers: [
      { text: "Durabilidade", correct: false },
      { text: "Estilo", correct: false },
      { text: "Conforto", correct: true },
      { text: "Aumento de velocidade", correct: false },
    ],
  },
  {
    question: "Por que é importante substituir regularmente os tênis de corrida? ",
    answers: [
      { text: "Para manter a moda atualizada", correct: false },
      { text: "Para aumentar o desempenho atlético", correct: false },
      { text: "Para evitar odores desagradáveis", correct: false },
      { text: "Para garantir amortecimento e suporte adequados", correct: true },
    ],
  },
  {
    question: "Qual a principal diferença entre tênis de corrida e tênis de caminhada?",
    answers: [
      { text: "Peso", correct: false },
      { text: "Altura do calcanhar", correct: true },
      { text: "Forma do bico", correct: false },
      { text: "Material da palmilha", correct: false },
    ],
  },
  {
    question: "Qual o benefício de um tênis com tecnologia de amortecimento em gel?",
    answers: [
      { text: "Maior durabilidade do tênis", correct: false },
      { text: "Estabilidade aumentada", correct: false },
      { text: "Redução do impacto nas articulações", correct: true },
      { text: "Melhor tração", correct: false },
    ],
  },
  {
    question: "Para qual tipo de esporte são indicados os tênis com solado em forma de espinha de peixe?",
    answers: [
      { text: "Tênis", correct: true },
      { text: "Corrida", correct: false },
      { text: "Basquete", correct: false },
      { text: "Caminhada", correct: false },
    ],
  },
  {
    question: "Qual é o principal benefício do alongamento antes do exercício?",
    answers: [
      { text: "Aumentar a força muscular", correct: false },
      { text: "Ganhar massa muscular", correct: false },
      { text: "Prevenir lesões", correct: true },
      { text: "Melhorar a coordenação", correct: false },
    ],
  },
  {
    question: "Qual é o impacto do exercício físico na saúde mental?",
    answers: [
      { text: "Aumenta o estresse", correct: false },
      { text: "Prejudica o sono", correct: false },
      { text: "Diminui a energia", correct: false },
      { text: "Reduz a ansiedade e depressão", correct: true },
    ],
  },
  {
    question: "Qual dessas práticas é essencial para a saúde do coração?",
    answers: [
      { text: "Fumar ocasionalmente", correct: false },
      { text: "Praticar exercícios aeróbicos regularmente", correct: true },
      { text: "Consumir alimentos ricos em açúcar", correct: false },
      { text: "Evitar todas as atividades físicas", correct: false },
    ],
  },
]
