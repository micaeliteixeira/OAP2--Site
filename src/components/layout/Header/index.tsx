import './styled.css'

import Facebook from '../../../assets/facebook.svg'
import Instagram from '../../../assets/instagram.svg'
import Logo from '../../../assets/logo.svg'
import Twitter from '../../../assets/twitter.svg'
import { randomNumber } from '../../../utils/randomNumber'

const Header = () => {
  const number = randomNumber()
  const navItems: { path: string; name: string }[] = [
    { path: '/OAP2--Site/', name: 'Home' },
    { path: `/OAP2--Site/recipe/${number}`, name: 'Receita aleatória' },
    { path: '/OAP2--Site/blog', name: 'Blog' },
    { path: '/OAP2--Site/contact', name: 'Contato' },
    { path: '/OAP2--Site/about', name: 'Sobre nós' }
  ]

  const getNavClassName = (path: string) => {
    const pathname = window.location.pathname
    if (path.startsWith('/OAP2--Site/recipe/')) {
      return pathname.startsWith('/OAP2--Site/recipe/') ? 'nav-menu nav-menu-weight' : 'nav-menu'
    }

    return pathname === path ? 'nav-menu nav-menu-weight' : 'nav-menu'
  }

  return (
    <header className="header-container">
      <div className="header-container-values">
        <img src={Logo} alt="Logo da página" width={'100px'} />
        <nav className="header-container-values-menu">
          {navItems.map(({ path, name }) => (
            <a key={name} className={getNavClassName(path)} tabIndex={0} href={path}>
              {name}
            </a>
          ))}
        </nav>
        <div className="header-container-values-icons">
          <img src={Facebook} alt="Icone do facebook" />
          <img src={Twitter} alt="Icone do twitter" />
          <img src={Instagram} alt="Icone do instagram" />
        </div>
      </div>
    </header>
  )
}

export default Header
