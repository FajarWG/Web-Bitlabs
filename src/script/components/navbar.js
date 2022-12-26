class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav>
    <div class="nav-wrapper">
        <div class="logo-container">
            BitLabs
        </div>
        <nav>
            <input class="hidden" type="checkbox" id="menuToggle">
            <label class="menu-btn" for="menuToggle">
                <div class="menu"></div>
                <div class="menu"></div>
                <div class="menu"></div>
            </label>
            <div class="nav-container">
                <ul class="nav-tabs">
                    <li class="nav-tab"><a href="https://github.com/FajarWG">About</a></li>
                    <li class="nav-tab"><a href="#coins">Pricing</a></li>
                    <li class="nav-tab"><a href="https://www.linkedin.com/in/fajarwg">Contact</a></li>
                    <li class="nav-tab"><a href="https://binance.com">Buy Crypto</a></li>
                </ul>
            </div>
        </nav>
    </div>
</nav>`;
  }
}

customElements.define("nav-bar", Navbar);
