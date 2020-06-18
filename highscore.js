function printScore(){
    var highscore= JSON.parse(window.localStorage.getItem("highscores"))||[];
    highscore.sort(function(a,b){
return b.score-a.score;
})
highscore.forEach(function(score){
var liTag =document.createElement("li");
liTag.textContent=score.intials + " - " + score.score
var success=document.getElementById("highscore");
success.appendChild(liTag);
})
}
function removehighscore(){
window.localStorage.removeItem("highscore")
window.location.reload()
}

document.getElementById("clear").onclick=removehighscore
printScore()
