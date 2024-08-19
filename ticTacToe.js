/*
* input: each div value - boolean X or O
*operations: alternate two players 
*            validate winner in 3 hor. or 3 ver. or 2 diagonals
*           announce winner
*            reset button
* output: store input value
*         announce winner
*/

//setting the name of the current player
let player = "X";
let gameOver = false;

function togglePlayer() {
    if (player == "X") {
        document.getElementById("player").innerHTML = "Player O turn";
        player = "O";
    } else {
        document.getElementById("player").innerHTML = "Player X turn";
        player = "X";
    }
}

//cell value alternation
function play(box) {
    if (gameOver) {
        return; // Prevent further moves if the game is over
    }
    if (document.getElementById(box).innerHTML === "") {
        styling(box);
        document.getElementById(box).innerHTML = player;
        setTimeout(() => {
            winner();
            togglePlayer();}
        , 100);
    } else {
        alert("This box is already taken!");
    }
}

//validate winner
function winner() {
    const box1Value = document.getElementById("box1").innerHTML;
    const box2Value = document.getElementById("box2").innerHTML;
    const box3Value = document.getElementById("box3").innerHTML;
    const box4Value = document.getElementById("box4").innerHTML;
    const box5Value = document.getElementById("box5").innerHTML;
    const box6Value = document.getElementById("box6").innerHTML;
    const box7Value = document.getElementById("box7").innerHTML;
    const box8Value = document.getElementById("box8").innerHTML;
    const box9Value = document.getElementById("box9").innerHTML;
    //horizontal
    if ((box1Value !== "") && (box1Value === box2Value) && (box2Value === box3Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    }
    if ((box4Value !== "") && (box4Value === box5Value) && (box5Value === box6Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    } if ((box7Value !== "") && (box7Value === box8Value) && (box8Value === box9Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    }
    //vertical
    if ((box1Value !== "") && (box1Value === box4Value) && (box4Value === box7Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    }
    if ((box2Value !== "") && (box2Value === box5Value) && (box5Value === box8Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    } if ((box3Value !== "") && (box3Value === box6Value) && (box6Value === box9Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    }
    //diagonal
    if ((box1Value !== "") && (box1Value === box5Value) && (box5Value === box9Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    }
    if ((box3Value !== "") && (box3Value === box5Value) && (box5Value === box7Value)) {
        alert("Player " + player + " Wins!");
        gameOver = true;
    }
}

// value styling
function styling(box){
    if(player === "X"){
        document.getElementById(box).style = "color: red;";
    } 
    if(player === "O") {
        document.getElementById(box).style = "color: dodgerblue;";
    }
}

//reset
function reset(){
    document.getElementById("box1").innerHTML="";
    document.getElementById("box2").innerHTML="";
    document.getElementById("box3").innerHTML="";
    document.getElementById("box4").innerHTML="";
    document.getElementById("box5").innerHTML="";
    document.getElementById("box6").innerHTML="";
    document.getElementById("box7").innerHTML="";
    document.getElementById("box8").innerHTML="";
    document.getElementById("box9").innerHTML="";
    gameOver = false;
    player = "X";
}