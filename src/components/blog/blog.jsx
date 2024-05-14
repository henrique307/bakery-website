import { posts } from "../home/main/components/inspiration/inspiration";
import { HeaderComponent } from "../home/header/header";
import { FooterComponent } from "../home/footer/footer";
import "./blog.scss";
import { Navigate } from "react-router-dom";

export function BlogComponent() {
  const url = window.location.href.split("#/blog?")[1];
  const urlParams = new URLSearchParams(url);
  const postId = urlParams.get("post");

  if (!postId) {
    return <Navigate to={"/"} />;
  }

  const post = posts.find((item) => item.id === +postId);

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
