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
      <div className="services-container">
        {services.map((service, i) => {
          return (
            <>
              <div className="image-container" key={`img-${i}`}>
                <img className="image" src={service.url} alt="service" />
              </div>
              <div className="service-description">
                <h1 className="service-title text-2xl">{service.title}</h1>
                <span className="service-text text-sm">{service.span}</span>
                <a className="shop-button text-xs" key={`desc-${i}`} href="#products">
                  <span>Shop now</span>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
