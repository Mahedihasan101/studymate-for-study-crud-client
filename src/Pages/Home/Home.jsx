import React from 'react';
import homeimg from '../../assets/photo-1522202176988-66273c2fd55f.avif'
import StudyFeatures from '../../Components/StudyFeature';
import TopPartners from '../../Components/TopPartners';
import HowItWorks from '../../Components/HowItWorks';
import Testimonials from '../../Components/Testimonials';

const Home = () => {
    return (
     <div>
           <div className='bg-cover h-[800px] relative' style={{ backgroundImage: `url(${homeimg})` }}>
            <div className='bg-blue-500/15 absolute top-0 left-0 min-w-full min-h-[800px] '></div>
            <div className='flex flex-col pt-65 '>
                 <h1 className="text-3xl md:text-7xl font-bold text-center text-white">Find Your Perfect Study <br /> Partner</h1>
              <p className="text-center mt-3 text-lg text-[#f6fcff]">Study smarter together, learn faster, succeed easier.</p>
           
            </div>
           
        
        </div>
         <StudyFeatures></StudyFeatures>
         <TopPartners></TopPartners>
         <HowItWorks></HowItWorks>
         <Testimonials></Testimonials>
     </div>
        
    );
};

export default Home;