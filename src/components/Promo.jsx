function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-inner">
          <div className="promo-content">
            <h2 className="promo-heading">
              Bolalar kitoblari uchun ajoyib aksiya!
            </h2>
            <p className="promo-text">
              Ertaklar, she’rlar, sarguzasht asarlar, fikrlashni o’stirish uchun
              turli mashq qo’llanmalari va komikslar.
              <br />
              <br />
              Aksiyadagi eng katta to’plamda{" "}
              <span className="promo-highlight">50 ta kitob</span>ni{" "}
              <span className="promo-highlight">350 ming so’mga</span> (aslida
              383 ming so’m) sotib olishingiz mumkin.
            </p>

            <button className="btn">Buyurtma berish</button>
          </div>
          <img className="promo-img"
            src="./assets/promo-img.jpg"
            alt="Promo img"
            srcSet="./assets/promo-img.jpg 1x, ./assets/promo-img@2x.jpg 2x"
          />
        </div>
      </div>
    </section>
  );
}

export default Promo;
