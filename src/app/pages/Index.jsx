export default function Index({ site, galleryLatest, postsLatest }) {
  return (
    <>
      <section className="hero">
        <h1>{site.title}</h1>
        <p className="intro">{site.intro}</p>
      </section>

      <section>
        <h2>字帖橱窗</h2>
        <div className="grid">
          {galleryLatest.map((item) => (
            <a key={item.id} className="card" href={`/gallery/${item.id}/`}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="card-body">
                <h3>{item.title}</h3>
                <time>{item.date}</time>
              </div>
            </a>
          ))}
        </div>
        <p className="more">
          <a href="/gallery/">查看全部字帖 →</a>
        </p>
      </section>

      <section>
        <h2>随笔</h2>
        <ul className="post-list">
          {postsLatest.map((p) => (
            <li key={p.slug}>
              <time>{p.date}</time>
              <a href={`/posts/${p.slug}/`}>{p.title}</a>
              {p.summary && <span className="summary">{p.summary}</span>}
            </li>
          ))}
        </ul>
        <p className="more">
          <a href="/posts/">更多随笔 →</a>
        </p>
      </section>
    </>
  );
}
