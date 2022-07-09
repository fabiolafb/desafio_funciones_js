//Ejercicio 3 

//Variable global
let color = ''

//Variables constantes
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");


//Capturando tecla y definiendo color de cada una
document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'a') {
        color= 'pink';
    } 
    else if (event.key.toLowerCase() === 's') {
        color = 'lightgreen';  
    } 
    else if (event.key.toLowerCase() === 'd') {
        color= 'lightblue';
    } 
    else if (event.key.toLowerCase() === 'f') {
        color= 'cyan';   
    }
    })

//Asociar color a boxes
box1.addEventListener("click", function() {box1.style.backgroundColor=color})
box2.addEventListener("click", function() {box2.style.backgroundColor=color})
box3.addEventListener("click", function() {box3.style.backgroundColor=color})
box4.addEventListener("click", function() {box4.style.backgroundColor=color})