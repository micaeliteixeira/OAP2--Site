import Contacts from '../../assets/contact.png'

const AboutUs = () => {
  return (
    <section className="container-contact">
      <h1 className="title">Sobre nós</h1>
      <div className="container-contact-form">
        <img src={Contacts} alt="image" width={'400px'} height={'472px'} />
        <div className="subtitle" style={{ textAlign: 'justify', paddingLeft: '12px' }}>
          Bem-vindos!! 🌟
          <br />
          <br />
          Somos apaixonados pela arte da gastronomia e por compartilhar experiências que deixam
          qualquer momento mais saboroso. Nosso site foi criado com um propósito simples: inspirar
          pessoas a explorar o mundo incrível da cozinha, experimentar novas receitas e se deliciar
          com conteúdos cheios de histórias e criatividade.
          <br />
          <br />
          Aqui você encontrará:
          <br />
          <br />
          <li style={{ paddingLeft: '12px' }}>
            <b>Receitas exclusivas:</b> De pratos rápidos e simples a criações sofisticadas, temos
            opções para todos os gostos e níveis de habilidade na cozinha.
          </li>
          <br />
          <li style={{ paddingLeft: '12px' }}>
            <b>Blog de gastronomia:</b> Descubra curiosidades, dicas e tendências do universo
            culinário. Nossos textos são criados para aguçar sua curiosidade e apetite.
          </li>
          <br />
          <li style={{ paddingLeft: '12px' }}>
            <b>Dicas de chefs fictícios:</b> Porque nossos mestres são imaginários, mas suas dicas
            são valiosas!
          </li>
          <br />
          Nosso compromisso é tornar a experiência gastronômica leve, divertida e, acima de tudo,
          inesquecível. Não importa se você é um cozinheiro de primeira viagem ou um especialista na
          cozinha.
          <br />
          <br />
          Explore, experimente e aproveite cada momento. E lembre-se: aqui tudo é fictício, mas o
          sabor da criatividade é 100% real! 🍴✨
        </div>
      </div>
    </section>
  )
}

export default AboutUs
