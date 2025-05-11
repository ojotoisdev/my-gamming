import { useState } from "react"
import image from '../assets/image 30.png';
import timer from '../assets/timer.png';
import pause from '../assets/pause.png';
import avatar from '../assets/avatar.png';
import './PLayerMode.css';
const PlayerMode = () => {
     const [score, setScore] = useState(0);
        const [coins, setCoins] = useState(0);
    

  return (
    <div className="container">
        <nav className="Navbar"> 
            <div className="score">
                <img src={image} alt="image" />
                <div className="coins">
                    <span>Score</span>
                <button onClick={() => setScore(score + 10)}>650</button>
                </div>
                
            </div>
            <div>
                <div>
                    <img src={pause} alt="pause" />
                </div>
                <div id="timer">
                    
                 <img src={timer} alt="timer" />
                 <p>1:00</p>
                </div>
            </div>
            <div className="score">
                
                <div className="coins">
                   <span>Coins</span>
                    <button  onClick={() => setCoins(coins + 1)}>1000</button> 
                </div>
                <img src={avatar} alt="avatar" />
            </div>

        </nav>
      
    </div>
  )
}

export default PlayerMode
