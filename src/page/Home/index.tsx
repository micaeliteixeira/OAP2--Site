import './styled.css'

import BestRecipe from '../../components/BestRecipe'
import RecipeCards from '../../components/RecipeCards'

const Home = () => {
  return (
    <>
      <BestRecipe />
      <main className="container-text">
        <h1 className="title">Por que um site de gastronomia com receitas e blog é essencial?</h1>
        <span className="subtitle">
          Um site de gastronomia vai muito além de compartilhar receitas; é um espaço para inspirar,
          ensinar e conectar pessoas apaixonadas por culinária. Ele permite que qualquer pessoa,
          seja um cozinheiro experiente ou um iniciante na cozinha, encontre ideias criativas, dicas
          úteis e soluções práticas para o dia a dia.
        </span>
        <span className="subtitle">
          Combinar receitas e um blog oferece o melhor dos dois mundos: enquanto as receitas ajudam
          na prática, o blog aprofunda o conhecimento. Por meio de artigos, é possível explorar
          temas como tendências gastronômicas, a história por trás de pratos icônicos, dicas para
          escolher os melhores ingredientes, e até mesmo ideias para criar experiências únicas à
          mesa.
        </span>
        <span className="subtitle">
          Além disso, um site de gastronomia cria uma comunidade. Ele abre espaço para que pessoas
          compartilhem suas próprias histórias e adaptações, gerando um ambiente de aprendizado
          mútuo e troca de experiências.
        </span>
        <span className="subtitle">
          No final, gastronomia não é apenas sobre cozinhar — é sobre unir pessoas, contar histórias
          e celebrar a vida através dos sabores. Um site assim se torna um ponto de encontro para
          todos que desejam transformar a cozinha em um verdadeiro laboratório de memórias e
          prazeres.
        </span>
      </main>
      <RecipeCards />
    </>
  )
}

export default Home
