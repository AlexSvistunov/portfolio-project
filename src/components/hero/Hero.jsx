import { Link } from 'react-router-dom'
import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container hero__container'>
        <div className='hero__info hero-info'>
          <h1 className='hero-info__title'>Hi, I'm Alex!</h1>
          <p className='hero-info__descr'>
          Young and passionate front-end developer with a love for the web and a drive for creating innovative solutions
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