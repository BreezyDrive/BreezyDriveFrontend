import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
          alt="Background"
        />
      </div>

      <div className="hero__content">
        <h1>
          BreezyDrive - Cùng Bạn
          <br />
          Đến Mọi Hành Trình
        </h1>
        <p>
          Trải nghiệm sự khác biệt từ{" "}
          <span className="highlight">hơn 10.000</span> xe gia đình đời mới khắp
          Việt Nam
        </p>
      </div>
    </section>
  );
}

export default Hero;
