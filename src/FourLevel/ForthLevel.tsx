
import image from '../assets/image.png';
import timer from '../assets/timer.png';
import matchingone from '../assets/matchingone.png';
import bar from '../assets/bar.png';
import './ForthLevel.css';
import  { useState } from 'react'
const ForthLevel = () => {
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
                <img src={bar} alt="bar"  className='bar'/>
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
            
                <img src={matchingone} alt="matchingone" />
            
                <img src={matchingone} alt="matching" />
        
                <img src={matchingone} alt="matchingone" />
            
                <img src={matchingone} alt="matchingone" />
            
                <img src={matchingone} alt="matchingone" />
            
                <img src={matchingone} alt="matchingone" />
                <img src={matchingone} alt="matchingone" />
                <img src={matchingone} alt="matchingone" />
            
                <img src={matchingone} alt="matchingone" />
            
            
                <img src={matchingone} alt="matchingone" />
            
            
        </div>
    </div>
  )
}

export default ForthLevel
