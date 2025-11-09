import React from 'react';
import { Link } from 'react-router';


const Navbar = () => {
    return (
        <div className='bg-white '>
           <div className='flex justify-between text-center items-center max-w-[1320px] mx-auto p-5'>
            
              
              <div className='flex flex-col gap-0'>
                  <h1 className='font-[roboto] font-black text-[27px]'>Study<span className='text-blue-500'>Mate.</span></h1>
             
              </div>
           
            <div>
                <ul className='flex gap-6 text-center font-medium font-[] text-[15px]'>
                   <Link to='/'><li>Home</li></Link>
                    <li>Find Partners</li>
                    <li>Create Partner Profile</li>
                    <li>My Connections</li>

                </ul>
            </div>
            <div>
               <Link to='/login'> <button className='btn btn-primary bg-blue-500 px-7'>Login</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Navbar;