import React from 'react';
import homeimg from '../../assets/photo-1522202176988-66273c2fd55f.avif'
import StudyFeatures from '../../Components/StudyFeature';
import TopPartners from '../../Components/TopPartners';
import HowItWorks from '../../Components/HowItWorks';
import Testimonials from '../../Components/Testimonials';
import Slider from 'react-slick';
import Footer from '../../Components/Footer';


  

const Home = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

 
    


        return (
            <div className='bg-cover h-[800px] relative' style={{ backgroundImage: `url(${homeimg})` }}>
                <Slider {...settings}>
                    <div  >
                    <div className='absolute top-0 left-0 min-w-full min-h-[800px] '></div>
                    <div className='flex flex-col pt-65 '>
                        <h1 className="text-3xl md:text-7xl font-bold text-center text-white">Find Your Perfect Study <br /> Partner</h1>
                        <p className="text-center mt-3 text-lg text-[#f6fcff]">Study smarter together, learn faster, succeed easier.</p>

                    </div>


                </div>
                <div className='bg-cover h-[800px] relative' >
                    <div className='absolute top-0 left-0 min-w-full min-h-[800px] '></div>
                    <div className='flex flex-col pt-65 '>
                        <h1 className="text-3xl md:text-7xl font-bold text-center text-white">Collaborate, Learn & Grow</h1>
                        <p className="text-center mt-3 text-lg text-[#f6fcff]">Connect with motivated learners and achieve more together.</p>

                    </div>


                </div>
                <div className='bg-cover h-[800px] relative' >
                    <div className=' absolute top-0 left-0 min-w-full min-h-[800px] '></div>
                    <div className='flex flex-col pt-65 '>
                        <h1 className="text-3xl md:text-7xl font-bold text-center text-white">Boost Your Learning Journey</h1>
                        <p className="text-center mt-3 text-lg text-[#f6fcff]">Team up with peers, share knowledge, and grow faster.</p>

                    </div>


                </div>
                </Slider>
                <StudyFeatures></StudyFeatures>
                <TopPartners></TopPartners>
                <HowItWorks></HowItWorks>
                <Testimonials></Testimonials>
                <Footer></Footer>
            </div>

        );
    };

    export default Home;