
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Player from '../Player/Player'
import Selects from '../selects/Selects'

function Players({ balance , setBalance}){
   
    console.log(balance)
   
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
    const [reducedBal, setReduceBal] = useState(balance); 


    useEffect(() => {
        console.log("Initial Balance:", balance);
        setReduceBal(balance);
    }, [balance]);


    const handleAddToSelected = (player ) => {

       if(selected.length<6){
            const playerPrice = player.biddingPrice; 
            console.log("Current Balance:", reducedBal);
        console.log("Player Price:", playerPrice);
            if (reducedBal < playerPrice ) {
                alert("Insufficient balance");
                return;
            }
        if (selected.filter(selectedPlayer => selectedPlayer.playerId === player.playerId).length===0)
        {
            
            const newSelected = [...selected, player];
            setSelected(newSelected);

            const newBalance = reducedBal - playerPrice;
            setReduceBal(newBalance);
            setBalance(newBalance); 
            
        }
       
        else {
            alert('already selected'); 
        }
    
       }
       else {
        alert(' 6 players '); 
    }
  
   
  };
  const handleRemoveFromSelected = (playerId) => {
    const playerToRemove = selected.find(player => player.playerId === playerId);
    if (playerToRemove) {
        const newSelected = selected.filter(player => player.playerId !== playerId);
        setSelected(newSelected);

       
        const newBalance = reducedBal + playerToRemove.biddingPrice; 
        setReduceBal(newBalance); 
        setBalance(newBalance); 
    }
};

// ---------------------------------------------------------------------------------
const handleAvailableplayers = () => {
   
        {players
            .filter(player => available ? !player.isSelected : player.isSelected)
            .map(player => (
                <Player 
                    key={player.playerId}
                    player={player}
                   
                />
            ))}
    console.log('hh')
};
// --------------------------------------------------------


  return (
    <div className='container mx-auto '>
        {/* tile and button */}
       <div  className="flex justify-between items-center mb-4">
            <h2>
            {available ? 'Available Players' : `Selected Players ${selected.length}/6`}
            </h2>

            <div className='rounded-2xl border-2 border-red-700 text-xl text-[#13131399]'>
            <button 
                        className={`rounded-s-2xl p-6 ${available ? 'bg-[#E7FE29] font-bold text-black' : ''}`}
                        onClick={togglePlayers}
                    >
                        Available
                    </button>
                    <button 
                        className={`rounded-e-2xl p-6 ${!available ? 'bg-[#E7FE29] font-bold text-black' : ''}`}
                        onClick={togglePlayers}
                    >
                        Selected ({selected.length})
                    </button>
            </div>
       </div>
      
       {/* show all player cart */}
       {!available && <Selects selected={selected}  
                                handleRemoveFromSelected={handleRemoveFromSelected} 
                                handleAvailableplayers={handleAvailableplayers} 
                                />}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    players
                    .filter(player => available ? !player.isSelected : player.isSelected)
                        
                        .map(player => 
                            <Player 
                            key={player.playerId}
                            player={player}
                            handleAddToSelected={ handleAddToSelected}
                            balance={balance}
                            />
                        )

                }
       </div>
       
    </div>
  )
}

Players.propTypes = {
    balance: PropTypes.number.isRequired,
    setBalance: PropTypes.func.isRequired,
}

export default Players
