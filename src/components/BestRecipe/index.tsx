import './styled.css'

import Badge from '../../assets/bagde.svg'
import FortKnife from '../../assets/fortKnife.svg'
import PalyCircle from '../../assets/playCircle.svg'
import Parchment from '../../assets/parchment.svg'
import RecipeMock from '../../../_mock_/recipes.json'
import Timer from '../../assets/time.svg'
import { formatDate } from '../../utils/formartDate.tsx'
import { useNavigate } from 'react-router-dom'

const BestRecipe = () => {
  const navigate = useNavigate()
  const findRandomRecipe = RecipeMock?.find((recipe) => recipe?.id === 3)

  return (
    <section className="container-best">
      <img
        src={Badge}
        alt="Imagem receita"
        width={'10%'}
        style={{ position: 'absolute', left: '45%', top: '15%' }}
      />

      <div className="container-best-texts">
        <div className="container-best-texts-hot">
          <img src={Parchment} alt="Emoji de pergaminho" width={'15px'} /> Receita quente
        </div>
        <div className="container-best-texts-titles">
          <h1 className="texts-title">{findRandomRecipe?.titulo}</h1>
          <h2 className="texts-subtitle">
            Descubra a receita perfeita que combina simplicidade e sabor incomparável. Fácil de
            preparar, com ingredientes acessíveis, ela transforma qualquer refeição em um momento
            especial.
          </h2>
        </div>
        <div className="container-best-info">
          <div className="container-best-info-box">
            <img src={Timer} alt="Icone de relogio" width={'15px'} />
            {findRandomRecipe?.tempo_preparo}
          </div>
          <div className="container-best-info-box">
            <img src={FortKnife} alt="Icone de faca e garfo" width={'15px'} />
            {findRandomRecipe?.categoria}
          </div>
        </div>
        <div className="container-best-texts-info">
          <div className="container-best-texts-info-img">
            <img
              src={findRandomRecipe?.autor_foto}
              alt="Imagem aleatoria"
              width={'60px'}
              style={{ borderRadius: '50px' }}
            />
            <div className="container-best-texts-info-img-name">
              <span style={{ fontWeight: '700' }}> {findRandomRecipe?.autor} </span>
              <span className="texts-subtitle"> {formatDate(findRandomRecipe?.data_criacao)}</span>
            </div>
          </div>
          <button
            className="container-best-texts-info-button"
            onClick={() => navigate(`recipe/${findRandomRecipe?.id}`)}
          >
            Ver Receita <img src={PalyCircle} alt="Icone de paly" width={'24px'} />
          </button>
        </div>
      </div>

      <div style={{ width: '50%' }}>
        <img
          src={findRandomRecipe?.foto}
          alt="Imagem receita"
          width={'100%'}
          height={'100%'}
          style={{ borderRadius: '0 50px 50px 0' }}
        />
      </div>
    </section>
  )
}

export default BestRecipe
