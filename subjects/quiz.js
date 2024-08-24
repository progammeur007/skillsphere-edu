function startQuiz(quizType) {
    alert('Starting quiz for ' + quizType);
    if(quizType =='csir-net1') {
     window.location.href = "csir-net_quiz.html";
}
else if(quizType=='csir-net2'){window.location.href = "csir-net_quiz2.html";}
// Reuse existing navigation script if necessary
}
// Function for switching tabs on mobile view (if applicable)
function switchTAB() {
    var x = document.getElementById("list-switch");
    var i = 2;
    if(i%2 == 0) {
        document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
        document.getElementById("search-switch").style= "display: block; margin-left: 5%;"; i++;
    }else {
        document.getElementById("list-switch").style= "display: none;";
        document.getElementById("search-switch").style= "display: none;"; i++;
    }
}
