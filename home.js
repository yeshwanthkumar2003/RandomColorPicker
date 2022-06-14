//change the color of all buttons
var allbutton= document.getElementsByTagName('button'); //represents the number of object in the html page


var copyallbutton=[];
for(let i=0;i<allbutton.length;i++){ //loop 4 times copy of all buttons
    copyallbutton.push(allbutton[i].classList[1]);
}
console.log(copyallbutton);

function buttonchangecolor(buttonthingy){// this is for selecting the button in specific color
    if (buttonthingy.value === 'red') {
        buttonsRed();
        //  block of code to be executed if condition1 is true for button red
      } else if (buttonthingy.value === 'Green') {
        buttonsGreen();
        //  block of code to be executed if the condition1 is false and condition2 is true

      } else if (buttonthingy.value === 'Reset')  {
        buttoncolorreset();
        //block of code

      } else if (buttonthingy.value === 'random')  {
        randomcolors();
        //block of code
         
      } else if (buttonthingy.value === 'Grey')  {
        buttonsGrey();
        //block of code
         
      } else if (buttonthingy.value === 'Indigo')  {
        buttonsIndigo();
        //block of code
         
      } else if (buttonthingy.value === 'black')  {
        buttonsblack();
        //block of code
         
      } 

 }

    


 

//function for red button
function buttonsRed() {
    for (let i=0;i<allbutton.length;i++){ //loop for specific red color
        allbutton[i].classList.remove(allbutton[i].classList[1]); //'1' represents the index of the button '0' button have class '2'
        allbutton[i].classList.add('btn-danger');
}
}

//function gor green button
function buttonsGreen() {
  for (let i=0;i<allbutton.length;i++){ //loop for specific red color
      allbutton[i].classList.remove(allbutton[i].classList[1]); //'1' represents the index of the button '0' button have class '2'
      allbutton[i].classList.add('btn-success');
}
}
function buttonsGrey() {
  for (let i=0;i<allbutton.length;i++){ //loop for specific green color
      allbutton[i].classList.remove(allbutton[i].classList[1]); //'1' represents the index of the button '0' button have class '2'
      allbutton[i].classList.add('btn-secondary');
}
}

function buttonsIndigo() {
  for (let i=0;i<allbutton.length;i++){ //loop for specific green color
      allbutton[i].classList.remove(allbutton[i].classList[1]); //'1' represents the index of the button '0' button have class '2'
      allbutton[i].classList.add('btn-info');
}
}


function buttonsblack() {
  for (let i=0;i<allbutton.length;i++){ //loop for specific green color
      allbutton[i].classList.remove(allbutton[i].classList[1]); //'1' represents the index of the button '0' button have class '2'
      allbutton[i].classList.add('btn-dark');
}
}


function buttoncolorreset() {
  for (let i=0;i<allbutton.length;i++){ //loop for specific reset button
      allbutton[i].classList.remove(allbutton[i].classList[1]); //'1' represents the index of the button '0' button have class '2'
      allbutton[i].classList.add(copyallbutton[i]);
}
}
function randomcolors(){
  let choices=['btn-primary','btn-danger','btn-success','btn-warning']
  for (let i=0;i<allbutton.length;i++) {

//loop for specific reset button
var randomnumber = Math.floor(Math.random()*4);
allbutton[1].classList.remove(allbutton[i].classList[1]);
allbutton[i].classList.add(choices[randomnumber]);
}
}
