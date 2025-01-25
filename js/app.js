const display = document.getElementById("display");

function agregarPantalla(value) {
    display.value +=value;
    
}

function limpiar(){
    display.value = "";
    
}
function calcular(){
    try{
        let expresion = display.value.replace(/x/g, "*").replace(/%/g, "/");
        display.value= eval(expresion);
    } catch(error){
        display.value = "error";
    }
}