let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options=["rock","peper","scissors"];
    const randIdx= Math.floor(Math.random() *3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor  ="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Winner!🎉😎 Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor  ="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You Lose!😓👎${compChoice} beats  ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};


const playGame=(userChoice)=>{
    
// Generate the Comp choice -> Modular
// Her kam ke liye alge alge Funstion banana.
const compChoice = genCompChoice();

if(userChoice===compChoice){
    // draw game 
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissors,peper
        userWin=compChoice==="peper" ? false :true;
    }
    else if(userChoice==="peper"){
        //rock,scissors
        userWin=compChoice==="scissors"? false:true;
    }
    else {
        //rock,peper
         userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       // console.log("Choice was Clicked !",userChoice);
        playGame(userChoice);
    });
});