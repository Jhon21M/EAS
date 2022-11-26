const boton_guardar_1=document.querySelector(".btn-1")

const boton_guardar_2=document.querySelector(".btn-2")

const boton_guardar_3=document.querySelector(".btn-3")

const icono1=document.querySelector(".Ci-p")

const icono2=document.querySelector(".Ci-S")

const icono3=document.querySelector(".Ci-t")

const Formulario_1=document.querySelector('.formu-1')

const Formulario_2=document.querySelector('.formu-2')
const Formulario_3=document.querySelector('.formu-3')

const Enunciado=document.querySelector('.enuciado-1')

boton_guardar_1.addEventListener('click',()=>
{
  icono1.classList.remove("Ci1")
  icono2.classList.add("Ci2")

  Formulario_1.classList.add("formu-1-1")
  Formulario_2.classList.remove("formu-2-2")
})

boton_guardar_2.addEventListener('click',()=>
{
  icono2.classList.remove("Ci2")
  icono3.classList.add("Ci3")

  Formulario_2.classList.add("formu-2-2")
  Formulario_3.classList.remove("formu-3-3")

  Enunciado.textContent="Datos de cuenta."
})




/*Cambiar imagen por el logotipo invertido en color blanco
document.getElementById("Logo-tipo").src="./Recursos/Imagenes/LOGO-inverso.png"
*/