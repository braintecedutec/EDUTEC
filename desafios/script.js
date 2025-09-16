// Perguntas
const quizData = [
  { question: "Qual prática ajuda a reduzir o estresse e melhora a saúde mental?",
    options: ["Meditação","Dormir pouco","Beber refrigerante","Ficar sem pausas"],
    answer: "Meditação" },
  { question: "Quantos minutos de atividade física moderada são recomendados por semana?",
    options: ["30 minutos","150 minutos","5 horas","Nenhum"],
    answer: "150 minutos" },
  { question: "Qual é um sinal comum de ansiedade?",
    options: ["Respiração acelerada","Relaxamento","Satisfação constante","Calma"],
    answer: "Respiração acelerada" },
  { question: "Beber água regularmente traz qual benefício?",
    options: ["Melhora concentração","Aumenta o estresse","Causa insônia","Piora a digestão"],
    answer: "Melhora concentração" },
  { question: "Qual hábito favorece um sono de qualidade?",
    options: ["Evitar telas antes de dormir","Tomar café à noite","Dormir a qualquer hora","Ficar no celular na cama"],
    answer: "Evitar telas antes de dormir" },
  { question: "Qual hormônio é conhecido como 'hormônio da felicidade'?",
    options: ["Cortisol","Serotonina","Adrenalina","Insulina"],
    answer: "Serotonina" },
  { question: "Caminhar 30 minutos por dia ajuda a:",
    options: ["Melhorar o humor","Aumentar ansiedade","Piorar sono","Reduzir memória"],
    answer: "Melhorar o humor" },
  { question: "Uma técnica eficaz para acalmar a mente é:",
    options: ["Respiração profunda","Dormir tarde","Cafeína em excesso","Isolamento"],
    answer: "Respiração profunda" },
  { question: "A falta de atividade física pode levar a:",
    options: ["Doenças cardíacas","Mais energia","Boa imunidade","Sono melhor"],
    answer: "Doenças cardíacas" },
  { question: "Qual alimento contribui para boa saúde cerebral?",
    options: ["Peixes ricos em ômega-3","Frituras","Refrigerantes","Doces em excesso"],
    answer: "Peixes ricos em ômega-3" }
];

// Seletores
const startScreen = document.getElementById("start-screen");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const startBtn = document.getElementById("start-btn");

let currentQuestion = 0;
let score = 0;

// Iniciar quiz
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quiz.style.display = "block";
  restartBtn.style.display = "block";
  currentQuestion = 0;
  score = 0;
  loadQuestion();
});

// Recomeçar -> volta para tela inicial
restartBtn.addEventListener("click", () => {
  quiz.style.display = "none";
  startScreen.style.display = "flex";
  restartBtn.style.display = "none";
  questionEl.style.display = "block";
  optionsEl.style.display = "grid";
  nextBtn.style.display = "none";
  resultEl.textContent = "";
});

// Carrega pergunta
function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  resultEl.textContent = "";
  nextBtn.style.display = "none";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

// Seleciona resposta
function selectAnswer(selectedBtn, correctAnswer) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) btn.classList.add("correct");
    else if (btn === selectedBtn) btn.classList.add("wrong");
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
    resultEl.textContent = "✅ Resposta correta!";
  } else {
    resultEl.textContent = `❌ Resposta errada! A correta é: ${correctAnswer}`;
  }

  nextBtn.style.display = "inline-block";
}

// Próxima pergunta
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Mostra resultado
function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.textContent = `🎉 Você acertou ${score} de ${quizData.length} perguntas!`;
}
