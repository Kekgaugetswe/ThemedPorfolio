import './header.css'
import Me from '../../assets/me.png';

import data  from './data';
const Header = () => {
  return (
   <header id="header">
    <div className="container header__container">
      <div className="header__profile">
        <img src={Me} alt="Header Potrait" />
      </div>
      <h3>Kekgaugetswe Sebati</h3>
      <p>
        You are a click away from building  your dream website or web app. Send me the details of your profile 
        of your project for a mordern, mobile responsive, highly performant  website today!.
      </p>
      <div className="header__cta">
        <a href="#contact" className='btn primary'>Let's Talk</a>
        <a href="#portfolio" className='btn light'>My work</a>
      </div>
      <div className="header__socials">
        {
          data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)

        }
      </div>
    </div>
   </header> 
  )
}

export default Header