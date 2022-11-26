const cont_pregunta1=document.getElementById('Pre1')
const btn_pregunta1=document.getElementById('A-Pre1')
const icono_btn=document.getElementById('btn-mas')
const cont_pregunta2=document.getElementById('Pre2')
const btn_pregunta2=document.getElementById('A-Pre2')
const icono_btn1=document.getElementById('btn-mas1')
const cont_pregunta3=document.getElementById('Pre3')
const btn_pregunta3=document.getElementById('A-Pre3')
const icono_btn2=document.getElementById('btn-mas2')
const cont_pregunta4=document.getElementById('Pre4')
const btn_pregunta4=document.getElementById('A-Pre4')
const icono_btn3=document.getElementById('btn-mas3')
const cont_pregunta5=document.getElementById('Pre5')
const btn_pregunta5=document.getElementById('A-Pre5')
const icono_btn4=document.getElementById('btn-mas4')
const cont_pregunta6=document.getElementById('Pre6')
const btn_pregunta6=document.getElementById('A-Pre6')
const icono_btn5=document.getElementById('btn-mas5')

btn_pregunta1.addEventListener('click',(e)=>
{
    icono_btn.classList.toggle("fa-plus")
    icono_btn.classList.toggle("fa-minus")
    cont_pregunta1.classList.toggle("preguntas-activo");
})

btn_pregunta2.addEventListener('click',(e)=>
{
    icono_btn1.classList.toggle("fa-plus")
    icono_btn1.classList.toggle("fa-minus")
    cont_pregunta2.classList.toggle("preguntas-activo");
})
btn_pregunta3.addEventListener('click',(e)=>
{
    icono_btn2.classList.toggle("fa-plus")
    icono_btn2.classList.toggle("fa-minus")
    cont_pregunta3.classList.toggle("preguntas-activo");
})
btn_pregunta4.addEventListener('click',(e)=>
{
    icono_btn3.classList.toggle("fa-plus")
    icono_btn3.classList.toggle("fa-minus")
    cont_pregunta4.classList.toggle("preguntas-activo");
})
btn_pregunta5.addEventListener('click',(e)=>
{
    icono_btn4.classList.toggle("fa-plus")
    icono_btn4.classList.toggle("fa-minus")
    cont_pregunta5.classList.toggle("preguntas-activo");
})
btn_pregunta6.addEventListener('click',(e)=>
{
    icono_btn5.classList.toggle("fa-plus")
    icono_btn5.classList.toggle("fa-minus")
    cont_pregunta6.classList.toggle("preguntas-activo");
})



window.addEventListener('click', e=>{
    if(cont_pregunta1.classList.contains('preguntas-activo')&& e.target != icono_btn)
        {
            cont_pregunta1.classList.remove("preguntas-activo");    
            icono_btn.classList.toggle("fa-minus");
            icono_btn.classList.toggle("fa-plus");
        }
})
window.addEventListener('click', e=>{
    if(cont_pregunta2.classList.contains('preguntas-activo')&& e.target != icono_btn1)
        {
            cont_pregunta2.classList.remove("preguntas-activo");    
            icono_btn1.classList.toggle("fa-minus");
            icono_btn1.classList.toggle("fa-plus");
        }
})
window.addEventListener('click', e=>{
    if(cont_pregunta3.classList.contains('preguntas-activo')&& e.target != icono_btn2)
        {
            cont_pregunta3.classList.remove("preguntas-activo");    
            icono_btn2.classList.toggle("fa-minus");
            icono_btn2.classList.toggle("fa-plus");
        }
})
window.addEventListener('click', e=>{
    if(cont_pregunta4.classList.contains('preguntas-activo')&& e.target != icono_btn3)
        {
            cont_pregunta4.classList.remove("preguntas-activo");    
            icono_btn3.classList.toggle("fa-minus");
            icono_btn3.classList.toggle("fa-plus");
        }
})
window.addEventListener('click', e=>{
    if(cont_pregunta5.classList.contains('preguntas-activo')&& e.target != icono_btn4)
        {
            cont_pregunta5.classList.remove("preguntas-activo");    
            icono_btn4.classList.toggle("fa-minus");
            icono_btn4.classList.toggle("fa-plus");
        }
})
window.addEventListener('click', e=>{
    if(cont_pregunta6.classList.contains('preguntas-activo')&& e.target != icono_btn5)
        {
            cont_pregunta6.classList.remove("preguntas-activo");    
            icono_btn5.classList.toggle("fa-minus");
            icono_btn5.classList.toggle("fa-plus");
        }
})

/* 
const Activar=document.querySelectorAll('.agregar_pregunta')
const Contenedor=document.querySelectorAll(".preguntas")
/*?..........................
Activar.forEach(Pre=>
    {
        Pre.addEventListener('click',()=>
        {

            Contenedor.classList.toggle("preguntas-activo");
            icono_btn.classList.toggle("fa-plus")
            icono_btn.classList.toggle("fa-minus")
        })
    })

    const aparecepregunta=(Pre)=>
    {
       
    } */