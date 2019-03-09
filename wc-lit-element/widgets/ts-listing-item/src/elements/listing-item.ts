import {html, LitElement, property} from '@polymer/lit-element';
import {TemplateResult} from 'lit-html/lit-html';

class BeerTransform extends LitElement {

  @property() public text: string;
  @property() public size: string = '11';

  constructor() {
    super();
    this.addEventListener('click', () => {
      let newContent = '';
      for (let i = 0; i < this.text.length; i++) {
        newContent += '🍺';
      }
      this.text = newContent;
    });
  }

  public render(): TemplateResult {
    return html`
        <style>
            .my-text {
                  font-size: ${this.size}px;
               } 
        </style>
        <div>
           <p class="my-text">${this.text}</p> 
        </div>
    `;
  }
}

window.customElements.define('beer-transform', BeerTransform);
