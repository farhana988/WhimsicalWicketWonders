
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Player from '../Player/Player'

function Players() {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('cricket.json')
        .then(res=>res.json())
        .then(data=> setPlayers(data))
    }
    )
    const [available, setAvailable] = useState(true);

    const togglePlayers = () => {
        setAvailable(on => !on);
    };
  return (
    <div className='container mx-auto '>
        {/* tile and button */}
       <div  className="flex justify-between items-center mb-4">
            <h2>
            {available ? 'Available Players' : 'Selected Players'}
            </h2>

            <div className='rounded-2xl border-2 border-red-700 text-lg text-[#13131399]'>
            <button 
                        className={`rounded-s-2xl p-4 ${available ? 'bg-[#E7FE29] font-bold text-black' : ''}`}
                        onClick={togglePlayers}
                    >
                        Available
                    </button>
                    <button 
                        className={`rounded-e-2xl p-4 ${!available ? 'bg-[#E7FE29] font-bold text-black' : ''}`}
                        onClick={togglePlayers}
                    >
                        Selected
                    </button>
            </div>
       </div>

       {/* show all player cart */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    players
                        .filter(player => available || player.isSelected) 
                        .map(player => 
                            <Player key={player.playerId} player={player} />
                        )
                }
       </div>
    </div>
  )
}

Players.propTypes = {
    Players: PropTypes.func
}

export default Players
