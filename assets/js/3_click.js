//Ejercicio 3 

/*function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);*/


//Ejercicio 3.1 - modificar función
ele = document.getElementById("ele1") 

function pintar(){
    ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", pintar);


//Ejercicio 3.2 - entregar un color (green) como argumento a función pintar
ele = document.getElementById("ele1")

function pintar(color='green'){
    ele.style.backgroundColor = color
}
ele.addEventListener("click", function(){ pintar('yellow')});
