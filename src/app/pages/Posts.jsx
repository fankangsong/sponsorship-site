export default function Posts({ posts }) {
  return (
    <>
      <h1>随笔</h1>
      <ul className="post-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <time>{p.date}</time>
            <a href={`/posts/${p.slug}/`}>{p.title}</a>
            {p.summary && <span className="summary">{p.summary}</span>}
          </li>
        ))}
      </ul>
    </>
  );
}
