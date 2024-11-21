import './styled.css'

import Blogs from '../../../_mock_/blog.json'
import Clock from '../../assets/clock.svg'
import { formatDate } from '../../utils/formartDate'

const BlogTexts = () => {
  return (
    <>
      {Blogs?.map((blog) => (
        <div
          key={blog.id}
          className="container-blog-value"
          onClick={() => (window.location.href = `/OAP2--Site/blog/${blog.id}`)}
        >
          <img
            src={blog?.image}
            alt="Imagem blog"
            width={'40%'}
            height={'246px'}
            style={{ borderRadius: '50px' }}
          />
          <div className="container-blog-value-right">
            <span className="container-blog-value-right-title">{blog.title}</span>
            <span className="container-blog-value-right-subtitle">{blog.excerpt}</span>
            <div className="container-blog-value-right-bottom">
              <img
                src={blog?.author?.photo}
                alt="Imagem aleatoria"
                width={'60px'}
                style={{ borderRadius: '50px', marginRight: '12px' }}
              />
              <span style={{ fontWeight: '700' }}> {blog?.author?.name} </span>

              <div className="container-recipes-food-top-info">
                <img src={Clock} alt="Icone de relogio" width={'20px'} />
                <span className="texts-subtitle"> {formatDate(blog?.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogTexts
