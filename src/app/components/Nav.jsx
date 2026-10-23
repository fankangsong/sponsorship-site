export default function Nav({ site }) {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <a className="site-name" href="/">
          {site.title}
        </a>
        <nav className="site-nav">
          {site.nav.map((item) =>
            item.placeholder ? (
              <a key={item.label} href={item.href} className="placeholder" title="规划中">
                {item.label}（规划中）
              </a>
            ) : (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
