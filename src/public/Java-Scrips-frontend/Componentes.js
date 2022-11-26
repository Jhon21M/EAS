


//!Creacion de la cabecera o navbar......
class Cabecera extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML=` 
        <section class="barra-navegacion">
           <section class="limite contenido-barra-navegacion">
                <div class="contenido-icono">
                    <img class="Logo-img" src="../Recursos/Imagenes/logo-removebg-preview.png" alt="">
                    <h1 id="Letras-L">EAS</h1>
                </div>
                   <div class="Menu">
                    <div class="Menu-1">
                        <div class="contenedor-enlaces">
                            <ul>
                                <li id="Enlace" class="enlaces-individual"><a href="./Index">Home</a></li>
                                <li id="Enlace" class="enlaces-individual"><a href="./Servicio">Service</a></li>
                                <li id="Enlace" class="enlaces-individual"><a href="./contacto">Contact</a></li>
                                <li id="Enlace" class="enlaces-individual"><a href="./Planes" id="EP" class="enlace-premium">Conviertete en premium</a></li>
                            </ul>
                        </div>
                           <div class="contenedor-botones-header">
                           <a href="./Inicio-sesion" id="boton-h1" class="botones-header btn-1-header">Login</a> 
                           <a href="./Registrar" class="botones-header btn-2-header" >¡Inicia gratis!</a>
                        </div>
                    </div>
                  </div>

                  <div class="cont-perfil">
                    <div class="perfil">
                        <h4>MC</h4>
                    </div>
                    <i id="btn-desplegar"  class="fa-solid fa-caret-down btndes"></i>
                </div>
                      <div class="btn-h">
                      <i class="hamburger fa-solid fa-bars"></i>
                      </div>
                      
             </section>
        </section>
        <div class="ventana-perfil">
          <div class="linia-1p linia-p">
            <h4 class="PL">Opciones de cuenta</h4>
            <i class="cerrar-p fa-solid fa-x"></i>
          </div>
          <div class="grupo2">
            <div class="perfil">
                <h4>AC</h4>
            </div>
            <div class="texto">
                <h3 class="PL">Anabel Cyrus</h3>
                <p class="PL">Myley@gmail.com</p>
            </div>
          </div>
          <div class="grupo3">
            <div class="linia-2p linia-p3">
                <h4 class="PL">Perfil</h4>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="linia-3p linia-p3">
                <h4 class="PL">Actividad</h4>
                <i class="fa-solid fa-list"></i>
            </div>
            <div class="linia-4p linia-p3">
                <h4 class="PL">Configuracion</h4>
                <i class="fa-solid fa-gear"></i>
            </div>
          </div>
          <div class="linia-5p linia-p">
            <h4 class="PL">Ayuda</h4>
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <div class="linia-6p linia-p">
            <h4 class="PL">Cerrar sesion</h4>
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
        </div> `;
    }
}
window.customElements.define('barra-navegacion',Cabecera);