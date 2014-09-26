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





  // Reset back to Question 1 when clicking "Reset" button
  $("#reset").on("click", function(event) {
    event.preventDefault();
    showQuestion1.GetQuizElements();
    showQuestion1.assignQuizData();
  });








  /*

  Q1:  Which active tennis player has won the most grand slams?

  A. Serena Williams

  B. Maria Sharapova

  C. Venus Williams

  D. Steffi Graf

   */




  //cat.prototype.changeName = function(name) {
  //  this.name = name;
  //}
  //
  //firstCat = new cat("pursur")
  //firstCat.changeName("Bill")
  //firstCat.talk() //alerts "Bill says meeow!"









// End Document Ready
});