import bgImage from '../../assets/images/bgShadow.png'
import logoFooter from '../../assets/images/logo-footer.png'

export default function Footer() {
  return (
    <section className='bg-[#06091A] pb-4 mt-72 relative pt-60'>
        {/* Newsletter */}
        <div className='container mx-auto'>
            <div 
                style={{backgroundImage: `url(${bgImage})`}} 
                className='bg-cover h-80 w-10/12 rounded-2xl bg-[#faf7f7]  absolute 
                left-32 bottom-[700px] outline-offset-[20px] outline  outline-white
                items-center text-center flex justify-center'>
                <div className='space-y-3'>
                    <h2 className='font-bold text-3xl text-[#131313]'>
                        Subscribe to our Newsletter
                    </h2>
                    <p className='text-[#131313B3]'>
                        Get the latest updates and news right in your inbox!
                    </p>
                    <form className="w-[550px] space-x-4"> 
                        <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-8/12 p-4 rounded-xl border-2" />
                        <button className="rounded-xl p-4 text-black font-bold text-xl
                        bg-gradient-to-r from-purple-400 via-orange-300 to-yellow-200">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            {/* logo image */}
            <div className='flex flex-col justify-center items-center'>
                <img src={logoFooter}  alt="" />
            </div>
            {/* footer */}
            <div className="flex justify-between text-[#FFFFFF] my-16">
                {/* left */}
                <div className='space-y-3'>
                    <h2  className='font-semibold text-xl'>
                        About Us
                    </h2>
                    <p className='text-[#FFFFFF99]'>
                        We are a passionate team dedicated to <br/>
                        providing the best services to our 
                        customers.
                    </p>
                </div>
                {/* middle */}
                <div  className='space-y-3'>
                    <h3  className='font-semibold text-xl'>Quick Links</h3>
                    <div className='text-[#FFFFFF99] space-y-3'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </div>
                </div>
                {/* right */}
                <div className='space-y-3'>
                    <h2 className='font-semibold text-xl'>Subscribe</h2>
                    <p className='text-[#FFFFFF99]'>
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <form className="w-[450px] space-x-4"> 
                        <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-8/12 p-4 rounded-xl border-2" />
                        <button className="rounded-xl p-4 text-black font-bold text-lg
                        bg-gradient-to-r from-purple-400 via-orange-300 to-yellow-200">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>           
        </div>
        <div className='flex flex-col justify-center items-center mb-16'>
            <hr className=' text-[#FFFFFF99] border-dotted mb-8 w-full' /> 
            <p className='text-[#FFFFFF99] text-center mt-7'>
                @2024 Whimsical Wicket Wonders All Rights Reserved.
            </p>
        </div>

    </section>
  )
}
