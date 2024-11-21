import './styled.css'

import BlogTexts from '../../components/BlogTexts'
import TastyRecipes from '../../components/TastyRecipes'

const Blog = () => {
  return (
    <section className="container-blog">
      <div className="container-blog-top">
        <h1 className="title">Blog & Artigos</h1>
        <span className="subtitle" style={{ width: '60%', textAlign: 'center' }}>
          Sabores e histórias que alimentam a alma: descubra curiosidades, dicas e inspirações para
          transformar sua paixão pela gastronomia em arte.
        </span>
      </div>
      <div className="container-blog-content">
        <div className="container-blog-content-left">
          <BlogTexts />
        </div>
        <div className="container-blog-content-right">
          <TastyRecipes />
        </div>
      </div>
    </section>
  )
}

export default Blog
