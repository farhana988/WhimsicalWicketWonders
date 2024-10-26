
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Player from '../Player/Player'
import Selects from '../selects/Selects'
import { Flip, toast } from 'react-toastify'


function Players({ balance , setBalance}){
   
    console.log(balance)
   
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('cricket.json')
        .then(res=>res.json())
        .then(data=> setPlayers(data))
    }, []);
    
    const [available, setAvailable] = useState(true);

    

    const [selected, setSelected] = useState([]);
    const [reducedBal, setReduceBal] = useState(balance); 


    useEffect(() => {
        console.log("Initial Balance:", balance);
        setReduceBal(balance);
    }, [balance]);


    const handleAddToSelected = (player ) => {

       if(selected.length<6){
        
            const playerPrice = player.biddingPrice; 
            // console.log("Current Balance:", reducedBal);
            //  console.log("Player Price:", playerPrice);
            if (reducedBal < playerPrice ) {
                // alert("");
                toast.warn('Insufficient balance!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                    });
                return;
            }
            else if (selected.filter(selectedPlayer => selectedPlayer.playerId === player.playerId).length===0)
            {
                toast.success('successfully selected', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                    });
                const newSelected = [...selected, player];
                setSelected(newSelected);

                const newBalance = reducedBal - playerPrice;
                setReduceBal(newBalance);
                setBalance(newBalance); 
                
            }
       
            else {
                // alert(''); 
                toast.warn('already selected', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip,
                    });
            
            }
    
       }
       else {
        // alert(' '); 
        toast.warn('players limit reached!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
        }
  
   
    };
  const handleRemoveFromSelected = (playerId) => {
    const playerToRemove = selected.find(player => player.playerId === playerId);
    if (playerToRemove) {
        toast.success('successfully removed', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
        const newSelected = selected.filter(player => player.playerId !== playerId);
        setSelected(newSelected);

       
        const newBalance = reducedBal + playerToRemove.biddingPrice; 
        setReduceBal(newBalance); 
        setBalance(newBalance); 
    }
};

// ---------------------------------------------------------------------------------
const handleAvailableplayers = () => {
   
       setAvailable(true)
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

            <div className='rounded-2xl text-xl text-[#13131399] outline-offset-8 outline
              outline-[#86867f88]'>
            <button 
                        className={`rounded-s-2xl py-4 px-6 ${available ? 'bg-[#E7FE29] font-bold text-black' : ''}`}
                        onClick={() => { setAvailable(true); }}
                    >
                        Available
                    </button>
                    <button 
                        className={`rounded-e-2xl py-4 px-6 ${!available ? 'bg-[#E7FE29] font-bold text-black' : ''}`}
                        onClick={() => { setAvailable(false); }}
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
