


//!Creacion de la cabecera o navbar......
class Footer extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
     this.innerHTML=`
      
         <div class="linia-f"></div>
          <section class="limite Footer">
           <div class="columna columna-1-footer">
            <img src="../Recursos/Imagenes/logo-removebg-preview.png" alt="">
            <h2>EAS</h2>
            <p>EAS ba mucho ma haya que una simple pagina de ayuda para la contabilidad si no que EAS sera tu asistente de fiebilidad casi comparado como un trabajador mas para tu empresa.</p>
         </div>
         <div class="columna columna-2-footer">
            <h3>Compañia</h3>
            <div class="linia"></div>
            <a href="#">Que es EAS</a>
            <a href="#">El equipo</a>
            <a href="#">Los consultores</a>
            <a href="#">Nuestra identidad</a>
            <a href="#">Marca y logotipo</a>
            <a href="#">El Progreso</a>
         </div>
         <div class="columna columna-2-footer">
            <h3>Legal</h3>
            <div class="linia"></div>
            <a href="#">Politica de privacidad</a>
            <a href="#">Terminos y condiciones</a>
            <a href="#">Politica de reembolsos</a>
            <h3>Ayuda</h3>
            <div class="linia"></div>
            <a href="#">Servicio para empresas</a>
            <a href="#">Consultoria</a></a>
            <a href="#">Analisis</a>
         </div>
         <div class="columna columna-3-footer">
            <h3>Siguenos</h3>
            <div class="linia"></div>
            <div class="cont-media"><i class="fa-brands fa-facebook-f"></i></div>
            <div class="cont-media"><i class="fa-brands fa-twitter"></i></div>
            <div class="cont-media"><i class="fa-brands fa-youtube"></i></div>
            <div class="cont-media"><i class="fa-brands fa-instagram"></i></div>
            <div class="cont-media"><i class="fa-brands fa-twitch"></i></div>
         </div>
         </section>
            <div class="pie">
            <p>	Ⓒ EAS Easier Acounting Service</p>
        </div>
        `;
    }
}
window.customElements.define('parte-footer',Footer);