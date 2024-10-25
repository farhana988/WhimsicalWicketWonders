
import PropTypes from 'prop-types'
// import { FaBookmark } from 'react-icons/fa';

const Player=({player, handleAddToSelected})=> {
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
        <div className='flex justify-between'>
            <h1>Batting Type:</h1>
            <h2>{battingType}</h2>
        </div>
        {/* price and button */}
        <div className='flex justify-between'>
            <h1>Price: ${biddingPrice}</h1>
            <button
            onClick={ ()=>handleAddToSelected(player)}
            >Choose Player</button>
        </div>
    </div>
  )
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddToSelected: PropTypes.func
}

export default Player
