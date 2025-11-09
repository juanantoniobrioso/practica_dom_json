
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

//4. querySelectorAll y forEach
const botones = document.querySelectorAll('.btn-dom');
botones.forEach(boton => {
    boton.textContent = "DOM listo";
}); //no funciona

//5. Comparación entre colecciones vivas y estáticas
const lista = document.getElementById('lista');

//6. Crear elementos dinámicamente
const parrafo = document.createElement('p');
parrafo.textContent = "Creado dinámicamente";

document.body.appendChild(parrafo); //no funciona

//7. 
const nodoTexto = document.createTextNode('Texto generado con createTextNode');
const contenedor = document.getElementsByClassName('contenedor');
contenedor.body.appendChild(nodoTexto); //no funciona

//8.
const imagen = document.createElement('img');
imagen.setAttribute('src', 'https://media.istockphoto.com/id/1434983638/es/foto/conejo-europeo-joven-frente-a-la-c%C3%A1mara-oryctolagus-cuniculus.jpg');
imagen.setAttribute('alt', 'Imagen generada por JS');
document.body.appendChild(imagen);
