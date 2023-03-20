const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((items)=>{
    items.onclick=()=>{
        if(items.id=="clear"){
            display.innerText = "";
        }
        else if(items.id=="backspace"){
            let String = display.innerText.toString();
            display.innerText=String.substr(0,String.length-1);
        }
        else if(display.innerText!="" && items.id=="equal"){
            display.innerText=eval(display.innerText);
        }
        else if(display.innerText=="" && items.id=="equal"){
            display.innerText="Empty!!";
            setTimeout(()=>(display.innerText=""),200);
        }
        else{
            display.innerText+=items.id;
        }

    }
}) 


const themeToggleBtn = document.querySelector(".toggler-theme");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};