function Features() {
  return (
    <section className="features">
      <div className="features-container container">
        <div className="features-orange-line orange-line"></div>
        <h2 className="features__heading">Nega aynan Akademnashr?</h2>

        <ul className="features-list">
          <li className="feature">
            <div className="feature-icon-wrapper">
              <img src="./assets/feature-1.svg" alt="" />
            </div>
            <h3 className="feature-title">Oson buyurtma qilish</h3>
            <p className="feature-text">
              Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
              buyurtma qila olasiz.
            </p>
          </li>
          <li className="feature">
            <div className="feature-icon-wrapper">
              <img src="./assets/feature-2.svg" alt="" />
            </div>
            <h3 className="feature-title">Eng sara kitoblar</h3>
            <p className="feature-text">
              Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har xil
              janrdagi kitoblarni topa olasiz.
            </p>
          </li>
          <li className="feature">
            <div className="feature-icon-wrapper">
              <img src="./assets/feature-3.svg" alt="" />
            </div>
            <h3 className="feature-title">Tez yetkazib berish</h3>
            <p className="feature-text">
              O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro
              buyurtmalarni 10 ish kuni ichida yetkazib beriladi.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
