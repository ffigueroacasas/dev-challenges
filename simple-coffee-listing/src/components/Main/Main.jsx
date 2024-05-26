import './Main.css'
import { useEffect, useState } from 'react'
import Title from '../Title/Title.jsx'
import MenuItem from '../MenuItem/MenuItem.jsx'
import { getAllProducts } from '../../services/productService.js'
import { useSelector } from 'react-redux'

const Main = () => {
  const [menuItems, setMenuItems] = useState([])
  const [shownItems, setShownItems] = useState([])
  const [loading, setLoading] = useState(false)
  const showAvailableOnly = useSelector(state => state)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const fetchedData = await getAllProducts();
        setMenuItems(fetchedData)
        setShownItems(menuItems)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getData()
  }, [])

  useEffect(() => {
    if (showAvailableOnly){
      setShownItems(menuItems.filter(item => item.available))
    }
    else if (!showAvailableOnly){
      setShownItems(menuItems)
    }
  }, [showAvailableOnly, menuItems])
  
  if (loading){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div id='main'>
      <Title />
      <div id='menu-items-container'>
        {shownItems.map(item => 
        <MenuItem item={item} key={item.id}/>)}
      </div>
    </div>
  )
}

export default Main