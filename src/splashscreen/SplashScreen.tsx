import black from '../assets/black.png'
import redcard from '../assets/redcard.png'
import greencard from '../assets/greencard.png'
import browncard from '../assets/browncard.png'
import flip from '../assets/flip.png'
import './SplashScreen.css'
const SplashScreen = () => {
  return (
      <div className="container">
        <div className="card">
            <img src={greencard} alt="" />
            <img src={browncard} alt="" />
        </div>
        <div className="flip">
          <img src={flip} alt="" />
          <p>See it, Flip it, Match it</p>
        </div>
        <div className="down-card">
          <img src={black} alt="" />
          <img src={redcard} alt="" />
        </div>
      </div>

  )
}

export default SplashScreen
