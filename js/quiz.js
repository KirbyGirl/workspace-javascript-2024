//generate random integers
function randInt(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);

}

//getting the numbers
var M = randInt(400,600);
var N = randInt(200,400);
var K = randInt(0,200);

//update the questions
document.querySelector('#total').textContent = M.toString();
document.querySelector('#giveout').textContent = N.toString();
document.querySelector('#takeback').textContent = K.toString();

var T= N+K;
var S= N-K;
//update the answers
//M-N+K, M-N-K, M-T, M-S
document.querySelector('[value="1"]').nextSibling.nodeValue= M.toString() + 
"-" + N.toString()+ "+" +K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue=M.toString()+"-"+
N.toString()+"-"+K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue= M.toString() + 
"-" +T.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue=M.toString()+"-" +S.toString();



// pick the answer
function changeStyle(e){
    e.preventDefault(); //prevent the checkbox clicked --- otherwise two clicks
    var classname = this.getAttribute("class");
    var sel = this.getElementsByClassName('answer selected');
    //alert("clicked class" + classname);
    if(classname=="answer"){
        this.setAttribute("class", "answer selected");
        sel.setAttribute("class", "answer");
        
    }else{
        this.setAttribute("class", "answer");
    }
    //testing animation
    this.animate([{transform:'rotate(0deg)'}, {transform: 'rotate(360deg)'}, {transorm:'rotate(0deg)'}],{duration:2000,fill:'forwards'});
}

//add event listener
var answerlist = document.getElementsByClassName('answer');
for(var i = 0; i<4; i++){
    answerlist[i].addEventListener('click', changeStyle, false);
}
