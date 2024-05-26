import './MenuItem.css'
import starFill from '../../images/Star_fill.svg'
import starEmpty from '../../images/Star.svg'

const MenuItem = ({ item, key}) => {
  return (
    <div key={key} className='menu-item'>
      <div className='image-container'>
        <div className='popular' style={{display: !item.popular ? 'none' : ''}}>Popular</div>
        <img src={item.image} />
      </div>
      <div className='middle-container'>
        <p className='name'>{item.name}</p>
        <p className='price'>{item.price}</p>
      </div>
      {item.rating ?
        <div className='bottom-container'><img src={starFill} />
          <p>{item.rating}</p><p className='gray'>{` (${item.votes} Votes)`}</p>
          <p style={(item.available ? {display: 'none'} : {})} className='sold-out'>Sold out</p>
        </div>
        :<div className='bottom-container'>
          <img src={starEmpty} /><p className='gray'>  No ratings</p> 
         </div>}
    </div>
  )
}

export default MenuItem