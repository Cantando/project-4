(function(){
	// Functions
	function buildQuiz(){
	  // variables 
	  const output = [];
  
	//  for my questions
	  myQuestions.forEach(
		(currentQuestion, questionNumber) => {
  
		  const answers = [];
//   for each answer
		  for(letter in currentQuestion.answers){
  
			// push answer
			answers.push(
			  `<label>
				<input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} :
				${currentQuestion.answers[letter]}
			  </label>`
			);
		  }
  
		  // add  question and answers to the output
		  output.push(
			`<div class="slide">
			  <div class="question"> ${currentQuestion.question} </div>
			  <div class="answers"> ${answers.join("")} </div>
			</div>`
		  );
		}
	  );
  
	  // finally combine our output list into one string of HTML and put it on the page
	  quizContainer.innerHTML = output.join('');
	}
  
	function showResults(){
  
	//  answers from quiz
	  const answerContainers = quizContainer.querySelectorAll('.answers');
//  tracking user answers
	  let numCorrect = 0;
  
	  // for each question...
	  myQuestions.forEach( (currentQuestion, questionNumber) => {
  
		// find  answer
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		// if answer is correct
		if(userAnswer === currentQuestion.correctAnswer){
		  // add to the number of correct answers
		  numCorrect++;
  
		
		
		}
		
	  });
  
	//  correct answers
	  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	}
  
	function showSlide(n) {
	  slides[currentSlide].classList.remove('active-slide');
	  slides[n].classList.add('active-slide');
	  currentSlide = n;
	  
	  if(currentSlide === slides.length-1){
		nextButton.style.display = 'none';
		submitButton.style.display = 'inline-block';
	  }
	  else{
		nextButton.style.display = 'inline-block';
		submitButton.style.display = 'none';
	  }
	}
 
  


	function showNextSlide() {
	  showSlide(currentSlide + 1);
	 
	}
  
	
	// Variables
	
	var timerDisplay = document.querySelector('.timer');
	var timer= 30;
	function showTimer() {
		timerDisplay.textContent = timer;
		var timeInterval = setInterval(function () {
			timer--;
			timerDisplay.textContent =timer;
			if (timer === 0) {
				clearInterval(timeInterval)
			}
		}, 1000)
	}
	showTimer();
	
	const quizContainer = document.getElementById('quiz');
	const resultsContainer = document.getElementById('results');
	const submitButton = document.getElementById('submit');
	const myQuestions = [
	  {
		question: "Who invented JavaScript?",
		answers: {
		  a: "Douglas Crockford",
		  b: "Sheryl Sandberg",
		  c: "Brendan Eich"
		},
		correctAnswer: "c"
	  },
	  {
		question: "Which one of these is a JavaScript package manager?",
		answers: {
		  a: "Node.js",
		  b: "TypeScript",
		  c: "npm"
		},
		correctAnswer: "c"
	  },
	  {
		question: "Which tool can you use to ensure code quality?",
		answers: {
		  a: "Angular",
		  b: "jQuery",
		  c: "RequireJS",
		  d: "ESLint"
		},
		correctAnswer: "d"
	  },
	  {
		question: "Which of the following is not a key word in Java?",
		answers: {
		  a: "class",
		  b: "interface",
		  c: "extends",
		  d: "abstraction"
		},
		correctAnswer: "c"
	  },
	  {
		question: "Which of the following is an interface ?",
		answers: {
		  a: "Thread",
		  b: "Runnable",
		  c: "Date",
		  d: "Calendar"
		},
		correctAnswer: "1"
	  }
	];
  
// call out quiz

	buildQuiz();

  
	
	
	const nextButton = document.getElementById("next");
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
  
	// Show slide
	showSlide(currentSlide);
  
	// Event listeners
	submitButton.addEventListener('click', showResults);

	nextButton.addEventListener("click", showNextSlide);
  })();
  

 

