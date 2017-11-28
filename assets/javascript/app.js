var questions = [{
        question: "Which two rappers made up the duo Black Star ?",
        answers: [" A: Sway and Tech", " B: Tek and Steele", " C: Talib Kweli and Mos Def", " D: Psycho Les and Juju"],
        rightAnswer: " C: Talib Kweli and Mos Def",
    },

    {
        question: "Chance The Rapper's song 'Lost' features which female rapper ?",
        answers: [" A: Nicki Minaj", " B: Cardi B", " C: Young M.A.", " D: Noname"],
        rightAnswer: " D: Noname",
    },

    {
        question: "The Notorious B.I.G. was known aliases, which one of these is not one of them ?",
        answers: [" A: Biggie Smalls", " B: Frank White", " C: Big poppa", " D: Heavy D"],
        rightAnswer: " D: Heavy D",
    },

    {
        question: "Who did J.cole think he let down ?",
        answers: [" A: Kanye West", " B: Nas", " C: Jay-z", " D: Eminem"],
        rightAnswer: " B: Nas",
    },

    {
        question: "'The nikes on my feet keep my '_______' complete'",
        answers: [" A: cipher", " B: mind", " C: swagger", " D: essense"],
        rightAnswer: " A: cipher",
    },

    {
        question: '"Nocturnal" is the first album from which group ?',
        answers: [" A: O.G.C.", " B: Smif-n-Wessun", " C: Heltah Skeltah", " D: Black Moon"],
        rightAnswer: " C: Heltah Skeltah",
    },

    {
        question: "Who produced Jay-z's song '99 problems' ?",
        answers: [" A: Rick Ruben", " B: The Alchemist", " C: Kanye West", " D: No I.D."],
        rightAnswer: " A: Rick Ruben",
    },

    {
        question: "The song 'Dead presidents' was on which of Jay-z's album ?",
        answers: [" A: The Black Album", " B: The Blueprint 3", " C: American Gangster", " D: Reasonable Doubt"],
        rightAnswer: " D: Reasonable Doubt",
    },

    {
        question: "Which producer along side with GURU made up Gang Starr ?",
        answers: [" A: Pete Rock", " B: J Dilla", " C: Dj Premier", " D: 9th Wonder"],
        rightAnswer: " C: Dj Premier",
    },
];

var nexTimer = 3;
var tracker = 0;
var timer = 21;
var correct = "";
var answer = "";
var right = 0;
var wrong = 0;
var next;
var intervalid;
var rightPicker;
var rightText = ["True hip hop head", "No fooling you", "You got this", "Too easy"]
var wrongPicker;
var wrongText = ["Lame", "You's a Goofy", "Nope sorry", "Where's your head at", "Not even close"]


$(document).ready(function () {

    load();

    start()

    function load() {
        $("#gameDiv").hide();
        $("#start").html("<button type='button' id='start-b' class='btn btn-default start-btn'>" + '<b>Start<b>' + "</button>");
    };

    function start() {
        $("#start-b").on("click", function () {
            $("#gameDiv").show();
            $("#start").empty();
            run();
            displayQuestion(tracker, 0);
            answerQuestion();
        });
    };

    function displayQuestion(index, ans) {
        $("#question").text(questions[index].question);
        for (var ans = 0; ans < questions[index].answers.length; ans++) {
            var quesDiv = $("<div>");
            quesDiv.addClass("answer");
            quesDiv.text(questions[index].answers[ans]);
            $("#answers").append(quesDiv);
        };
        correct = questions[index].rightAnswer;
    };

    function answerQuestion() {
        $(".answer").on("click", function () {
            answer = $(this).text();
            if (answer === correct) {
                right++
                inBetweenRight();
            } else {
                wrong++
                inBetweenWrong();
            };
            $("#timer").css("color", "black")
            $("#timer").hide();
            tracker++;
            stop();
            timer = 21;
        });
    };

    function inBetweenRight() {
        rightTextGenerator();
        $("#question").html(rightText[rightPicker]);
        $("#answers").empty();
        next = setInterval(stopTimer, 1000);
    };

    function inBetweenWrong() {
        wrongTextGenerator();
        $("#question").html(wrongText[wrongPicker]);
        $("#answers").html(questions[tracker].rightAnswer);
        next = setInterval(stopTimer, 1000);
    };

    function inBetweenOutOfTime() {
        $("#question").text("Out of Time");
        $("#answers").html(questions[tracker].rightAnswer);
        next = setInterval(stopTimer, 1000);
    };

    function rightTextGenerator() {
        rightPicker = Math.floor(Math.random() * 3);
    };

    function wrongTextGenerator() {
        wrongPicker = Math.floor(Math.random() * 4);
    };

    function stopTimer() {

        nexTimer--;

        if (nexTimer === 0 && tracker < 9) {
            $("#answers").empty();
            stopNext();
            displayQuestion(tracker, 0);
            answerQuestion();
            run();
            $("#timer").show();
            nexTimer = 3;
        } else if (tracker === 9) {
            nexTimer = 3;
            tracker = 0;
            $("#timer").show();
            $("#start").html("<button type='button' id='reset-b' class='btn btn-default start-btn'>" + '<b>Do it again<b>' + "</button>");
            result();
            stopNext();
            $("#reset-b").on("click", function () {
                $("#answers").empty();
                timer = 21;
                correct = "";
                answer = "";
                right = 0;
                wrong = 0;
                intervalid;
                next;
                reset()
            });
        }
    }

    function run() {
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        timer--;
        $("#timer").text('Time Remaining: ' + timer);
        if (timer < 6) {
            $("#timer").css("color", "red")
        }
        if (timer === 0) {
            $("#timer").css("color", "black")
            tracker++;
            wrong++;
            timer = 21;
            inBetweenOutOfTime();
            stop();
        };
    };

    function reset() {
        displayQuestion(tracker, 0);
        answerQuestion();
        run();
        $("#start").empty();
    };

    function result() {
        $("#question").text("Right: " + right);
        $("#answers").text("Wrong: " + wrong);
        if (right >= 6) {

            $("#timer").text("5 mic status");
        } else {
            $("#timer").text("Do your homework");
        }
    };

    function stopNext() {
        clearInterval(next);
    };

    function stop() {
        clearInterval(intervalId);
    };

});