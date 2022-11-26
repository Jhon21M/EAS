//?Pequeña funcion para hacer el navbar pegajoso.

window.addEventListener("scroll",function(){
    var header1=document.querySelector("header")
    header1.classList.toggle("sticky",window.scrollY > 0)
})


//? mostrar el ejemplo.
//? Declaracion de las variables.
const btn=document.querySelector(".btn-abrir")
const btn1=document.querySelector(".btn-abrir-1")
const btn2=document.querySelector(".btn-abrir-2")
const btn3=document.querySelector(".btn-abrir-3")


const ejemplo=document.querySelector(".mostrable")
const contenido=document.querySelector(".cont-mostrar")
const Cerrar=document.querySelector(".cerrar")

btn.addEventListener('click',(e)=>
{
        ejemplo.classList.add('Transladar-mostrable')
        contenido.classList.add('cont-mostrar-a')
     
});
btn1.addEventListener('click',(e)=>
{
        ejemplo.classList.add('Transladar-mostrable')
        contenido.classList.add('cont-mostrar-a')
       
});
btn2.addEventListener('click',(e)=>
{
        ejemplo.classList.add('Transladar-mostrable')
        contenido.classList.add('cont-mostrar-a')
    
});
btn3.addEventListener('click',(e)=>
{
        ejemplo.classList.add('Transladar-mostrable')
        contenido.classList.add('cont-mostrar-a')
    
});

const titulo=document.querySelector(".slider-title")
const parrafo=document.querySelector(".slider-parrafo")
const imagen=document.querySelector(".slider-image")
const boton_sig=document.querySelector(".btn-sig")
const boton_reg=document.querySelector(".btn-regresar")

Cerrar.addEventListener('click',()=>
                        {
                            ejemplo.classList.remove('Transladar-mostrable')
                            contenido.classList.remove('cont-mostrar-a')
                            
                        })
window.onload=function()
{
        var archivo=new XMLHttpRequest();
        archivo.open("GET","../Recursos/Datos/index.json");

        archivo.onload=function()
        {
                if(archivo.status==200)
                {
                        
                      var ejem=JSON.parse(archivo.responseText);


                    
                        btn.addEventListener('click',(e)=>
                        {
                        imagen.src=ejem[0].url1;

                        titulo.textContent=ejem[0].Titulo;
                        
                        parrafo.textContent=ejem[0].Texto;
                        
                        boton_sig.addEventListener('click',()=>
                        {
                            imagen.src=ejem[0].url2;
                        })
                        boton_reg.addEventListener('click',()=>
                        {
                            imagen.src=ejem[0].url1;
                        })
                        
                        })
                      
                        btn1.addEventListener('click',(e)=>
                        {
                        
                        titulo.textContent=ejem[1].Titulo;
                        
                        parrafo.textContent=ejem[1].Texto;
                          
                        imagen.src=ejem[1].url1;

                        boton_sig.addEventListener('click',()=>
                        {
                            imagen.src=ejem[1].url2;
                        })
                        boton_reg.addEventListener('click',()=>
                        {
                            imagen.src=ejem[1].url1;
                        })
                        })
                       
                       
                        btn2.addEventListener('click',(e)=>
                        {
                        titulo.textContent=ejem[2].Titulo;
                        
                        parrafo.textContent=ejem[2].Texto;
                          
                        imagen.src=ejem[2].url1;

                        boton_sig.addEventListener('click',()=>
                        {
                            imagen.src=ejem[2].url2;
                        })
                        boton_reg.addEventListener('click',()=>
                        {
                            imagen.src=ejem[2].url1;
                        })
                        })

                        btn3.addEventListener('click',(e)=>
                        {
                        titulo.textContent=ejem[3].Titulo;
                        
                        parrafo.textContent=ejem[3].Texto;
                          
                        imagen.src=ejem[3].url1;
                        boton_sig.addEventListener('click',()=>
                        {
                            imagen.src=ejem[3].url2;
                        })
                        boton_reg.addEventListener('click',()=>
                        {
                            imagen.src=ejem[3].url1;
                        })
                        })                  
                }
        }
        archivo.send();
}
//?Desplegar targeta informativa en el area de pro que nosotros.
const flecha_deplegar=document.querySelector(".FA")
const flecha_deplegar1=document.querySelector(".FB")
const flecha_deplegar2=document.querySelector(".FC")

const minitargeta=document.querySelector(".mini-targetas")
const minitargeta1=document.querySelector(".M1")
const minitargeta2=document.querySelector(".M2")

flecha_deplegar.addEventListener('click',(e)=>
{
    minitargeta.classList.toggle("mini-targetas-activas")
    flecha_deplegar.classList.toggle("fa-chevron-down")
    flecha_deplegar.classList.toggle("fa-chevron-up")
})
flecha_deplegar1.addEventListener('click',(e)=>
{
    minitargeta1.classList.toggle("mini-targetas-activas1")
    flecha_deplegar1.classList.toggle("fa-chevron-down")
    flecha_deplegar1.classList.toggle("fa-chevron-up")
})
flecha_deplegar2.addEventListener('click',(e)=>
{
    minitargeta2.classList.toggle("mini-targetas-activas2")
    flecha_deplegar2.classList.toggle("fa-chevron-down")
    flecha_deplegar2.classList.toggle("fa-chevron-up")
})

//?Menu desplegable.
const Menu=document.querySelector(".hamburger");
const Cont_Menu=document.querySelector(".Menu")

Menu.addEventListener('click',()=>
{
    Cont_Menu.classList.toggle("Menu-activo")
})


