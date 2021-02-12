document.head.innerHTML += /* html */
    `<style>
    foot {display: block}
  </style>`;

customElements.define("foot", class extends HTMLElement {

    connectedCallback() {
        this.textContent = "Copyright © 2021 Luis Andres Flores Gervacio.";
    }
});