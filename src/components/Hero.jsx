function Hero() {
  return (
    <>
      <section className="hero" style={{display: "none"}}>
        <div className="hero-container container">
          <div className="hero__content">
            <div className="orange-line"></div>
            <h2 className="hero__heading">Pythonda dasturlash asoslari</h2>
            <p className="hero__text">
              Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal
              qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar
              yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish
              mumkin.
            </p>

            <button className="btn">Buyurtma berish</button>
          </div>
          <img className="hero__img" src="./assets/python-book.jpg" alt="" />
        </div>
      </section>
    </>
  );
}

export default Hero;
