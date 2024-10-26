
import PropTypes from 'prop-types'
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
// import {   ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



    const Player=({player, handleAddToSelected  })=> {
    
    const {image,name,country,role,battingType,biddingPrice}=player

  return (
    <div className='border-2 gap-6 p-4 space-y-3 font-medium rounded-2xl'>
        {/* player image */}
        <img
        className='h-64 w-full rounded-xl border-2  '
        src={image} alt={`${name}`} />
        {/* logo and name */}
        <div className='flex items-center gap-3'>
            <IoPersonCircleSharp
            style={{ fontSize: '34px'}}
            ></IoPersonCircleSharp>
            <p className='font-semibold text-2xl text-[#131313]'> {name}</p>
        </div>
        {/* country and role */}
        <div className='flex justify-between px-2'>
            <div className='flex items-center gap-5'>
                
                <FaFlag 
                style={{ fontSize: '20px'}}
                ></FaFlag>
                
                <p>{country}</p>
            </div>
            <p>{role}</p>
        </div>

        {/* batting type */}
        <p className='px-2'>Rating</p>
        <div className='flex justify-between px-2'>
            <h1>Batting Type:</h1>
            <h2>{battingType}</h2>
        </div>
        {/* price and button */}
        <div className='flex justify-between items-center px-2'>
            <h1>Price: ${biddingPrice}</h1>
                
            <div
            className='p-3 px-6 rounded-xl bg-[#E7FE29] font-bold '
            onClick={ ()=>handleAddToSelected(player)}
          
            
            >Choose Player</div>
           
            
        </div>
    </div>
  )
}

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddToSelected: PropTypes.func,
    // balance:PropTypes.number
}

export default Player
