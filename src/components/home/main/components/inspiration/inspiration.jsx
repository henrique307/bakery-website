import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import "./inspiration.scss";
import "animate.css";

export const posts = [
  {
    image:
      "https://carami-store-demo.myshopify.com/cdn/shop/articles/blog8_baa8748b-af9f-42af-bc8d-1fc744bcb8d8_1024x1024.jpg?v=1594176152",
    id: 1,
    data: {
      day: 17,
      month: "Mar",
    },
    title: "Chocolate Cornstarch Pudding",
    description: `The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve included in-depth details of the key values that drive our agency forward, as well as a background on our team members, fun facts about our agency, and a new culture reel that surfaces our collective vision. Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam at velit nisl. Aenean vitae est nisl. Cras molestie molestie nisl vel imperdiet. Donec vel mi sem.`,
  },
  {
    image:
      "https://carami-store-demo.myshopify.com/cdn/shop/articles/blog5_1024x1024.jpg?v=1593761682",
    id: 2,
    data: {
      day: 17,
      month: "Mar",
    },
    title: "Chocolate Cornstarch Pudding",
    description: `The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve included in-depth details of the key values that drive our agency forward, as well as a background on our team members, fun facts about our agency, and a new culture reel that surfaces our collective vision. Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam at velit nisl. Aenean vitae est nisl. Cras molestie molestie nisl vel imperdiet. Donec vel mi sem.`,
  },
  {
    image:
      "https://carami-store-demo.myshopify.com/cdn/shop/articles/blog6_1024x1024.jpg?v=1593761684",
    id: 3,
    data: {
      day: 17,
      month: "Mar",
    },
    title: "Chocolate Cornstarch Pudding",
    description: `The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve included in-depth details of the key values that drive our agency forward, as well as a background on our team members, fun facts about our agency, and a new culture reel that surfaces our collective vision. Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam at velit nisl. Aenean vitae est nisl. Cras molestie molestie nisl vel imperdiet. Donec vel mi sem.`,
  },
  {
    image:
      "https://carami-store-demo.myshopify.com/cdn/shop/articles/blog7_1024x1024.jpg?v=1593761687",
    id: 4,
    data: {
      day: 17,
      month: "Mar",
    },
    title: "Chocolate Cornstarch Pudding",
    description: `The new site provides a closer look at our agency – what connects us, what excites us, and ultimately what best represents our culture. We’ve included in-depth details of the key values that drive our agency forward, as well as a background on our team members, fun facts about our agency, and a new culture reel that surfaces our collective vision. Etiam risus diam, porttitor vitae ultrices quis, dapibus id dolor.Morbi venenatis lacinia rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non enim ut enim fringilla adipiscing id in lorem. Quisque aliquet neque vitae lectus tempus consectetur. Aliquam erat volutpat. Nunc eu nibh nulla, id cursus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam at velit nisl. Aenean vitae est nisl. Cras molestie molestie nisl vel imperdiet. Donec vel mi sem.`,
  },
];

export function InspirationComponent() {
  const splideOptions = {
    type: "loop",
    autoplay: true,
    interval: 4000,
    perPage: 3,
    perMove: 1,
    gap: "30px",
    pagination: false,
    breakpoints: {
      900: {
        perPage: 2,
      },
      500: {
        perPage: 1,
      },
    },
  };

  return (
    <section className="inspiration" id="blog">
      <h1 className="section-title text-3xl">Inspiration</h1>
      <Splide options={splideOptions}>
        {posts.map((post, i) => {
          const postLink = `/blog?post=${post.id}`
          
          return (
            <SplideSlide key={i}>
              <div className="image-container">
                <Link to={postLink} state={post}>
                  <img className="image" src={post.image} alt={post.title} />
                </Link>
              </div>
              <div className="date">
                <span className="day">{post.data.day}</span>
                <span className="month">{post.data.month}</span>
              </div>
              <span className="news text-xs">news</span>
              <Link to={postLink} state={post}>
                <h1 className="title text-xl">{post.title}</h1>
              </Link>
              <article>{post.description}</article>
              <Link
                className="readmore"
                to={postLink}
                state={post}
              >
                Read more
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
