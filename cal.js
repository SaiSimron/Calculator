// let button0=document.getElementsByTagName('button')[0];
// button0.addEventListener('click',function(){
//     screen.innerText=button0;
//     console.log("7 was clicked")
// })
let buttons=document.querySelectorAll('button');
let screen=document.getElementById('screen');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log("Button text is : ",buttonText);
        if(buttonText=='X'){
            buttonText="*";
            screenValue += buttonText; 
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value=screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value=screenValue;
        }
    })
}