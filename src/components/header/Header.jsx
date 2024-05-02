import './Header.scss'
import Nav from '../nav/Nav'
import Links from '../links/Links'

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Nav/>
        <Links/>
      </div>
    </header>
  )
}

export default Header