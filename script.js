const btnE1= document.querySelector(".btn")
const inputE1=document.getElementById("input");
const copyIconE1=document.querySelector(".fa-print");
const alertcontainerE1=document.querySelector(".alert-container");

copyIconE1.addEventListener("click",()=>{
    copyPassward();
 if(inputE1.value){
    alertcontainerE1.classList.remove("active");
    setTimeout(()=>{
    alertcontainerE1.classList.add("active");
    },2000)
}
});

btnE1.addEventListener("click",()=>{
    createPassward()
});

function createPassward(){
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>/?`~";
    const passlength=14;
    let passward=""
    for(let index=0;index<passlength;index++){
        const randomNumber=Math.floor(Math.random()
        * chars.length);
        passward +=chars.substring(randomNumber,randomNumber+1);
        
    }
    inputE1.value=passward;
    alertcontainerE1.innerText= passward +"copied!";
}
function copyPassward(){
    const copiedText=inputE1.value;
    inputE1.select();
    inputE1.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputE1.value);
    alertcontainerE1.innerText = copiedText + " copied!";
    setTimeout(()=>{
    inputE1.value = "";
    },1000);
}