
import image from '../assets/image.png';
import timer from '../assets/timer.png';
import matching from '../assets/matching.png';
import pause from '../assets/pause.png';
import './GameThree.css';
import  { useState } from 'react'
const GameThree = () => {
    const [score, setScore] = useState(0);
        const [coins, setCoins] = useState(0);
    




  return (
    <div className='container'>
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
                
                <h1>Level 3</h1>
                
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
               <p> 1:00</p>
            </div>
        </div>
        <div className="flipcard">
            
                <img src={matching} alt="matching" />
            
                <img src={matching} alt="matching" />
        
                <img src={matching} alt="matching" />
            
                <img src={matching} alt="matching" />
            
                <img src={matching} alt="matching" />
            
                <img src={matching} alt="matching" />
            
            
                <img src={matching} alt="matching" />
            
            
                <img src={matching} alt="matching" />
            
            
        </div>
    </div>
  )
}

export default GameThree
