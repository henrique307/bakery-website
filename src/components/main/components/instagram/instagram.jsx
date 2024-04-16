import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@splidejs/react-splide/css";
import "./instagram.scss";
import "animate.css";

export function InstagramComponent() {
  const images = [
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram1.jpg?v=15028672400486375812",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1055066334163984343",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram3.jpg?v=10690750907363273686",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=514901780726664485",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram5.jpg?v=9532755120814828950",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram6.jpg?v=10193151740617072835",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram7.jpg?v=8484596056880999012",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram8.jpg?v=7799298121832672080",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram9.jpg?v=10335643922099520779",
    "https://carami-store-demo.myshopify.com/cdn/shop/files/instagram10.jpg?v=17292874254506748844",
  ];

  return (
    <section className="instagram">
      <h1 className="section-title text-3xl">instagram</h1>
      <div className="images">
        {images.map((image) => {
          return (
            <div className="image-container">
              <img src={image} alt="instagram-doce" />
              <div className="hover-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
                <span className="shop">shop it</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
