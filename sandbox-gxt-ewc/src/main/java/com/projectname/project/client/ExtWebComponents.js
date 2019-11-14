import '/node_modules/@sencha/ext-web-components/src/ext-button.component.js';
// import '/node_modules/@sencha/ext-web-components/src/ext-container.component.js';

// Simple component
class MyViewElement extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = "<div>My Simple View Web Component 5</div>";
  }

  // When the element is ready...
  connectedCallback() {
  }
}
window.customElements.define('my-view', MyViewElement);


// Component with ExtWebComponent
const _template = `
   <ext-button
      text="Send"
      ui="action raised">
   </ext-button>
   `;

class MyViewElement2 extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = _template;
  }

  // When the element is ready...
  connectedCallback() {
    this._addListeners();
  }

  _addListeners() {
    let button1 = this.querySelector('ext-button');
    button1.addEventListener('tap', (event) => {
      this.dispatchEvent(new Event('ext-button-tap'));
    });
  }
}
window.customElements.define('my-view-buttons', MyViewElement2);