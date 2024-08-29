import React from 'react'
import Logo from "../Axxets/Logo.png"
import footeLogo from "../Axxets/footerlogo.png"
const Footer = () => {
    return (
        <div className='grid grid-cols-4 m-3 border border-black h-[38rem]'>
            <div className='1 border border-black px-10'>1
                <div className=''>
                    <img src={Logo} alt="logo" />
                    <p className='font-serif text-[20px] mt-9'>Get directions on the<br />
                        road to retirement.</p>
                  <div className='mt-2'>
                  <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border  border-black flex text-left pr-[7rem]  '>My guide   </button>
                    <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex text-left pr-[9rem]  '>Log in  </button>
                    <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex text-left pr-[2.5rem]   '> Upload Files Securely  </button>
                    <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex text-left  pr-[3rem] '> Claw Machine game  </button>
                  </div>
                    {/* <div className='mt-5'>
                        <img src={footeLogo} />

                    </div> */}
                </div>
            </div>
            <div className='2 border border-black px-10 '>
                <h1 className=' mt-7 text-[20px]'>Services</h1>
                <div className='border border-black my-2'></div>
                <ul className='bordermt-5 outline-none text-[13px] '>
                    <li className='py-1'>Income Planning</li>
                    <li className='py-1'>Text Planning</li>
                    <li className='py-1'>Investment Planning</li>
                    <li className='py-1'>HeathCare/Logo Term Care Plannig</li>
                    <li className='py-1'>Legacy/Estate Plannig</li>
                </ul>
            </div>
            <div className='3 border border-black'>3</div>
            <div className='4 border border-black'>4</div>
        </div>
    )
}

export default Footer
