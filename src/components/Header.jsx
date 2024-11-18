import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header" style={{display: "none"}}>
        <div className="header__container container">
          <a className="header__logo" href="">
            <img src="./logo.svg" alt="Site logo" />
          </a>

          <ul className="header__menu">
            <li className="header__menu-item">
              <a className="header__menu-item-link active" href="">Bosh sahifa</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="">Biz haqimizda</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="">Xizmatlar</a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="">Aloqa</a>
            </li>
          </ul>

          <button className="btn">Ro'yxatdan o'tish</button>
        </div>
      </header>
    </>
  );
}

export default Header;
