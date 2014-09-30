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

  // Object with multiiple choice question,
  // choices (w/ a value as an array) and
  // answer properties
  var allQuestions = [
    {
      question: "Which active tennis player has won the most singles grand slams?",
      choices: [
        "Serena Williams",
        "Martina Navratilova",
        "Venus Williams",
        "Steffi Graf"],
      answer: "Serena Williams"
    },
    {
      question: "Which African American first won three singles grand slams?",
      choices: [
        "Althea Gibson",
        "Venus Williams",
        "Sloane Stephens",
        "Serena Williams"],
      answer: "Althea Gibson"
    },
    {
      question: "Who is only one person to have won a singles Gold Slam, or the all four major grand slam events (Australian, French, Wimbledon and US) AND an Olympic Gold Medal in a row?",
      choices: [
        "Margaret Court",
        "Chris Evert",
        "Serena Williams",
        "Steffi Graf"],
      answer: "Steffi Graf"
    },
    {
      question: "Who is the youngest person to have won her first grand slam?",
      choices: [
        "Monica Seles",
        "Tracy Austin",
        "Martina Hingis",
        "Maria Sharapova"],
      answer: "Martina Hingis"
    },
    {
      question: "Who has the record for winning the most WTA matches in a row?",
      choices: [
        "Steffi Graf",
        "Martina Navratilova",
        "Chris Evert",
        "Margaret Court"],
      answer: "Serena Williams"
    }
  ];
  console.log(allQuestions[4].choices[2]);


  


  // Check answers, keep score and move to the next question when clicking "Submit" button
  $("#submit-answer").on("click", function(event) {
    event.preventDefault();
    // Coming soon!

  });

  // Reset back to Question 1 when clicking "Reset" button
  $("#reset").on("click", function(event) {
    event.preventDefault();
    // Coming soon!

  });

// End Document Ready
});