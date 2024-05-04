import TechSlider from '../tech-slider/TechSlider'
import './Tech.scss'

const Tech = () => {
  return (
    <section className="tech">
      <div className="container">
        <h2 className='tech__title'>Technologies I've been using</h2>
        <TechSlider/>
      </div>
    </section>
  )
}

export default Tech