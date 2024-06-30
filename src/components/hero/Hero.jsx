import { Link } from 'react-router-dom'
import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container hero__container'>
        <div className='hero__info hero-info'>
          <h1 className='hero-info__title'>Hi, I'm Alex!</h1>
          <p className='hero-info__descr'>
          During these 4 years as Front-End Software Engineer. My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.
          </p>

          <div className='hero__btns hero-btns'>
            <button className='hero-btns__cv'>View CV</button>
            {/* <button className='hero-btns__exp'>See experiences</button> */}
            <Link className='hero-btns__exp' to={'/experience'}>See experiences</Link>
          </div>
        </div>
        <div className='hero__image'>
          <img className='hero__img' src='/me.jpg' width={500} height={500}></img>
        </div>
      </div>
    </section>
  )

  // retina photo
}

export default Hero