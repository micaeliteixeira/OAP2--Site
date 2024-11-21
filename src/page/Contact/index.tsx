import './styled.css'

import Contacts from '../../assets/contact.png'

const Contact = () => {
  return (
    <section className="container-contact">
      <h1 className="title">Contato</h1>
      <div className="container-contact-form">
        <img src={Contacts} alt="image" width={'400px'} height={'472px'} />
        <div className="container-contact-forms">
          <div className="container-contact-forms group">
            <label htmlFor="nome">NOME</label>
            <input id="nome" type="text" placeholder="Digite seu nome ..." />
          </div>
          <div className="container-contact-forms group">
            <label htmlFor="email">EMAIL</label>
            <input id="email" type="text" placeholder="Digite seu email ..." />
          </div>
          <div className="container-contact-forms group">
            <label htmlFor="mensagem">MENSAGEM</label>
            <textarea placeholder="Digite sua mensagem ..." id="mensagem" />
          </div>
          <button>Enviar</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
