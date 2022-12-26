class Banner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ` 
        <div class="banner-text">
            <h1>Discover and Check Latest Price Crypto</h1>
            <p>BitLabs is a cryptocurrency information website. We provide you with the latest news and prices straight from the crypto market.</p>
            <button class="button-start">
                <a href="#coins" class="btn btn-primary">Get Started</a>
            </button>
        </div>
        <div class="banner-image">
            <img src="https://i.ibb.co/KVrkYd6/banner.png" alt="banner">
        </div>
    `;
  }
}

customElements.define("ban-ner", Banner);
