
const contenedor=document.querySelector(".contenedor-parte-central");
const cont_dash=document.querySelector(".parte-central")
const cont_ventas=document.querySelector(".parte-central-ventas")
const btn_ventas=document.querySelector(".btn-ventas")
const btn_orden=document.querySelector(".btn-orden")
const btn_costos_gastos=document.querySelector(".btn-costos")
const btn_mensaje=document.querySelector(".btn-mensaje")
const btn_catalogo=document.querySelector(".btn-catalogo")
const btn_moneda=document.querySelector(".btn-moneda")
const btn_dash=document.querySelector(".btn-dashboard")
const btn_reportes=document.querySelector(".btn-reportes")
const btn_doc=document.querySelector(".btn-documentacion")

btn_ventas.addEventListener('click',()=>
{
    btn_dash.classList.toggle("active")
    btn_ventas.classList.toggle("active")
    cont_dash.classList.add("parte-central-inactiva")
    cont_ventas.classList.toggle("parte-central-ventas-activa")
})
btn_dash.addEventListener('click',()=>
{
    btn_dash.classList.toggle("active")
    btn_ventas.classList.toggle("active")
    cont_dash.classList.toggle("parte-central-inactiva")
    cont_ventas.classList.toggle("parte-central-ventas-activa")
})
