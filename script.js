//1. Acceso al DOM básico
const textoEncabezado = document.getElementById(encabezado);
const colorParrafo = document.getElementsByTagName("p");

encabezado.innerText = "HOLA";
colorParrafo.style.color = "green"; //no funciona

//2. Modificación de varios elementos
