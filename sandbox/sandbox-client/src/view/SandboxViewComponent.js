import template from './SandboxViewComponent.html';

/**
 * Usage: <my-sandbox-view></my-sandbox-view>
 */
class SandboxViewComponent extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = template;

    this._addListeners();
  }

  disconnectedCallback() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
  }

  _addListeners() {
    var buttonEl = this.querySelector("ext-button");
    buttonEl.addEventListener('tap', this._onTap);
  }

  _onTap() {
    alert('on tap works');
  }

}
window.customElements.define('my-sandbox-view', SandboxViewComponent);
