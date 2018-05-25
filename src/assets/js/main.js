let rightAnswersCounter = 0;

let question = 1;

let numbersOfQuestions = 10; //Manuel set this value

let timeoutActive = false;

let clickedImage;

let answered = false;

let answer1 =[
    {answer: false, question: "En pung"},
    {answer: true, question: "En sten fra en bunker"},
    {answer: false, question: "En bog"},
    {answer: false, question: "En lommeregner"},
    {actualQuestion: "Hvilken ting finder du i genstands kasse 1? (mærke)"}
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
    else if (question === 5){
      answerIs6();
      question++;
    }
    else if (question === 6){
      answerIs7();
      question++;
    }
    else if (question === 7){
      answerIs8();
      question++;
    }
    else if (question === 8){
      answerIs9();
      question++;
    }
    else if (question === 9){
      answerIs10();
      question++;
    }
}

function answerIs1() {
  answer1 =[
    {answer: false, question: "En pung"},
    {answer: true, question: "En sten fra en bunker"},
    {answer: false, question: "En bog"},
    {answer: false, question: "En lommeregner"},
    {actualQuestion: "Hvilken ting finder du i genstands kasse 1? (mærke)"}
  ];
}

function answerIs2() {
    answer1 =[
      {answer: false, question: "Grus"},
      {answer: false, question: "Sten"},
      {answer: false, question: "Sand"},
      {answer: true, question: "Rav"},
      {actualQuestion: "Hvilken ting finder du i genstands kasse 2? (mærke)"}
    ];
}

function answerIs3() {
    answer1 =[
      {answer: false, question: "De farede vild"},
      {answer: false, question: "De gjorde sig nye opdagelser"},
      {answer: true, question: "De døde"},
      {answer: false, question: "De blev berømte da de kom hjem"},
      {actualQuestion: "Hvad skete der for de sømænd der sejlede ind i Horns Rev? (mærke) (Hint: Mærk godt efter i genstands kasse 4)"}
    ];
}

function answerIs4() {
    answer1 =[
      {answer: false, question: "De blev udstødt af familien"},
      {answer: true, question: "De fik klippet håret af"},
      {answer: false, question: "De blev tvunget til at blive vegetar"},
      {answer: false, question: "De fik en bøde"},
      {actualQuestion: "Hvordan blev kvinderne straffet hvis de var sammen med en tysker under anden verdenskrig? (mærke) (Hint: Mærk godt efter i genstandskasse 3)"}
    ];
}

function answerIs5() {
    answer1 =[
      {answer: false, question: "Strandbykirkevej 61, Esbjerg"},
      {answer: false, question: "Østre Gjesingvej 89, Esbjerg"},
      {answer: true, question: "Tirpitzvej 1, 6857 Blåvand"},
      {answer: false, question: "Kringsvej 1, 6857 Blåvand"},
      {actualQuestion: "Hvor ligger Tirpitz museum? (høre)"}
    ];
}

function answerIs6() {
  answer1 =[
    {answer: true, question: "4"},
    {answer: false, question: "2"},
    {answer: false, question: "6"},
    {answer: false, question: "5"},
    {actualQuestion: "Hvor mange udstillinger er der på Tirpitz museum? (høre)"}
  ];
}

function answerIs7() {
  answer1 =[
    {answer: false, question: "Tirpitz bunkerne, En hær af metal, Rav – Havets skat og Den hemmelige kyst"},
    {answer: true, question: "Den skjulte kyst, Tirpitz bunkeren, En hær af beton og Rav – Havets guld"},
    {answer: false, question: "Det hemmelige hav, Beton bunkeren, En hær af rav og Rav – Havets skatterige"},
    {answer: false, question: "En hær af rav, Det værdifulde hav, Den farverige kyst og Beton – Asfaltens guld"},
    {actualQuestion: "Hvad hedder Tirpitz udstillingerne? (høre)"}
  ];
}

function answerIs8() {
  answer1 =[
    {answer: false, question: "180 kr for voksne - 100 kr for børn under 18 år - 300 kr for årskort"},
    {answer: false, question: "200 kr for voksne – 150 kr for børn under 18 år – 250 kr for årskort"},
    {answer: false, question: "400 kr for voksne – 300 kr for børn under 18 år – 500 kr for årskort"},
    {answer: true, question: "125 kr for voksne - Gratis for børn under 18 år - 200 kr for årskort"},
    {actualQuestion: "Hvad er priserne for biletter til Tirpitz museum? (høre)"}
  ];
}

function answerIs9() {
  answer1 =[
    {answer: false, question: "10-16 alle dage"},
    {answer: false, question: "5-15 alle dage"},
    {answer: true, question: "10-17 alle dage"},
    {answer: false, question: "8-18 alle dage"},
    {actualQuestion: "Hvad er åbningstiderne til Tirpitz? (høre)"}
  ];
}

function answerIs10() {
  answer1 =[
    {answer: true, question: "Vardemuseerne"},
    {answer: false, question: "Blåvandmuseerne"},
    {answer: false, question: "Esbjergmuseerne"},
    {answer: false, question: "Jylland museerne"},
    {actualQuestion: "Hvilken organisation hører Tirpitz under? (høre)"}
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
