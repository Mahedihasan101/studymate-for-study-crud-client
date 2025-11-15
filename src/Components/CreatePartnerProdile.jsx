import { use, useState } from 'react';
import img from '../assets/bgimg.jpg'
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const CreatePartnerProfile = () => {
  const { user } = use(AuthContext);

  const [imagePreview, setImagePreview] = useState(''); // State for preview

  const handleImageChange = (e) => {
    setImagePreview(e.target.value); // Update preview as user types URL
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: e.target.name.value,
      experience: e.target.experience.value,
      imageUrl: e.target.imageUrl.value,
      subject: e.target.subject.value,
      studyMode: e.target.studyMode.value,
      availabilityTime: e.target.availabilityTime.value,
      location: e.target.location.value,
      partnerCount: 0,
      rating: 0,
      email: user.email
    }

    fetch('http://localhost:5000/partners', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-10 mb-5">
          Create <span className="text-blue-500">Partner Profile</span>
        </h2>
        <form onSubmit={handleSubmit}
          className="rounded-2xl shadow-2xl p-8 w-full max-w-3xl bg-[#e7e2de]"
        >

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-4 flex justify-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
              />
            </div>
          )}

          {/* Basic Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Basic Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="border border-blue-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black"
              />
              <input
                type="text"
                name="experience"
                required
                placeholder="Experience Level"
                className="border border-blue-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black"
              />
            </div>
            <input
              type="text"
              name="imageUrl"
              placeholder="Profile image URL"
              onChange={handleImageChange} // Update preview
              className="border border-blue-600 rounded-2xl px-4 py-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black"
            />
          </div>

          {/* Study Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Study Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input type="text" name="subject" required placeholder="Subject"
                className="border border-blue-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black" />
              <input type="text" name="studyMode" required placeholder="Study mode"
                className="border border-blue-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black" />
              <input type="text" name="availabilityTime" required placeholder="Availability time"
                className="border border-blue-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black" />
            </div>
            <input type="text" name="email" defaultValue={user?.email} required placeholder="Email"
              className="border border-blue-600 rounded-2xl px-4 py-2 my-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" name="location" required placeholder="Location"
                className="border border-blue-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black" />
              <input type="text" name="rating" required placeholder="Rating"
                className="border border-blue-600 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-black" />
            </div>
          </div>

          <button type="submit"
            className="w-full bg-blue-500 hover:bg-yellow-500 text-white font-bold py-3 rounded-2xl transition-all">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePartnerProfile;
