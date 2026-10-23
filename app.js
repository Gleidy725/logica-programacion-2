const valor = document.getElementById("input");
const boton=document.getElementById("boton");

function convertirKelvin(){
    let resultado=Number(valor.value);
    resultado+=273.15;
    document.getElementById("kelvin").textContent = resultado;
}

function convertirFahrenheit(){
    let resultado=Number(valor.value);
    resultado=(resultado*(9/5))+32;
    document.getElementById("fahrenheit").textContent = resultado;
}

boton.addEventListener("click",()=>{
    convertirFahrenheit();
    convertirKelvin();    
})