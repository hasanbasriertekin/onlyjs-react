import "./_hero.module.scss";

export function Hero() {
  return (
    <>
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold"> Only YOU </h1>
              <p className="fs-4">
                Sınırlarını zorlamaktan korkma; sadece senin olduğun yerde,
                gerçek potansiyelinin sınırsızlığını keşfedeceksin!
              </p>
              <a className="btn btn-warning btn-lg" href="https://quickabdest.com/">
                FARKLI OL
              </a>
            </div>
          </div>
        </div>
        <h2 className="header-h2">6 TEMEL İLKE</h2>
      </header>
    </>
  );
}

export default Hero;
