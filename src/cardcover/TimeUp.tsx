import { useState } from "react"
import pause from '../assets/pause.png'
import image from '../assets/image 30.png'
import flip from '../assets/flip.png'
import frame from '../assets/frame.png'
import emty from '../assets/emty.png'
import Group from  '../assets/Group (6).png'
import down from '../assets/down.png'
import './CompleteLevel.css'

const TimeUp = () => {

    const [score, setScore] = useState(0);
        const [coins, setCoins] = useState(0);
  return (
    <div>
        
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
            <div className='flip'>
                <img src={flip} alt="flip"  />
                <p>See it, Flip it, Match it.</p>
            </div>
            <div className="face">
                <img src={pause} alt="pause" />
                <img src={image} alt="image" className='image' />
            </div>
        </nav>
        <div className="content">
            <div className="game-level">
            <div className="star-1">
                <img src={emty} alt=" emty" className="image" />
                <img src={frame} alt="frame" className="frame" />
            </div>
            <div className="comment">
                <p><strong>Time up!</strong> <br />You did not matched all cards on time</p>
            </div>
            <div className="reward">
                <h1>REWARD</h1>
                <img src={Group} alt="" />
            </div>
            <div className="btn">
                <button type="button">Replay</button>
                <button type="button">Exit</button>
            </div>
            </div>
        </div>
        <div className="down">
            <img src={down} alt="" />
        </div>
    </div>
  )
}

export default TimeUp
