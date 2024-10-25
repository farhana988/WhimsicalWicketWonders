
// import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Player from '../Player/Player'
import Selects from '../selects/Selects'

function Players() {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('cricket.json')
        .then(res=>res.json())
        .then(data=> setPlayers(data))
    }, []);
    
    const [available, setAvailable] = useState(true);

    const togglePlayers = () => {
        setAvailable(on => !on);
    };

    const [selected, setSelected] = useState([]);

    const handleAddToSelected = player => {
      
       if(selected.length<6){
        if (selected.filter(selectedPlayer => selectedPlayer.playerId === player.playerId).length===0)
        {
            const newSelected = [...selected, player];
        setSelected(newSelected);}
        else {
            alert('already selected'); 
        }
    
       }
       else {
        alert(' 6 players '); 
    }
      
  };


  return (
    <div className='container mx-auto '>
        {/* tile and button */}
       <div  className="flex justify-between items-center mb-4">
            <h2>
            {available ? 'Available Players' : `Selected Players ${selected.length}/6`}
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
                        Selected ({selected.length})
                    </button>
            </div>
       </div>
      
       {/* show all player cart */}
       {!available && <Selects selected={selected} />}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    players
                    .filter(player => available ? !player.isSelected : player.isSelected)
                        
                        .map(player => 
                            <Player 
                            key={player.playerId}
                            player={player}
                            handleAddToSelected={ handleAddToSelected}
                            
                            />
                        )
                }
       </div>
       
    </div>
  )
}

Players.propTypes = {
    
}

export default Players
