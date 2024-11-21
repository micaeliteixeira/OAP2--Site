import Recipes from '../../../_mock_/recipes.json'

const TastyRecipes = () => {
  return (
    <>
      {Recipes?.map((recipe) => {
        return (
          recipe.id <= 3 && (
            <div
              key={recipe.id}
              className="container-blog-value"
              onClick={() => (window.location.href = `/recipe/${recipe.id}`)}
            >
              <img
                src={recipe?.foto}
                alt="Imagem blog"
                width={'40%'}
                style={{ borderRadius: '50px' }}
              />
              <div className="container-blog-value-right">
                <span className="container-blog-value-right-title">{recipe.titulo}</span>
                <span className="container-blog-value-right-subtitle"> Por {recipe.autor}</span>
              </div>
            </div>
          )
        )
      })}
    </>
  )
}

export default TastyRecipes
