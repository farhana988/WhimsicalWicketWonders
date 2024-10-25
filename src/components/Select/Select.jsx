
import PropTypes from 'prop-types'

function Select({select}) {
    const {image, name, battingType}=select
  return (
    <div className="flex p-9 items-center border-2 border-red-600 justify-between container mx-auto">
        <div className='flex gap-5 items-center'>
            <img src={image} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{battingType}</p>
            </div>
        </div>
        <button>delete</button>
    
    </div>
  )
}

Select.propTypes = {
    select: PropTypes.object
}

export default Select
