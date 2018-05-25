
$(document).ready(function(){
    var QandAArr = [

        {question: "What is the world's most expensive spice by weight?",
        correct_answer: "Saffron",
        incorrect_answers: [
        "Cinnamon",
        "Cardamom",
        "Vanilla"],
        image: "<img src='assets/images/saffron-spanish-powder-1.jpg'>"},

        {question: "What does a milliner make and sell?",
        correct_answer: "Hats",
        incorrect_answers: [
        "Shoes",
        "Belts",
        "Shirts"
        ],
        image: "<img src='assets/images/hats.jpg'>"},

        {question: "In a standard set of playing cards, which is the only king without a moustache?",
        correct_answer: "Hearts",
        incorrect_answers: [
        "Spades",
        "Diamonds",
        "Clubs"
        ],
        image: "<img src='assets/images/kings.jpg'>"},

        {question: "A doctor with a PhD is a doctor of what?",
        correct_answer: "Philosophy",
        incorrect_answers: [
        "Psychology",
        "Phrenology",
        "Physical Therapy"
        ],
        image: "<img src='assets/images/philosophy.jpg'>"},

        {question: "Scotch whisky and Drambuie make up which cocktail?",
        correct_answer: "Rusty Nail",
        incorrect_answers: [
        "Screwdriver",
        "Sex on the Beach",
        "Manhattan"
        ],
        image: "<img src='assets/images/rustynail.jpg'>"},

        {question: "Which language is NOT Indo-European?",
        correct_answer: "Hungarian",
        incorrect_answers: [
        "Russian",
        "Greek",
        "Latvian"
        ],
        image: "<img src='assets/images/hungarian.png'>"},

        {question: "Which essential condiment is also known as Japanese horseradish?",
        correct_answer: "Wasabi ",
        incorrect_answers: [
        "Mentsuyu",
        "Karashi",
        "Ponzu"
        ],
        image: "<img src='assets/images/wasabi.jpg'>"},

        {question: "In 2013 how much money was lost by Nigerian scams?",
        correct_answer: "$12.7 Billion",
        incorrect_answers: [
        "$95 Million",
        "$956 Million",
        "$2.7 Billion"
        ],
        image: "<img src='assets/images/money.jpg'>"},

        {question: "A factiod is what?",
        correct_answer: "A falsehood",
        incorrect_answers: [
        "Useless trivia",
        "A tiny fact",
        "A scientific figure"
        ],
        image: "<img src='assets/images/falsehood.jpg'>"},

        {question: 'What is the name of the popular animatronic singing fish prop, singing such hits such as "Dont Worry, Be Happy"?',
        correct_answer: "Big Mouth Billy Bass",
        incorrect_answers: [
        "Big Billy Bass",
        "Singing Fish",
        "Sardeen"
        ],
        image: "<img src='assets/images/billybass.jpg'>"}
    ];


    var timer = 10;
    var intervalId;
    var qnum = 0;
    var correctanswers = 0;
    var incorrectanswers = 0;

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    };

    function decrement(){
        timer--;
        $("#timer").text(timer);
        if (timer === 0){   
            incorrectanswer();
        }
    };


    function emptyall(){
        $("#question").empty()
        $("#timer").empty()
        $("button").hide()
        $(".showanswer").empty()
    }
  

    function newquestion(){
        emptyall()
        if(qnum < 10){
        $("button").show()
        $(".restart").hide()
        $(".start").hide()
        console.log(qnum)
        intervalId = setInterval(decrement, 1000)
        

        $("#question").text(QandAArr[qnum].question)

        var ar = ["a","b","c","d"]
        var newar = shuffle(ar)

        $("#" + newar[0]).text(QandAArr[qnum].correct_answer).attr("class", "correct")
        $("#" + newar[1]).text(QandAArr[qnum].incorrect_answers[0]).attr("class", "incorrect")
        $("#" + newar[2]).text(QandAArr[qnum].incorrect_answers[1]).attr("class", "incorrect")
        $("#" + newar[3]).text(QandAArr[qnum].incorrect_answers[2]).attr("class", "incorrect")
    
        }

        else{
            endgame();
            
        }
    };

    function endgame(){
        clearInterval(intervalId)
        emptyall()
        $(".showanswer").html("Correct Answers: " + correctanswers + "<br>")
        $(".showanswer").append("Incorrect Answers: " + incorrectanswers)
        $(".restart").show()
        

    }

    function incorrectanswer(){
        clearInterval(intervalId)
        timer = 10;
        emptyall();
        $(".showanswer").html("Wrong Answer. Here's a hint:")
        $(".showanswer").append(QandAArr[qnum].image)
        incorrectanswers++;
        qnum++;
        setTimeout(newquestion, 3000)
     };

     function correctanswer (){
        clearInterval(intervalId)
        timer = 10;
        emptyall()
        $(".showanswer").html("Correct Answer")
        $(".showanswer").append(QandAArr[qnum].image)
        correctanswers++;
        qnum++
        setTimeout(newquestion, 3000)
     }

    function startGame(){
        qnum = 0;
        timer = 10;
        correctanswers = 0;
        incorrectanswers = 0;
        $(".restart").hide()
        newquestion();
    }; 

    

    $(document).on("click",".correct", correctanswer)
    $(document).on("click",".incorrect", incorrectanswer)
    $(document).on("click",".restart", startGame)
    
    $(document).on("click",".start", startGame)
    
    $(".restart").hide()
    $(".answers").hide()
    

    
     
   
});    