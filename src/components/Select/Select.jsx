
import PropTypes from 'prop-types'
import { RiDeleteBin5Line } from "react-icons/ri";

function Select({select, handleRemove}) {
    const {image, name, battingType ,biddingPrice}=select
  return (
   
        <div className="flex p-3 pr-10 rounded-2xl items-center border-2 border-dotted
        justify-between container mx-auto my-8">
            <div className='flex gap-5 items-center'>
                <img 
                className='w-32 h-28 rounded-2xl
                  '
                src={image} alt={name} />
                <div className='space-y-2'>
                    <h2 className='font-bold text-2xl'>{name}</h2>
                    <p className='text-[#13131399] text-base'>Role: {battingType}</p>
                    <p className='text-[#13131399] text-base'>Price: ${biddingPrice}</p>
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
