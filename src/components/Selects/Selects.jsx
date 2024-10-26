
import PropTypes from 'prop-types'
import Select from '../Select/Select'

function Selects({selected, handleRemoveFromSelected, handleAvailableplayers }) {
  
  return (
    <div>
        
    {
       selected.map((select, idx) => 
       <Select 
       key={idx} 
       select={select}
       handleRemove={() => handleRemoveFromSelected(select.playerId)}
       ></Select> )
    }
    <button
    onClick={handleAvailableplayers}
     className=' mt-14 py-4 px-6 rounded-xl bg-[#E7FE29] font-bold text-xl 
        outline-offset-8 outline  outline-[#86867f88]'>
            Add More Player
        </button>
    </div>
  )
}

Selects.propTypes = {
    selected: PropTypes.array,
    handleRemoveFromSelected: PropTypes.func,
    handleAvailableplayers: PropTypes.func
}

export default Selects
