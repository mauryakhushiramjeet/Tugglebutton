import React from 'react'
import Office from "./../Axxets/office.png"
import machine from"../Axxets/machine.png"
const OfficeInfo = () => {
    return (
        <div className='bg-[#FEE3D9]'>
            <div className='grid grid-flow-col '>
                <div className='1 ml-10 mt-10  bg-white  rounded-l-lg mb-10 '>
                   <div className='px-28'>
                   <h1 className='text-center mt-10 text-2xl mb-2 ' >Virtual office</h1>
                    <img src={Office} alt="" srcset="" />
                    <div className=' '>
                        <p className='text-center font-medium text-[50px] font-serif'>At your fingertips, <br />anytime, anywhere.</p>
                        <p className=' text-center text-[23px] font-serif '>
                        Wherever the road takes you, we’re right by your<br/> side. Think of us as retirement GPS without the<br/> annoying robot voice.
                        </p>
                       <div className='mb-20'>
                       <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex m-auto  '>Visit The Office  </button>

                       </div>
                    </div>
                   </div>
                </div>
                <div className='2 mr-10  mt-10  bg-white   border border-l-black  mb-10  rounded-r-lg'>
                   <div className='px-28'>
                   <h1 className='text-center mt-10 text-2xl mb-1 ' >Our Mission</h1>
                    <img src={machine} alt="" srcset="" />
                    <div className=''>
                        <p className='text-center font-medium text-[50px] font-serif'>Here to help you <br />make sense of it all</p>
                        <p className=' text-center text-[20px] font-serif '>Don’t just retire. Retire with a purpose. Our Mission <br/>is to make your retirement better, plain and simple
                        <br/> We’re real people with families and goals, just like <br/>you. So we understand how personal retirement is. <br/>We’ll be with you every step of the way, making sure <br/>you’re always on the right path
                        </p>
                       <div className='mb-20'>
                       <button className='bg-[#63CFBF] mt-4 py-2  px-4 rounded-full border border-black flex m-auto  '>Meet the team  </button>

                       </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default OfficeInfo
