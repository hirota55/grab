class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <!-- Header Section -->
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div class="container mt-3">
                    <a class="navbar-brand text fw-bold" href="/index.html">
                        <img class="me-2" height="30" src="/grab-logo.png" alt="">株式会社グラァブ
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/pages/info.html" >
                                    会社概要
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/pages/recruit.html">採用情報</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/pages/contact.html">お問い合わせ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    `;
  }
}

customElements.define('header-component', Header);