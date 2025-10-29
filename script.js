//1. Acceso al DOM básico
const textoEncabezado = document.getElementById(encabezado);
const colorParrafo = document.getElementsByTagName("p");

encabezado.innerText = "HOLA";
if(colorParrafo.length>0){
    colorParrafo[0].style.color="green";
}

//2. Modificación de varios elementos
const textos = document.getElementsByClassName("text");
for (let i = 0; i < textos.length; i++){
    textos[i].style.color="#9b9b9b";
}
//3. Selección con querySelector
const caja = document.querySelector(".caja");
caja.style.backgroundColor = "lightblue";
