
import PropTypes from 'prop-types'
import { RiDeleteBin5Line } from "react-icons/ri";

function Select({select, handleRemove}) {
    const {image, name, battingType}=select
  return (
   
        <div className="flex p-8 rounded-2xl items-center border-2 border-dotted
        justify-between container mx-auto my-8">
            <div className='flex gap-5 items-center'>
                <img 
                className='w-20 rounded-2xl
                  '
                src={image} alt={name} />
                <div className='space-y-2'>
                    <h2 className='font-bold text-2xl'>{name}</h2>
                    <p className='text-[#13131399] text-base'>{battingType}</p>
                </div>
            </div>
            {/* delete button */}
                <RiDeleteBin5Line 
                 onClick={handleRemove} 
                   
                style={{ fontSize: '34px' , color: 'red'}}></RiDeleteBin5Line>
          
    
        </div>
        
    
  )
}

Select.propTypes = {
    select: PropTypes.object,
    handleRemove: PropTypes.func.isRequired, 
}

export default Select
