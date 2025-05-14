import plus from '../assets/plus.png'
import angle from '../assets/angle.png'
import cross from '../assets/cross.png'
import './Style.css'
const FlipTwo = () => {
  return (
    <div className="container">
       <img src={plus} alt="" /> 
       <img src={angle} alt="" /> 
       <img src={angle} alt="" /> 
       <img src={cross} alt="" /> 
       <img src={plus} alt="" /> 
       <img src={cross} alt="" /> 
       
    </div>
  )
}

export default FlipTwo
