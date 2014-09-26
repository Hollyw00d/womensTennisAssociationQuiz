// jQuery Document Ready
$(function(){

  // Set year in footer
  function getyear() {
    // Get current year
    var getdate = new Date();
    var getyear = getdate.getFullYear();

    // In footer set year to current year
    var currentyear = $("#copyright").find("span").text(getyear);
  }
  getyear();


  function QuestionCountCorrect() {
    // Question and answers correct count
    this.questionCount = 1;
    this.questionCorrect = 0;
    // Questions correct and count elements
    this.questionCountElem = $("#question-count");
    this.questionCorrectElem = $("#questions-correct");
    // Correct and incorrect error messages
    this.correct = $("#correct");
    this.incorrect = $("#incorrect");
  }

  var getQuestionCountCorrect = new QuestionCountCorrect();

  // Assign public variables to the question and answer text to be instantiated later
  function AddQuizQuestionsAnswersText(questionText, answer1, answer2, answer3, answer4) {

    this.questionText = questionText;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

  }

  // Use prototype to pull the questions and answers text from the
  // "AddQuizQuestionsAnswersText" class and assign
  // insert them into the DOM via the "GetQuizElements" prototype
  AddQuizQuestionsAnswersText.prototype.GetQuizElements = function() {
    this.questionElem = $("#quiz-question");
    this.answer1Elem = $("ol").find("li").first().find("span");
    this.answer2Elem = $("ol").find("li").first().next().find("span");
    this.answer3Elem = $("ol").find("li").last().prev().find("span");
    this.answer4Elem = $("ol").find("li").last().find("span");

    // Method to insert question and answer text into DOM elements
    return this.assignQuizData = function() {
      this.questionElem.html(this.questionText);
      this.answer1Elem.html(this.answer1);
      this.answer2Elem.html(this.answer2);
      this.answer3Elem.html(this.answer3);
      this.answer4Elem.html(this.answer4);
    }
  }

  var showQuestion1 = new AddQuizQuestionsAnswersText(
        // Question
        "Which active tennis player has won the most singles grand slams?",
          // 4 multiple choice answers
          "Serena Williams",
          "Martina Navratilova",
          "Venus Williams",
          "Steffi Graf"
  );

  var showQuestion2 = new AddQuizQuestionsAnswersText(
        // Question
        "Which African American first won three singles grand slams?",
          // 4 multiple choice answers
          "Althea Gibson",
          "Venus Williams",
          "Sloane Stephens",
          "Serena Williams"
  );

  var showQuestion3 = new AddQuizQuestionsAnswersText(
        // Question
        "Who is only one person to have won a singles Gold Slam, or the all four major grand slam events (Australian, French, Wimbledon and US) AND an Olympic Gold Medal in a row?",
          // 4 multiple choice answers
          "Margaret Court",
          "Chris Evert",
          "Serena Williams",
          "Steffi Graf"
  );

  var showQuestion4 = new AddQuizQuestionsAnswersText(
        // Question
        "Who is the youngest person to have won her first grand slam?",
          // 4 multiple choice answers
          "Monica Seles",
          "Tracy Austin",
          "Martina Hingis",
          "Maria Sharapova"
  );

  var showQuestion5 = new AddQuizQuestionsAnswersText(
        // Question
        "Who has the record for winning the most WTA matches in a row?",
        // 4 multiple choice answers
        "Steffi Graf",
        "Martina Navratilova",
        "Chris Evert",
        "Margaret Court"
  );


  // Show Question 1 on DOM ready
  showQuestion1.GetQuizElements();
  showQuestion1.assignQuizData();


  // Check answers, keep score and move to the next question when clicking "Submit" button
  $("#submit-answer").on("click", function(event) {
    event.preventDefault();
    var correct = getQuestionCountCorrect.correct;
    var incorrect = getQuestionCountCorrect.incorrect;
    var questionCorrect = getQuestionCountCorrect.questionCorrect;
    var questionCorrectElem = getQuestionCountCorrect.questionCorrectElem;

    if(showQuestion1 instanceof AddQuizQuestionsAnswersText) {
      // If Correct Answer Choosen is Question 1, Answer A, Serena Williams
      if($("input[name='selected-answer']:eq(0)").is(":checked")) {
        correct.removeClass("hide");
        incorrect.addClass("hide");
        questionCorrect++;
        questionCorrectElem.html(questionCorrect);
      } else {
        incorrect.removeClass("hide");
        correct.addClass("hide");
      }
    }
  });

  // Reset back to Question 1 when clicking "Reset" button
  $("#reset").on("click", function(event) {
    getQuestionCountCorrect = new QuestionCountCorrect();
    event.preventDefault();
    showQuestion1.GetQuizElements();
    showQuestion1.assignQuizData();
    getQuestionCountCorrect.correct.addClass("hide");
    getQuestionCountCorrect.incorrect.addClass("hide");
    $("input:radio").attr("checked", false);
    getQuestionCountCorrect.questionCountElem = 1;
    getQuestionCountCorrect.questionCountElem.html("1");
    getQuestionCountCorrect.questionCorrectElem = 0;
    getQuestionCountCorrect.questionCorrectElem.html("0");

  });

// End Document Ready
});