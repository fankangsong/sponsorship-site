export default function GalleryDetail({ item }) {
  return (
    <article className="detail">
      <p className="back">
        <a href="/gallery/">← 返回字帖橱窗</a>
      </p>
      <h1>{item.title}</h1>
      <time>{item.date}</time>
      <img className="figure" src={item.image} alt={item.title} />
      <p className="intro">{item.intro}</p>
    </article>
  );
}
