const quizData = [
  [question = "Qui était le premier membre de l'équipage de Luffy à se joindre à lui après le départ de son village natal ?",
      answers= ["Roronoa Zoro", "Nami", "Usopp", "Sanji"],
      correctAnswer= "Roronoa Zoro"]
  
  [question = "Quelle fonction JavaScript est utilisée pour convertir une chaîne de caractères en entier ?",
    answers= ["parseInt()", "convertToInt()", "toInteger()"],
    correctAnswer= "parseInt()"]
  [question = "Quelle propriété CSS est utilisée pour centrer un élément horizontalement ?",
    answers= ["text-align: center;", "align: center;", "center: horizontal"],
    correctAnswer= "text-align center"]
  ];
  
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answers');
  const nextButton = document.getElementById('nextButton');
  const resultElement = document.getElementById('result');
  const feedbackElement = document.getElementById('feedback');
  const scoreElement = document.getElementById('score');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = '';
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer;
      button.classList.add('answer');
      button.addEventListener('click', () => selectAnswer(answer, currentQuestion.correctAnswer));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct!";
      feedbackElement.classList.add('correct');
    } else {
      feedbackElement.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
      feedbackElement.classList.add('incorrect');
    }
    answerButtons.querySelectorAll('.answer').forEach(button => {
      button.disabled = true;
    });
    nextButton.classList.remove('hide');
  }
  
  function showResult() {
    resultElement.innerText = `Your score: ${score}/${quizData.length}`;
    scoreElement.innerText = `Your score: ${score}/${quizData.length}`;
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
      feedbackElement.textContent = '';
      feedbackElement.classList.remove('correct', 'incorrect');
      nextButton.classList.add('hide');
    } else {
      showResult();
      nextButton.disabled = true;
      scoreElement.classList.remove('hide');
    }
  });
  
  showQuestion();
  