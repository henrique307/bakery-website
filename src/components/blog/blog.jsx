import { posts } from "../home/main/components/inspiration/inspiration";
import { HeaderComponent } from "../home/header/header";
import { FooterComponent } from "../home/footer/footer";
import "./blog.scss";

export function BlogComponent() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const postId = +urlParams.get("post");

  const post = posts.find((item) => item.id === postId);

  console.log(post);

  return (
    <>
      <HeaderComponent />
      <section className="blog">
        <div className="post-container">
          <h1 className="post-title">{post.title}</h1>
          <span className="post-date">
            {post.data.day}, {post.data.month}
          </span>
          <img src={post.image} alt={post.title} />
          <article className="post-description">
            <p>{post.description}</p>
            <p>{post.description}</p>
            <p>{post.description}</p>
            <p>{post.description}</p>
          </article>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
