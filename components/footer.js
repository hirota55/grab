class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer {
          position: relative;
          z-index: 2;
          top: calc(60vh - 30px);
          background-image: linear-gradient(to right top, #000000, #190e14, #271725, #302139, #332d51, #383b65, #3b4a79, #3a598e, #4d6ca4, #607fba, #7393d0, #86a8e7);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      </style>
      <footer class="footer text-center text-lg-start text-white">
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <a href="/index.html" class="mb-4 font-weight-bold text-decoration-none text-light">
                  <img class="me-2" height="30" src="/grab-logo.png" alt="">株式会社グラァブ
                </a>
              </div>
              <hr class="w-100 clearfix d-md-none" />
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <p> <a href="../pages/info.html" class="text-white">企業情報</a> </p>
                 <p> <a href="../pages/recruit.html" class="text-white">採用情報</a> </p>
                <p> <a href="../pages/contact.html" class="text-white">お問合せ</a> </p>
              </div>
              <hr class="w-100 clearfix d-md-none" />
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">お問い合わせ</h6>
                <p><i class="fas fa-envelope mr-3"></i> info@grab-japan.com</p>
                <p><i class="fas fa-phone mr-3"></i> 092−483−6600</p>
              </div>
               <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                 <p> <a href="../pages/toku_souhou.html" class="text-white small text-decoration-none">特商法</a> </p>
              </div>
            </div>
          </section>
          <hr class="my-3">
          <section class="p-3 pt-0">
            <div class="row d-flex align-items-center">
              <div class="col-md-7 col-lg-8 text-center text-md-start">
                <div class="p-3">© 2024 株式会社グラァブ All rights Reserved. </div>
              </div>
              <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end text-light">
                <a href="https://twitter.com/hirochan75nonb" target="_blank" class="btn btn-outline-light btn-floating m-1" role="button"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/grab.jp?igsh=YXFlYm5zbHdjNmp4&utm_source=qr" target="_blank" class="btn btn-outline-light btn-floating m-1" role="button"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);