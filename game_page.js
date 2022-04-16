var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name + ":";
document.getElementById("player2_name").innerHTML=player2_name + ":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn: " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn: " + player2_name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    lengthBy2 = Math.floor(word.length/2);
    char2 = word.charAt(lengthBy2);
    console.log(char2);

    lengthMinus1 = word.length-1;
    char3 = word.charAt(lengthMinus1);
    console.log(char3);

    removeChar1 = word.replace(char1 , "_");
    removeChar2 = removeChar1.replace(char2 , "_");
    removeChar3 = removeChar2.replace(char3 , "_");
    console.log(removeChar3);

    questionWord = "<h4 id='question_word'>Q:" + removeChar3 + '</h4>';
    inputBox = "<br> answer:<input id='input_box' type='text'>";
    button = "<br> <br> <button class='btn btn-primary' onclick='check()'> CHECK </button>";
    row = questionWord + inputBox + button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
questionTurn = "player1";
answerTurn = "player2";
function check(){
    getAnswer = document.getElementById("input_box").value;
    answer = getAnswer.toLowerCase();
    console.log("answer in lowercase - " + answer);
    if(answer==word)
    {
        if(answerTurn=="player1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }

    }
    if(questionTurn=="player1")
    {
        questionTurn="player2"
        document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
    }
    else{
        questionTurn="player1"
        document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
    }
    if(answerTurn=="player1")
    {
        answerTurn="player2"
        document.getElementById("player_answer").innerHTML= "Answer Turn - " + player2_name;
    }
    else{
        answerTurn="player1"
        document.getElementById("player_answer").innerHTML= "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}