import hon from '../assets/hon.png';
import image from '../assets/image 30.png'
import Group from '../assets/Group (6).png'
import flip from '../assets/flip.png'
import './Style.css'
import down from '../assets/down.png' 

const Learn = () => {
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
            <div className='flip'>
                <img src={flip} alt="flip"  />
                <p>See it, Flip it, Match it.</p>
            </div>
            <div className='img'>
              <img src={image} alt="" />  
            </div>
        </nav>

        <div className="card-section">
          <div className='how-to-play'>
            <p>Here's how <br />to play <br /> Flipbit</p>
          </div>
          <div id='btn'>
            <p>Fast finger? Sharp eyes? You will  <br />put them to the test on Flipbit!</p>
            <div className="btn">
              <button type="button">Back</button>
              <button type="button">Next</button>
            </div>
          </div>
        </div>
        <div className="down">
        <img src={down} alt="down" />
        </div>
        
    </div>
  )
}

export default Learn
