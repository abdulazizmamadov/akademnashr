function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container" >
          <div className="footer-top">
            <a className="footer-logo logo" href="">
              <img src="./logo.svg" alt="" />
            </a>

            <ul className="footer-socials">
              <li className="footer-socials-item">
                <a href="">
                  <img src="./assets/icon-telegram.svg" alt="" />
                </a>
              </li>
              <li className="footer-socials-item">
                <a href="">
                  <img src="./assets/icon-facebook.svg" alt="" />
                </a>
              </li>
              <li className="footer-socials-item">
                <a href="">
                  <img src="./assets/icon-instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>

          <hr className="footer-divider"/>

          <div className="footer-bottom">
            <ul className="footer-list">
              <li><a href="#">Bosh sahifa</a></li>
              <li><a href="#">Kitoblar</a></li>
              <li><a href="#">Aksiyalar</a></li>
              <li><a href="#">Yangiliklar</a></li>
              <li><a href="#">Kontaktlar</a></li>
            </ul>
            <ul className="footer-list">
              <li><a href="#">Ilmiy nashrlar</a></li>
              <li><a href="#">Ilmiy-ommabop nashrlar</a></li>
              <li><a href="#">Ma’rifiy nashrlar</a></li>
              <li><a href="#">Lug’atlar</a></li>
              <li><a href="#">Adabiy-badiiy nashrlar</a></li>
              <li><a href="#">Abituriyentlar uchun</a></li>
              <li><a href="#">Bolalar uchun</a></li>
            </ul>
            <ul className="footer-list">
              <li><a href="#">Ko’p so’raladigan savollar</a></li>
              <li><a href="#">Yetkazib berish haqida</a></li>
              <li><a href="#">To’lov usullari haqida</a></li>
            </ul>
            <ul className="footer-list">
              <li><a href="#">Bo’sh ish o’rinlari</a></li>
              <li><a href="#">Biz bilan bog’lanish</a></li>
              <li><a href="#">Maxfiylik nizomi</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
