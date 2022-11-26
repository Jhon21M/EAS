window.addEventListener("scroll",function(){
    var header1=document.querySelector(".barra-navegacion")
    header1.classList.toggle("sticky",window.scrollY > 0)
})