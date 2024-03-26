import AboutImage from '../../assets/about.png'
import './about.css'
import CV from '../../assets/CV.pdf'
import data from './data'
import Card from '../../components/Card'
import {HiDownload} from 'react-icons/hi'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className="about__card">
                    <span className="about__card-icon">{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>

                 
                ))
              }
          </div>
          <p>
            bulding Projects my clients love have  always been my passion.
            Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, i'm always motivated to do more!
          </p>
          <p>
            hi, my name is kekgaugetswe Seabti from Pretoria, South africa. I'm a full stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online,
            giving you industry-standard desgin and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! check out my resume below!
          </p>
          <a href={CV} download className='btn primary' >Download CV<HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About