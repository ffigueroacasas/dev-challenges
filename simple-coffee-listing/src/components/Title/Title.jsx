import './Title.css'
import vector from '../../images/vector.svg'
import ToggleMenu from '../ToggleMenu/ToggleMenu.jsx'

const Title = () => {
  return (
    <div id='title'>
      <h3>Our Collection</h3>
      <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      <img src={vector}   />
      <ToggleMenu />
    </div>
  )
}

export default Title