import  { useState } from 'react'
import logo from '../assets/logo.png';
import image from '../assets/image.png';
import down from '../assets/down.png';
import './LeveOne.css';

import frame  from  '../assets/Frame.png';

const LeveOne = () => {
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
                <span>
                <img src={logo} alt="Logo" className="logo" />
                <p>See it, Flip it, Match it</p>
                </span>
            </div>
            <div className="face">
                <img src={image} alt="image" className='image' />
            </div>
        </nav>
        <div className="content">
            <div className="main">
                <span className='find'>
                <img src={frame} alt=""  className='frame'/>
                <p>Find the same image as fast as you can</p>
                </span>
                
            </div>
        </div>
        <div className="down">
            <img src={down} alt="down"  className='down'/>

        </div>
      
    </div>
  )
}

export default LeveOne
