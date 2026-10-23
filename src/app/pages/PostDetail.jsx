export default function PostDetail({ post }) {
  return (
    <article className="detail">
      <p className="back">
        <a href="/posts/">← 返回随笔</a>
      </p>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
