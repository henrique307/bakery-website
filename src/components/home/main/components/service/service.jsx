import "./service.scss";
import "animate.css";

export function ServicesComponent() {
  const services = [
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/files/banner-v4-1.jpg?v=1614292337",
      span: "Limited edition. Eco-friendly. Not just for working out",
      title: "Carrot Cake",
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/files/banner-v4-2.jpg?v=1614293096",
      span: "Limited edition. Eco-friendly. Not just for working out",
      title: "Delicious Cakes",
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/files/banner-v4-3.jpg?v=1614293096",
      span: "Limited edition. Eco-friendly. Not just for working out",
      title: "100% Chocolate",
    },
  ];

  return (
    <section className="services" id="about">
      <div className="services-header">
        <h2 className="service-main-title">Freshly Baked Happiness</h2>

        <p className="service-subtitle">
          Discover our handcrafted cakes made with love and premium ingredients.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, i) => {
          return (
            <div key={i}>
              <div className="image-container">
                <img className="image" src={service.url} alt="service" />
              </div>

              <div className="service-description">
                <h3 className="service-title text-2xl">{service.title}</h3>
                <span className="service-text text-sm">{service.span}</span>

                <a className="shop-button text-xs" href="#products">
                  <span>Shop now</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
