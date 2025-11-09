import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgimg from '../assets/istockphoto-1656546465-1024x1024.jpg'
import img from '../assets/praja-nugraha--GfxDbc1oNU-unsplash.jpg'

import Slider from "react-slick";


const reviews = [
  { 
    name: "John Larson", 
    title: "Entrepreneur", 
    comment: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor...", 
    img: img 
  },
  { 
    name: "Rafid", 
    title: "Student", 
    comment: "StudyMate helped me stay motivated and complete my exam prep on time.", 
    img:img
  },
  { 
    name: "Nishat", 
    title: "Student", 
    comment: "Found a perfect partner to study English. Learning is now fun!", 
    img: img
  }
];

const Testimonials = () => {
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
    <div className="relative py-32 bg-black/50 bg-center bg-cover" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className='bg-gray-500/30 absolute top-0 left-0 min-w-full min-h-[800px] '></div>
      <div className="max-w-3xl mx-auto text-center text-white px-4">
        <Slider {...settings}>
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <img src={r.img} alt={r.name} className="w-24 h-24 rounded-full border-2  border-white object-cover mx-auto"/>
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <p className="text-sm text-gray-300">{r.title}</p>
              <p className="italic mt-2">“{r.comment}”</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
