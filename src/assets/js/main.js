let rightAnswersCounter = 0;

let question = 1;

let numbersOfQuestions = 5; //Manuel set this value

let timeoutActive = false;

let clickedImage;

let answered = false;

let answer1 =[
    {answer: true, question: "question1"},
    {answer: false, question: "question2"},
    {answer: false, question: "question3"},
    {answer: false, question: "question4"},
    {actualQuestion: "Hvad er 1 + 1?"}
];

function hideWinscreenArrow() {
    document.getElementById("winScreen").style.display = "none"
}

function winMessage() {
    document.getElementById("results").innerHTML = "Du havde " + sessionStorage.getItem("SessionName")+ "/" + numbersOfQuestions + " rigtige!"
}

function setQuestions() {
    document.getElementById("answerToQuestion1").innerHTML = answer1[0].question;
    document.getElementById("answerToQuestion2").innerHTML = answer1[1].question;
    document.getElementById("answerToQuestion3").innerHTML = answer1[2].question;
    document.getElementById("answerToQuestion4").innerHTML = answer1[3].question;
    document.getElementById("actualQuestion").innerHTML = answer1[4].actualQuestion;
    document.getElementById("questionOf").innerHTML = 'Spørgsmål ' + question + '/' + numbersOfQuestions +':'
}

function question1() {
    if (answered === false) {
        clickedImage = 1;
        if (answer1[0].answer === true) {
            rightAnswersCounter++;
            changeRightImages();
        }
        changeWrongImages();
        answered = true;
    }
    showWinArrow();
}

function question2() {
    if (answered === false) {
        clickedImage = 2;
        if (answer1[1].answer === true) {
            rightAnswersCounter++;
            changeRightImages();
        }
        changeWrongImages();
        answered = true;
    }
    showWinArrow();
}

function question3() {
    if (answered === false) {
        clickedImage = 3;
        if (answer1[2].answer === true) {
            rightAnswersCounter++;
            changeRightImages();
        }
        changeWrongImages();
        answered = true;
    }
    showWinArrow();
}

function question4() {
    if (answered === false) {
        clickedImage = 4;
        if (answer1[3].answer === true) {
            rightAnswersCounter++;
            changeRightImages();
        }
        changeWrongImages();
        answered = true;
    }
    showWinArrow();
}

function checkQuestion(){
    if (question === 1){
        answerIs2();
        question++;
    }
    else if (question === 2){
        answerIs3();
        question++;
    }
    else if (question === 3){
        answerIs4();
        question++;
    }
    else if (question === 4){
        answerIs5();
        question++;
    }
}

function answerIs1() {
  answer1 =[
    {answer: true, question: "question1"},
    {answer: false, question: "question2"},
    {answer: false, question: "question3"},
    {answer: false, question: "question4"},
    {actualQuestion: "Hvad er 1 + 1?"}
  ];
}

function answerIs2() {
    answer1 =[
      {answer: false, question: "question5"},
      {answer: true, question: "question6"},
      {answer: false, question: "question7"},
      {answer: false, question: "question8"},
      {actualQuestion: "Hvad er 2 + 2?"}
    ];
}

function answerIs3() {
    answer1 =[
      {answer: false, question: "question9"},
      {answer: false, question: "question10"},
      {answer: true, question: "question11"},
      {answer: false, question: "question12"},
      {actualQuestion: "Hvad er 3 + 3?"}
    ];
}

function answerIs4() {
    answer1 =[
      {answer: false, question: "question13"},
      {answer: false, question: "question14"},
      {answer: false, question: "question15"},
      {answer: true, question: "question16"},
      {actualQuestion: "Hvad er 4 + 4?"}
    ];
}

function answerIs5() {
    answer1 =[
      {answer: false, question: "question17"},
      {answer: true, question: "question18"},
      {answer: false, question: "question19"},
      {answer: false, question: "question20"},
      {actualQuestion: "Hvad er 5 + 5?"}
    ];
}

function showWinArrow(){
  if(question === numbersOfQuestions){
    document.getElementById("confirmButtonQuiz").style.display = "none"
    document.getElementById("winScreen").style.display = "block"
  }
}

function changeImages() {
    let image1 = document.getElementById('buttonImage1');
    let image2 = document.getElementById('buttonImage2');
    let image3 = document.getElementById('buttonImage3');
    let image4 = document.getElementById('buttonImage4');

    image1.src='assets/imgs/Answer.png';
    image2.src='assets/imgs/Answer.png';
    image3.src='assets/imgs/Answer.png';
    image4.src='assets/imgs/Answer.png';

    setQuestions();

    timeoutActive = false;
}

function changeRightImages() {
    let image1 = document.getElementById('buttonImage1');
    let image2 = document.getElementById('buttonImage2');
    let image3 = document.getElementById('buttonImage3');
    let image4 = document.getElementById('buttonImage4');

    if (answered === false){
        if (answer1[0].answer === true) {
            image1.src='assets/imgs/AnswerRight.png';
        }
        else if (answer1[1].answer === true) {
            image2.src='assets/imgs/AnswerRight.png';
        }
        else if (answer1[2].answer === true) {
            image3.src='assets/imgs/AnswerRight.png';
        }
        else if (answer1[3].answer === true) {
            image4.src='assets/imgs/AnswerRight.png';
        }
    }
}

function changeWrongImages() {
    let image1 = document.getElementById('buttonImage1');
    let image2 = document.getElementById('buttonImage2');
    let image3 = document.getElementById('buttonImage3');
    let image4 = document.getElementById('buttonImage4');

    if (answered === false){
        if (answer1[0].answer === false && clickedImage === 1) {
            image1.src='assets/imgs/AnswerWrong.png';
        }
        else if (answer1[1].answer === false && clickedImage === 2) {
            image2.src='assets/imgs/AnswerWrong.png';
        }
        else if (answer1[2].answer === false && clickedImage === 3) {
            image3.src='assets/imgs/AnswerWrong.png';
        }
        else if (answer1[3].answer === false && clickedImage === 4) {
            image4.src='assets/imgs/AnswerWrong.png';
        }
    }
}

function changeFunction() {
    if(question === numbersOfQuestions){
        thisSessionStorage();
    }

    if (answered === true){
        checkQuestion();
        changeImages();
        answered = false;
    }
}

function thisSessionStorage() {
  sessionStorage.setItem("SessionName",rightAnswersCounter);
}

function reloadQuiz() {
  location.reload();
}
