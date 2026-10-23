export default function Gallery({ gallery }) {
  return (
    <>
      <h1>字帖橱窗</h1>
      <div className="grid">
        {gallery.map((item) => (
          <a key={item.id} className="card" href={`/gallery/${item.id}/`}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="card-body">
              <h3>{item.title}</h3>
              <time>{item.date}</time>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
