// entry-server.jsx — SSG 渲染入口（构建期执行，产出纯静态 HTML）
// build.js 经 esbuild 打包本文件后 dynamic import，按页面名渲染对应组件树
import { renderToStaticMarkup } from 'react-dom/server';
import Layout from './components/Layout.jsx';
import IndexPage from './pages/Index.jsx';
import GalleryPage from './pages/Gallery.jsx';
import GalleryDetailPage from './pages/GalleryDetail.jsx';
import PostsPage from './pages/Posts.jsx';
import PostDetailPage from './pages/PostDetail.jsx';
import NotFoundPage from './pages/NotFound.jsx';

const PAGES = {
  index: IndexPage,
  gallery: GalleryPage,
  'gallery-detail': GalleryDetailPage,
  posts: PostsPage,
  'post-detail': PostDetailPage,
  '404': NotFoundPage,
};

export function renderPage(page, data) {
  const Page = PAGES[page];
  if (!Page) throw new Error(`unknown page: ${page}`);
  const { site } = data;
  return (
    '<!DOCTYPE html>\n' +
    renderToStaticMarkup(
      <Layout title={data.title} description={site.intro.replace(/\n/g, ' ')} site={site}>
        <Page {...data} />
      </Layout>
    )
  );
}
