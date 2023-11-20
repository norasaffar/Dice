const image = document.getElementById('img');
const button = document.getElementById('buttonroll');
const score = document.getElementById('score');
const resetbutton = document.getElementById('buttonagain');
const result = document.getElementById('result');
let totalscore = 0;

button.addEventListener('click', () => {
     let diceroll = Math.floor((Math.random()*6)+1);
     image.src = "./images/" + diceroll + ".gif";

     if ( diceroll == 1 )
         { 
          result.textContent = "Sorry you lose";
          totalscore = 0;
          score.textContent = totalscore;

        }
        else 
        { 
            totalscore += diceroll;
            score.textContent = totalscore;

        }
        if (totalscore >= 20 )
        {
            result.textContent = "You win";
            score.textContent = totalscore;

        }

  
} )

resetbutton.addEventListener('click' , () => {
    result.textContent = ""; 
    totalscore = 0;
    score.textContent = totalscore;
    // button.style.display = 'block';
    reset.style.display = 'none';

})




















// const firstRandNum =
// Math.floor(Math.random()*6)+1

// const firstDiceImage ='assets/dice'+ firstRandNum
// +'.png';

// function rollTheDice() {
//     let diceNum1 = document.querySelector(".img1");
//     let diceNum2 = document.querySelector(".img2");

// }
// document.querySelectorAll
// ('img')[0].setAttribute('src',firstDiceImage);


