let cards= ["AC","AD","AH","AS","2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C","5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D","8H","8S","9C","9D","9H","9S","10C","10D","10H","10S","JC","JD","JH","JS","QC","QD","QH","QS","KC","KD","KH","KS"];
let cardOrder= ["A","2","3","4","5","6","7","8","9","1","J","Q","K"];
let livesCount= 5;
let scoreCount= 0;
let prevCard="";
let nextCard="";
let userResponse;


const btnStartgame= document.querySelector("#btn-startgame");
const btnPlayagain= document.querySelector("#btn-playagain");
const btnHigher= document.querySelector("#btn-higher");
const btnLower= document.querySelector("#btn-lower");
const lives= document.querySelector("#lives");
const img= document.querySelector("#card");
const score= document.querySelector("#score span");
const status= document.querySelector("#status");

btnStartgame.addEventListener("click", function(){
    btnStartgame.classList.add("hide");
    btnHigher.disabled=false;
    btnLower.disabled=false;
    shuffleCard();
});

btnPlayagain.addEventListener("click", function(){
    location.reload();
});

btnHigher.addEventListener("click", function(){
    shuffleCard();
    userResponse=cardOrder.indexOf(nextCard[0])>cardOrder.indexOf(prevCard[0]);
    getUserResponse();
});

btnLower.addEventListener("click", function(){
    shuffleCard();
    userResponse=cardOrder.indexOf(prevCard[0])>cardOrder.indexOf(nextCard[0]);
    getUserResponse();
  
});

function getUserResponse(){
        if(cardOrder.indexOf(nextCard[0])==cardOrder.indexOf(prevCard[0])){
        status.textContent="TIE!"
    }
    else
    if(userResponse){
        scoreCount++;
        status.textContent="+1";
    }
    else{
        livesCount--;
        status.textContent=":(";
    }
    displayLives();
    displayScore();
    gameOver();
}


function shuffleCard(){
    prevCard= nextCard;
    random= Math.floor(Math.random() * cards.length);
    randomCard= cards[random];
    img.src= `img/${randomCard}.png`;
    nextCard=cards[random];
    cards.splice(random,1);
}

function displayLives(){
    let counter;
    let displayLives="";
    for(counter = 0; counter<livesCount; counter++){
        displayLives+= '<i class="fas fa-heart"></i>';
    }
    lives.innerHTML=displayLives;
}

function displayScore(){
    score.textContent=scoreCount;
}

function gameOver(){
    if(livesCount==0||cards.length==0){
        btnHigher.disabled=true;
        btnLower.disabled=true;
        btnPlayagain.classList.remove("hide");
    }
}

displayLives();
displayScore();
