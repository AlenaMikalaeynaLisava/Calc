
const calcBtnsEl = document.getElementById("calc-buttons");
let activeNum = document.getElementById("num1");

let memory;
calcBtnsEl.addEventListener('click',(event)=>{
  if(event.target.nodeName ==="BUTTON" && !event.target.dataset.sign &&!event.target.dataset.memory &&!event.target.dataset.register){
    const attrVal = event.target.getAttribute("data-num");
    activeNum.innerText += attrVal;
  }
  if(event.target.nodeName ==="BUTTON" && event.target.dataset.sign === '+/-'){
    activeNum.innerText = -activeNum.innerText;
  }
 if(event.target.nodeName ==="BUTTON" && (event.target.dataset.sign ==="+"||event.target.dataset.sign ==="-")||event.target.dataset.sign ==="*"||event.target.dataset.sign ==="/"){
   activeNum=document.getElementById("num2");
   document.getElementById("sign").innerText=event.target.dataset.sign;
 }

  if(event.target.nodeName ==="BUTTON" && event.target.dataset.sign === "="){
    let num1Val = +document.getElementById("num1").innerText;
    let num2Val = +document.getElementById("num2").innerText;
    let result;
    if(document.getElementById("sign").innerText ==="+"){
    result = num1Val + num2Val;
    } else if (document.getElementById("sign").innerText ==="-"){
      result = (num1Val - num2Val).toFixed(5); 
    } else if (document.getElementById("sign").innerText === "*"){
      result = num1Val * num2Val;
     } else if (document.getElementById("sign").innerText === "/"){
     result = (num1Val / num2Val).toFixed(5);
    } else {result = num1Val;}
    document.querySelector(" #result span").innerText = result;
  } 
  if(event.target.nodeName ==="BUTTON" && event.target.dataset.memory === 'ce'){
    document.getElementById("num1").innerText="";
    document.getElementById("num2").innerText="";
    document.getElementById("sign").innerText="";
    document.querySelector(" #result span").innerText="";
    activeNum = document.getElementById("num1");
  }
  if(event.target.nodeName ==="BUTTON" && event.target.dataset.memory === "mr"){
    let num1Val = +document.getElementById("num1").innerText;
    let num2Val = +document.getElementById("num2").innerText;
    memory=0;
    if(document.getElementById("sign").innerText ==="+"){
    memory = num1Val + num2Val;
  } else if (document.getElementById("sign").innerText ==="-"){
    memory = (num1Val - num2Val).toFixed(5); 
  } else if (document.getElementById("sign").innerText === "*"){
    memory = num1Val * num2Val;
   } else if (document.getElementById("sign").innerText === "/"){
    memory = (num1Val / num2Val).toFixed(5);;
   } else {memory = num1Val;}
      document.getElementById("num1").innerText="";
      document.getElementById("num2").innerText="";
      document.getElementById("sign").innerText="";
      document.querySelector(" #result span").innerText="";
      activeNum = document.getElementById("num1");
    //alert(memory);
  }
  if(event.target.nodeName ==="BUTTON" && event.target.dataset.memory === 'm+'){
    activeNum.innerText = memory;
  }

  if(event.target.nodeName ==="BUTTON" && event.target.dataset.register === '.'){
    const attrVal = event.target.getAttribute("data-register");
    activeNum.innerText += attrVal;
  }

})




