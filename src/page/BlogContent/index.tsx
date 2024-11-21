import './styled.css'

import BlogMock from '../../../_mock_/blog.json'
import Clock from '../../assets/clock.svg'
import { formatDate } from '../../utils/formartDate'
import { useParams } from 'react-router-dom'

const BlogContent = () => {
  const { id } = useParams()
  const findBlog = BlogMock?.find((blog) => blog?.id === Number(id))

  return (
    <section className="content-blog-content">
      <div style={{ marginBottom: '24px' }}>
        <img src={findBlog?.image} alt="image" width={'100%'} height={'472px'} />
        <h1 className="title-content">{findBlog?.title}</h1>
      </div>
      <div className="container-blog-value-right-bottom" style={{ marginBottom: '24px' }}>
        <img
          src={findBlog?.author?.photo}
          alt="Imagem aleatoria"
          width={'60px'}
          style={{ borderRadius: '50px', marginRight: '12px' }}
        />
        <span style={{ fontWeight: '700' }}> {findBlog?.author?.name} </span>

        <div className="container-recipes-food-top-info">
          <img src={Clock} alt="Icone de relogio" width={'20px'} />
          <span className="texts-subtitle"> {formatDate(findBlog?.created_at)}</span>
        </div>
      </div>
      {findBlog?.content.split('\r\n').map((linha, index) => (
        <span
          className="subtitle"
          key={index}
          style={{ paddingLeft: '12px', textAlign: 'justify' }}
        >
          {linha}
          <br /> <br />
        </span>
      ))}
    </section>
  )
}

export default BlogContent
