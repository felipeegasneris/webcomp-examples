class BeerTransform extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.addEventListener('click', () => {
      console.log('click');
      console.log(this.text.length);
      let newContent = '';
      for(let i=0; i< this.text.length; i++) {
       newContent+='🍺';
      }
      this.text = newContent;
    });

  }

  connectedCallback() {
    if (this.size === null) {
       this.size = '11';
    }
    this.attachaRender();
  }


  attachaRender() {
    this.shadowRoot.innerHTML = this.render();
  }

  static get observedAttributes() { return ["text"]; }

  attributeChangedCallback(name, oldValue, newValue) {
    this.attachaRender();
  }

  get text() {
    return this.getAttribute('text');
  }
  set text(text) {
    return this.setAttribute('text', text);
  }

  get size() {
    return this.getAttribute('size');
  }

  set size(size) {
    this.setAttribute('size', size);
  }

  render() {
    return  `<div>
               <p class="my-text">${this.text}</p> 
            </div>
            <style>
               .my-text {
                  font-size: ${this.size}px;
               } 
            </style>`;
  }

}

window.customElements.define('beer-transform', BeerTransform);
