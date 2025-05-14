import cardone from '../assets/cardone.png'
import love from '../assets/love.png'
import tools from '../assets/tools.png'
import Group from '../assets/Group.png'
import tree from '../assets/tree.png'
import './FrameCard.css'
const FrameCard = () => {
  return (
    <div className="container">
      <img src={love} alt="love" />
      <img src={Group} alt="Group" />
      <img src={tools} alt="tools" />
      <img src={cardone} alt="cardone" />
      <img src={Group} alt="Group" />
      <img src={tree} alt="tree" />
      <img src={cardone} alt="cardone" />
      <img src={tree} alt="tree" />
      <img src={tools} alt="tools" />
      <img src={love} alt="love" />
      

    </div>
  )
}

export default FrameCard
