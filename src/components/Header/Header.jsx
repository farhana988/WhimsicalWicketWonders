import logo from '../../assets/images/logo.png'
import coin from '../../assets/images/coin.png'

export default function Header() {
  return (
    <div className='container mx-auto mt-8'>
        {/* navbar */}
        <nav className='flex justify-between items-center '>
            <img src={logo} alt="" />
            <div className='flex gap-5 font-semibold text-lg items-center text-[#131313B3]'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className=' p-3 px-5 border-2 border-[#1313131A] text-[#131313] rounded-xl flex gap-2 justify-center items-center'>
                    <span>0 Coin</span>
                    <img src={coin} alt="" />
                </button>
            </div>
        </nav>


    {/* banner */}

    <section>
        
    </section>

    </div>

    
  )
}
