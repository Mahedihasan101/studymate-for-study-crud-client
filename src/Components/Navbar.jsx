import React from 'react';


const Navbar = () => {
    return (
        <div className='bg-white '>
           <div className='flex justify-between text-center items-center max-w-[1320px] mx-auto p-5'>
            
              
              <div className='flex flex-col gap-0'>
                  <h1 className='font-[roboto] font-black text-[27px]'>Study<span className='text-blue-500'>Mate.</span></h1>
             
              </div>
           
            <div>
                <ul className='flex gap-4 text-center font-bold font-[roboto] text-[15px]'>
                    <li>Home</li>
                    <li>Find Partners</li>
                    <li>Create Partner Profile</li>
                    <li>My Connections</li>

                </ul>
            </div>
            <div>
                <button className='btn btn-primary bg-blue-500 px-7'>Login</button>
            </div>
           </div>
        </div>
    );
};

export default Navbar;