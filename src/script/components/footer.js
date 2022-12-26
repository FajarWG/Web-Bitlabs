class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` 
    <footer>
        <p>© 2022 BitLabs. All Rights Reserved.</p>
    </footer>
      `;
  }
}

customElements.define("foo-ter", Footer);
