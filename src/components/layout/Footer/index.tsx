import './styled.css'

import Facebook from '../../../assets/facebook.svg'
import Instagram from '../../../assets/instagram.svg'
import Logo from '../../../assets/logo.svg'
import Twitter from '../../../assets/twitter.svg'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-container-values">
        <div className="footer-container-values-top">
          <img src={Logo} alt="Logo da página" width={'100px'} />
          <p className="p-subtitle">Todo mundo pode ser um chef na própria cozinha.</p>
        </div>

        <div className="footer-container-values-icons">
          <div className="footer-container-values-icon">
            <img src={Facebook} alt="Icone do facebook" />
            <img src={Twitter} alt="Icone do twitter" />
            <img src={Instagram} alt="Icone do instagram" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
