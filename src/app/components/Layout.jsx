import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

export default function Layout({ title, description, site, children }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
      </head>
      <body>
        <Nav site={site} />
        <main className="container">{children}</main>
        <Footer site={site} />
      </body>
    </html>
  );
}
