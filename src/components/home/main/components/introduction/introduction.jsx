import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./introduction.scss";
import "animate.css";
import { HashLink } from "react-router-hash-link";


export function IntruductionComponent() {
  const options = {
    width: "100%",
    type: "fade",
    pagination: false,
    speed: 600,
    rewind: true,
  };

  const banners = [
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/files/slideshow-v2.jpg?v=1614291095",
      span: "don't miss today's featured deals",
      title: "Amazing Cakes",
      subtitle: "Here to bring your life style to the next level.",
      button: "shop now",
    },
    {
      url: "https://carami-store-demo.myshopify.com/cdn/shop/files/slideshow-v1.jpg?v=1614293105",
      span: "Need-it-now",
      title: "Amazing Cakes",
      subtitle: "Comtemporary, minimal and beautifully iconic.",
      button: "buy now",
    },
  ];

  return (
    <section className="intruduction" id="intro">
      <Splide options={options}>
        {banners.map((banner, key) => {
          return (
            <SplideSlide key={key}>
              <div className="text-container">
                <span className="text-lg animate__animated">{banner.span}</span>
                <h1 className="text-4xl animate__animated">{banner.title}</h1>
                <h2 className="text-lg animate__animated">{banner.subtitle}</h2>
                <HashLink smooth to="#products" className="text-sm animate__animated">{banner.button}</HashLink>
              </div>
              <img
                src={banner.url}
                alt=""
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
