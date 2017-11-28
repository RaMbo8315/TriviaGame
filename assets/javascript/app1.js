var questions = [
       {
        question: "Which two rappers made up the duo Black Star ?",
        answerOne: "Sway and Tech",
        answerTwo: "Tek and Steele",
        answerThree: "Talib Kweli and Mos Def",
        answerFour: "Psycho Les and Juju",
        rightAnswer: "Talib Kweli and Mos Def",
    },

     {
        question: "'Nocturnal' is the first album for which group ?",
        answerOne: "O.G.C.",
        answerTwo: "Smif-n-Wessun",
        answerThree: "Heltah Skeltah",
        answerFour: "Black Moon",
        rightAnswer: "Heltah Skeltah",
    },

    {
        question: "The song 'Dead presidents' was on which of Jay-z's album ?",
        answerOne: "Vol. 2... Hard Knock Life",
        answerTwo: "Vol. 3... Life and Times of S. Carter",
        answerThree: "The Dynasty: Roc La Familia",
        answerFour: "In My Lifetime, Vol. 1",
        rightAnswer: "In My Lifetime, Vol. 1",
    },
    
]

var question = ["Which two rappers made up the duo Black Star ?", 
"'Nocturnal' is the first album for which group ?",
 "The song 'Dead presidents' was on which of Jay-z's album ?"]

function displayQuestion (index, ) {
    $("#question").text(questions[index].question);
    $("#answer").text(questions[index].question);
}