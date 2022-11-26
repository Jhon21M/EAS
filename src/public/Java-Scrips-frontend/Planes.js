//?Pequeña funcion para hacer el navbar pegajoso.

window.addEventListener("scroll",function(){
    var header1=document.querySelector(".barra-navegacion")
    header1.classList.toggle("sticky",window.scrollY > 0)
})

//?Menu desplegable.
const Menu=document.querySelector(".hamburger");
const Cont_Menu=document.querySelector(".Menu")

Menu.addEventListener('click',()=>
{
    Cont_Menu.classList.toggle("Menu-activo")
})

//?Menu del perfil desplegable...
const desplegar=document.getElementById('btn-desplegar')
const desple=document.querySelector(".btndes");
const ventana=document.querySelector(".ventana-perfil")
const cerrar_perfil=document.querySelector(".cerrar-p")

desple.addEventListener('click',()=>
{
ventana.classList.toggle("ventana-perfil-a")
})
cerrar_perfil.addEventListener('click',()=>
{
    ventana.classList.remove("ventana-perfil-a")
})