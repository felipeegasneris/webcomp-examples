import { Component, Prop, Listen, State } from '@stencil/core';

@Component({
  tag: 'beer-transform',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() text: string = '';
  @State() localText: string = '';

  @Listen('click')
  changeText() {
    let newContent = '';
    for (let i = 0; i < this.text.length; i++) {
      newContent += '🍺';
    }
    this.localText = newContent;
  }

  render() {
    return <div class="my-text">{this.localText === '' ? this.text: this.localText}</div>;
  }
}
