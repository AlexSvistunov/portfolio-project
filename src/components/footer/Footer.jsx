import Links from '../links/Links'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <small className='footer__author'>alexey svistunov © 2024</small>
        <Links/>
      </div>
    </footer>
  )
}

export default Footer