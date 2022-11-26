//?Pequeña funcion para hacer el navbar pegajoso.

window.addEventListener("scroll",function(){
    var header1=document.querySelector(".barra-navegacion")
    header1.classList.toggle("sticky",window.scrollY > 0)
})


//!Iteractividad para las preguntas frecuentes.
/*
const Pregunta=document.querySelectorAll(".preguntas")
const Btn_deplegar=document.querySelectorAll(".agregar_pregunta");

Btn_deplegar.forEach(boton => {
    boton.addEventListener('click',()=>
    {
        Pregunta.classList.toggle("preguntas-activo")
    })
});
*/ 
