import img1 from '../assets/amitav-hira-9sb6SiDfa6c-unsplash.jpg'
import img2 from '../assets/praja-nugraha--GfxDbc1oNU-unsplash.jpg'
import img3 from '../assets/noman-khan-BKSfyreKoIg-unsplash.jpg'



const partners = [
  {
    name: "Aisha Rahman",
    subject: "Mathematics",
    rating: 4.9,
    img: img1
  },
  {
    name: "Hasan Ali",
    subject: "Physics",
    rating: 4.8,
   img: img3
  },
  {
    name: "Maria Khan",
    subject: "English Literature",
    rating: 5.0,
     img: img2
  }
];

const TopPartners = () => {
  return (
    <div className="py-20 bg-white max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">Top Study <span className='text-blue-500'>Partners</span></h2>

      <div className="grid md:grid-cols-3 gap-8">
        {partners.map((p, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <img src={p.img} className="w-28 h-28 mx-auto rounded-full border-3 border-blue-600 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-600">{p.subject}</p>
            <p className="text-yellow-500 mt-2 font-semibold">⭐ {p.rating}</p>

            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPartners;
