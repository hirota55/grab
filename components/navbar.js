class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="info">
        <nav class="navbar navbar-expand navbar-light bg-transparent py-0">
          <div class="container">
            <a class="navbar-brand" target="_blank" href="https://twitter.com/hirochan75nonb">
              <i class="fab fa-twitter text-info border-end pe-3 border-warning"></i>
            </a>
            <a class="navbar-brand" target="_blank" href="https://www.instagram.com/grab.jp?igsh=YXFlYm5zbHdjNmp4&utm_source=qr">
              <i class="fa-brands fa-instagram text-optional"></i>
            </a>
            <div class="navbar-nav ms-auto">
              <div class="navbar-brand email-address text-primary">
                <small class="text-gray d-none d-md-inline d-print-none">info@grab-japan.com</small>
              </div>
              <div class="navbar-brand phone-number fw-bold bg-optional px-3 text-light me-0">
              <i class="fa-solid fa-mobile-screen-button"></i> 092−483−6600</div>
            </div>
          </div>
        </nav>
      </section>
     
      <section class="top">
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
                                    企業情報
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/pages/recruit.html"></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">お問い合わせ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Content Section -->
        <div class="hero-content d-flex justify-content-center align-items-center h-100 w-100 px-3 pb-5">
            <div class="title-tagline text-center text-light">
                <h2 class="title text-light fw-bold">採用情報</h2>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define('navbar-component', Navbar);