
export class csOneElement extends HTMLElement {

    constructor() {
        super();


        setTimeout(() => {  
            this.Element_Loaded()
        }, 500);
    }

    /** Loaded  */
    private Element_Loaded(){
        // on load
      
    }// end load
}


window.customElements.define("one-element", csOneElement)