import './styled.css'

import Clock from '../../assets/clock.svg'
import FortKnife from '../../assets/fortKnife.svg'
import MapPin from '../../assets/mapPin.svg'
import RecipeMock from '../.././../_mock_/recipes.json'
import { formatDate } from '../../utils/formartDate'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const { id } = useParams()
  const findRecipe = RecipeMock?.find((recipe) => recipe?.id === Number(id))

  return (
    <div className="container-recipes-food">
      <section className="container-recipes-food-top">
        <h1 className="texts-title">{findRecipe?.titulo}</h1>
        <div className="container-best-texts-info-img">
          <img
            src={findRecipe?.autor_foto}
            alt="Imagem aleatoria"
            width={'60px'}
            style={{ borderRadius: '50px' }}
          />
          <div className="container-best-texts-info-img-name" style={{ width: '30%' }}>
            <span style={{ fontWeight: '700' }}> {findRecipe?.autor} </span>
            <span className="texts-subtitle"> {formatDate(findRecipe?.data_criacao)}</span>
          </div>

          <div className="container-recipes-food-top-info">
            <img src={FortKnife} alt="Icone de faca e garfo" width={'20px'} />
            <span className="texts-subtitle"> {findRecipe?.categoria}</span>
          </div>

          <div className="container-recipes-food-top-info">
            <img src={Clock} alt="Icone de relogio" width={'20px'} />
            <span className="texts-subtitle"> {findRecipe?.tempo_preparo}</span>
          </div>

          <div className="container-recipes-food-top-info">
            <img src={MapPin} alt="Icone de relogio" width={'20px'} />
            <span className="texts-subtitle"> {findRecipe?.pais}</span>
          </div>
        </div>
      </section>
      <section className="container-best">
        <div style={{ width: '50%' }}>
          <img
            src={findRecipe?.foto}
            alt="Imagem receita"
            width={'100%'}
            height={'100%'}
            style={{ borderRadius: '50px 0px 0px 50px' }}
          />
        </div>
        <div className="container-recipes-food-right">
          <span className="container-recipes-food-right-title"> Ingredientes</span>
          {findRecipe?.ingredientes.map((item) => (
            <span key={item?.ingrediente} className="subtitle">
              <b>{item?.quantidade}</b> - {item?.ingrediente}
            </span>
          ))}
        </div>
      </section>
      <section className="container-recipes-food-right-title"> Modo de preparo</section>
      {findRecipe?.modo_preparo.split('\r').map((linha, index) => (
        <span className="subtitle" key={index} style={{ paddingLeft: '12px' }}>
          <b>-</b> {linha}
          <br />
        </span>
      ))}
    </div>
  )
}

export default Recipe
