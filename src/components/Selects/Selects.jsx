
import PropTypes from 'prop-types'
import Select from '../Select/Select'

function Selects({selected}) {
  
  return (
    <div>
        
    {
       selected.map((select, idx) => <Select key={idx} select={select}></Select> )
    }
    </div>
  )
}

Selects.propTypes = {
    selected: PropTypes.array

}

export default Selects
