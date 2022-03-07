var score=0;
 
function Updatescore() {
    score = score + 1;
    document.getElementById('score').innerHTML = "Score:" + score;
}

function Savescore() {
    localStorage.setItem("Score", score);

}

function Nextpage() {
    window.location = "activity_2.html";
}