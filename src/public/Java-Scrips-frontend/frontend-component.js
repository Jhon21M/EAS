class holaMundo extends HTMLElement
{
    constructor()
    {
        super();
    }
    
    connectedCallback()
    {
        this.innerHTML="Hola mundo"
    }
}

window.customElements.define("Hola-Mundo",holaMundo);
