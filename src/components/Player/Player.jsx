
import PropTypes from 'prop-types'
// import { FaBookmark } from 'react-icons/fa';

const Player=({player})=> {
    const {image,name,country,role,battingType,biddingPrice}=player
  return (
    <div className='border-2 border-red-700 gap-6'>
        {/* player image */}
        <img src={image} alt={`${name}`} />
        {/* logo and name */}
        <div className='flex'>
            <i></i>
            <p>Player: {name}</p>
        </div>
        {/* country and role */}
        <div className='flex justify-between'>
            <div className='flex'>
                <i></i>
                <p>{country}</p>
            </div>
            <p>{role}</p>
        </div>

        {/* batting type */}
        <p>Rating</p>
        <div>
            <h1>Batting Type:</h1>
            <h2>{battingType}</h2>
        </div>
        {/* price and button */}
        <div>
            <h1>Price: ${biddingPrice}</h1>
            <button>Choose Player</button>
        </div>
    </div>
  )
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player
