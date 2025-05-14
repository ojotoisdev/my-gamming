
import Group from '../assets/Group (6).png'
import hon from '../assets/hon.png'
import image from '../assets/image.png'
import flip from '../assets/flip.png'
import frame from '../assets/frame.png'
import one from '../assets/one.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import five from '../assets/five.png'
import six from '../assets/six.png'
import seven from '../assets/seven.png'
import eight from '../assets/eight.png'
import down from '../assets/down.png'
import './player.css'

const Player = () => {
    
  return (
    <div className="container">
        <nav className='Navbar'>
            <div className='main'>
              <div className='group'>
                <div className='plus'>
                  <img src={Group} alt="group" className='group' />
                  <img src={hon} alt="hon"  className='hon'/>
                
                </div>
                
                <span className='span'>
                   <h2>Score</h2>
                   <p>650</p> 
                </span>
              </div>
            </div>
            <div className='flip-2'>
                <img src={flip} alt="flip"  />
                <p>See it, Flip it, Match it.</p>
            </div>
            <div className='img'>
              <img src={image} alt="" />  
            </div>
        </nav>
        <div className="container-level">
          <div className="game-level">
          <h1>Game Level</h1>
          <div className='flip'>
            <img src={one} alt="" />
            <img src={frame} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
            <img src={five} alt="" />
            <img src={six} alt="" />
            <img src={seven} alt="" />
            <img src={eight} alt="" />
          </div>
        </div>
        </div>
        <div className="down-image">
          <img src={down} alt="down" />
        </div>
       </div>
  )
}

export default Player
