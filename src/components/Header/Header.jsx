import PropTypes from 'prop-types'
import logo from '../../assets/images/logo.png'
import coin from '../../assets/images/coin.png'
import bgImage from '../../assets/images/bgShadow.png'
import banner from '../../assets/images/banner-main.png'


export default function Header({balance,addCredit}) {
  
  return (
    <div className='container mx-auto my-8'>
        {/* navbar */}
        <nav className='flex justify-between items-center '>
            <img src={logo} alt="" />
            <div className='flex gap-5 font-semibold text-lg items-center text-[#131313B3]'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className=' p-3 px-5 border-2 border-[#1313131A] text-[#131313] rounded-xl flex gap-2 justify-center items-center'>
                    <span
                
                    >{balance} Coin</span>
                    <img src={coin} alt="" />
                </button>
            </div>
        </nav>


        {/* banner */}

        <section className='py-12 mt-6 bg-cover rounded-2xl bg-[#161515] ' 
            style={{backgroundImage: `url(${bgImage})`}}>
            <div className='flex flex-col items-center gap-5' 
            >
                <img src={banner} alt="" />
                <h1 className=' text-[#FFFFFF] font-extrabold text-4xl'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className='text-[#FFFFFFB3] font-medium text-2xl'>
                    Beyond Boundaries Beyond Limits
                </p>
                <div className='border-2 border-[#E7FE29] p-3 rounded-3xl'>
                <button
                  onClick={addCredit} 
                className='bg-[#E7FE29] text-[#131313] font-bold text-lg p-5 rounded-2xl' >
                    Claim Free Credit
                </button>
                </div>
            </div>
        </section>

    </div>

    
  )
}
Header.propTypes = {
    balance:PropTypes.number,
    addCredit:PropTypes.func
}