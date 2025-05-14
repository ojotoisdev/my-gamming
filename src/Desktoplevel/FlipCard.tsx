import circle from '../assets/circle.png'
import house from '../assets/house.png'
import people from  '../assets/people.png'
import trash from '../assets/trash.png'
import './FlipCard.css'
const FlipCard = () => {
  return (
    <div className="container">
        <img src={circle} alt="circle" />
        <img src={house} alt="house" />
        <img src={people} alt="people" />
        <img src={house} alt="house" />
        <img src={people} alt="people" />
        <img src={trash} alt="trash" />
        <img src={circle} alt="circle" />
        <img src={trash} alt="trash" />
      
    </div>
  )
}

export default FlipCard
