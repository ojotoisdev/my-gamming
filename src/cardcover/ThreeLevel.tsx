import { useState } from "react"
import image from '../assets/image 30.png'
import pause from '../assets/pause.png'
import timer from '../assets/timer.png';
import Group from '../assets/Group 38791.png'
import matching from '../assets/matching.png';
import cube from '../assets/cube.png'
import './CardLevel.css'

const ThreeLevel = () => {

    const [score, setScore] = useState(0);
    const [coins, setCoins] = useState(0);

  return (
    <div className="container">
        
      <nav className='Navbar'>
            <div className="nav-section">
                <div className="score">
                    <span>Score</span>
                    <button onClick={() => setScore(score + 10)}>650</button>
                </div>
                <div className="score">
                    <span>Coins</span>
                    <button  onClick={() => setCoins(coins + 1)}>1000</button>
                </div>
            </div>
            <div className="logo">
                
                <h1>Level 1</h1>
                
            </div>
            <div className="face">
                <img src={pause} alt="pause" />
                <img src={image} alt="image" className='image' />
            </div>
        </nav>
        <div className="Clock">
            <div>
                <img src={timer} alt="timer"  className='timer'/>
            </div>
            <div className='read'>
               <p> 0:40</p>
            </div>
        </div>
        <div className="flip">
            
            <img src={cube} alt=""  />
            <img src={Group} alt=""  />
            <img src={Group} alt=""  />
            <img src={matching} alt=""  />
            
        </div>
      
    </div>
  )
}

export default ThreeLevel
