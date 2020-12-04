var readlineSync=require("readline-sync");

//Using chalk here to style my game
const chalk = require('chalk');
const log=console.log;

var userName=readlineSync.question("May i have your name please? \n");

log("Welcome "+ chalk.green(userName) +", You seems very intelligent could you please answer some of my questions?");
log("---------------------------------------------------------");
// --------------------------------------------------
var score=0;

function play(question,answer){
    var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    score++;
    log(chalk.green("Yes..!!! you are right."));
    log(chalk.bold.yellow("---------------------------------------------------------"));
  }else{
    log(chalk.red("Oops..!!! you are wrong."));
     log(chalk.bold.yellow("---------------------------------------------------------"));
  }
}

var arrayOfQuestion=[{
 question:"Q1. What is the first colour in a rainbow?\na.Green\nb.Red\nc.Blue\nd.Orange\n",
 answer:"b"
},{
 question:"Q2. What is the combination of colours in the Indian National Flag?\na.Red, White and Blue\nb.Green, White and Black\nc.Orange, White and Green\nd.White, Orange and Green\n",
 answer:"c"
},{
 question:"Q3. What is the colour of a leaf in a plant?\na.Black\nb.White\nc.Blue\nd.Green\n",
 answer:"d"
},{
 question:"Q4. Earth is also known as the __________ planet.\na.Yellow\nb.Purple\nc.Blue\nd.Red\n",
 answer:"c"
},{
 question:"Q5. What is the colour of a sunflower?\na.White\nb.Yellow\nc.Pink\nd.Blue\n",
 answer:"b"
},{
 question:"Q6. Identify the colour of an apple.\na.Red\nb.Blue\nc.Black\nd.Purple\n",
 answer:"a"
},{
 question:"Q7. What is the colour of blood in a human body?\na.Pink\nb.Orange\nc.Red\nd.Green\n",
 answer:"c"
},{
 question:"Q8. Do you know the colour of a brinjal?\na.Purple\nb.Pink\nc.White\nd.Orange\n",
 answer:"a"
},{
 question:"Q9. __________ is the colour of the night sky filled with moon and stars.\na.Yellow\nb.Green\nc.White\nd.Midnight blue\n",
 answer:"d"
},{
 question:"Q10. Which colour symbolizes peace, purity and innocence?\na.Purple\nb.Black\nc.White\nd.Red\n",
 answer:"c"
}];

for(var i=0;i<arrayOfQuestion.length;i++){
  play(arrayOfQuestion[i].question,arrayOfQuestion[i].answer);
}
log(chalk.yellowBright("Your final score is: "+score));