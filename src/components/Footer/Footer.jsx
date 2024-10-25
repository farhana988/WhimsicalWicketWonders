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
                left-32 bottom-[620px] outline-offset-[20px] outline  outline-white
                items-center text-center flex justify-center'>
                <div>
                    <h2>Subscribe to our Newsletter</h2>
                    <p className='text-[#131313B3]'>
                        Get the latest updates and news right in your inbox!
                    </p>
                    <form>                        
                        <fieldset className="form-control w-80">      
                            <div className="join">
                                <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
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
                <div>
                    <h2>
                        About Us
                    </h2>
                    <p className='text-[#FFFFFF99]'>
                        We are a passionate team dedicated to <br/>
                        providing the best services to our 
                        customers.
                    </p>
                </div>
                {/* middle */}
                <div>
                    <h3>Quick Links</h3>
                    <div className='text-[#FFFFFF99]'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </div>
                </div>
                {/* right */}
                <div>
                    <h2>Subscribe</h2>
                    <p className='text-[#FFFFFF99]'>
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <form>
                        
                        <fieldset className="form-control w-80">      
                            <div className="join">
                                <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">
                                    Subscribe
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>           
        </div>
        <div className='flex flex-col justify-center items-center mb-16'>
            <hr className=' text-[#FFFFFF99] border-dotted mb-4 w-full' /> 
            <p className='text-[#FFFFFF99] text-center'>
                @2024 Your Company All Rights Reserved.
            </p>
        </div>

    </section>
  )
}
