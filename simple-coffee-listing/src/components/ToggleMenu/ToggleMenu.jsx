import './ToggleMenu.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAvailableOnly } from '../../reducers/availableOnlyReducer.js'

const ToggleMenu = () => {
  const [available, setAvailable] = useState(false)
  const dispatch = useDispatch()
  const showAvailableOnly = useSelector(state => state)

  const toggleAvailability = () => {
    dispatch(toggleAvailableOnly())
  }

  return (
    <div id='toggle-menu'>
      <button className={!showAvailableOnly ? 'active toggle-btn' : 'toggle-btn'} onClick={toggleAvailability}>All Products</button>
      <button className={showAvailableOnly ? 'active toggle-btn' : 'toggle-btn'} onClick={toggleAvailability}>Available Now</button>
    </div>
  )
}

export default ToggleMenu