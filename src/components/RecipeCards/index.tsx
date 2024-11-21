import './styled.css'

import FortKnife from '../../assets/fortKnife.svg'
import RecipeMock from '../../../_mock_/recipes.json'
import Timer from '../../assets/time.svg'
import { useNavigate } from 'react-router-dom'

const RecipeCards = () => {
  const navigate = useNavigate()
  return (
    <aside>
      <div className="container-text-recipe">
        <h1 className="title">Receitas simples e saborosas</h1>
        <span className="subtitle">
          Descubra receitas rápidas, fáceis de fazer, tão deliciosas quanto simples. Perfeito para
          todas as refeições e ocasiões!
        </span>
      </div>
      <div className="container-recipes">
        {RecipeMock?.map((recipe) => (
          <div
            key={recipe.id}
            className="container-recipe"
            onClick={() => navigate(`recipe/${recipe?.id}`)}
          >
            <div className="container-recipe-img">
              <img
                src={recipe?.foto}
                alt="Imagem receita"
                width={'100%'}
                height={'246px'}
                style={{ borderRadius: '50px' }}
              />
            </div>

            <h1 className="container-best-info-title">{recipe.titulo}</h1>
            <div className="container-best-info" style={{ width: '80%', margin: '0px auto' }}>
              <div className="container-best-info-box">
                <img src={Timer} alt="Icone de relogio" width={'15px'} />
                {recipe?.tempo_preparo}
              </div>
              <div className="container-best-info-box">
                <img src={FortKnife} alt="Icone de faca e garfo" width={'15px'} />
                {recipe?.categoria}
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default RecipeCards
