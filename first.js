let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-scr");
let compScorePara=document.querySelector("#comp-scr");

const genCompChoice=() =>{
    const options=["Rock","Paper","Scissor"];
    const Choiceidx= Math.floor(Math.random()*3);  //Math.random will generate random number from 0 to 2
    return options[Choiceidx];                  //Math.floor will remove the numbers after point i.e 1.3323 will become 1
}

const playgame =(userchoice)=>{
console.log("User's choice=",userchoice);
//Computer choice
let CompChoice=genCompChoice();
console.log("Computer's choice=",CompChoice);

if(userchoice === CompChoice)
    {
        draw();
    }
    else{
        let UserWin=true;
        if(userchoice==="Rock"){
            //scissor,paper
           UserWin= CompChoice==="Paper"?false:true;
        }else if(userchoice==="Paper"){
            //rock,scissors
           UserWin= CompChoice==="Scissors"?false:true;
        }  else 
        {
             UserWin= CompChoice==="Rock"?false:true;
        }
        showWinner(UserWin,userchoice,CompChoice);
    }
};
const showWinner=(UserWin,userchoice,CompChoice)=>{
    if(UserWin==true)
        {
            userScore++;
            userScorePara.innerText=userScore;
            console.log("You Win");
            msg.innerText=`You Win! Your ${userchoice} beats ${CompChoice}`;
            msg.style.backgroundColor="Green";

        }
        else{
            compScore++;
            compScorePara.innerText=compScore;
            console.log("You lose");
            msg.innerText=`You Lose! ${CompChoice} beats your ${userchoice}`;
            msg.style.backgroundColor="Red";

        }
}
const draw=()=>{
    console.log("Game is draw");
    msg.innerText="Game is draw!. Play Again."
    msg.style.backgroundColor="#081b31";
}

choices.forEach((choice)=>{              //Main Function
   choice.addEventListener("click", ()=>{
    let userchoice = choice.getAttribute("id");   
    playgame(userchoice);
    });
});









