import img from '../assets/element5-digital-OyCl7Y4y0Bk-unsplash.jpg'
import { useLoaderData } from 'react-router';

const UpdateProfile = () => {
    const data = useLoaderData()
    const User = data?.result;
    console.log(User)
    const handleUpdate = (e) => {
        e.preventDefault()
        const formData = {
    name: e.target.name.value,
    experience: e.target.experience.value,
    imageUrl: e.target.imageUrl.value,
    subject: e.target.subject.value,
    studyMode: e.target.studyMode.value,
    availabilityTime: e.target.availabilityTime.value,
    location: e.target.location.value,
    
     rating: Number(e.target.rating.value) || 0,
    email: User.email
};

const userId = User._id.toString()
      fetch(`http://localhost:5000/partners/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
})
.then(res => res.json())
.then(updatedUser => {
    console.log("Updated:", updatedUser);
    alert("Profile updated successfully!");
})
.catch(err => console.log(err));

    }


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4  " style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>

            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-10 mb-5">Update <span className="text-blue-500">Your Profile</span></h2>
                <form onSubmit={handleUpdate}

                    className=" rounded-2xl shadow-2xl p-8 w-full max-w-3xl  bg-white/75 "
                >


                    {/* Basic Info */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Basic Info
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                defaultValue={User.name}
                                required
                                placeholder=" Enter name"


                                className="border border-blue-600   rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input
                                type="text"
                                name="experience"
                                defaultValue={User.experience}
                                required
                                placeholder="Experience Level"


                                className="border border-blue-600   rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <input
                            type="text"
                            name="imageUrl"
                            defaultValue={User.profileimage}
                            required
                            placeholder="Profile image"

                            className="border border-blue-600   rounded-2xl px-4 py-2 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>


                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Study Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <input

                                type="text"
                                name="subject"
                                defaultValue={User.subject}
                                required
                                placeholder="Subject"

                                className="border border-blue-600   rounded-2xl px-4 py-2  focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input
                                type="text"
                                name="studyMode"
                                defaultValue={User.studyMode}
                                required
                                placeholder=" Study mode"

                                className="border border-blue-600   rounded-2xl  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input
                                type="text"
                                name="availabilityTime"
                                defaultValue={User.availabilityTime}
                                required
                                placeholder="Availability time"

                                className="border border-blue-600  rounded-2xl l  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <input
                            type="text"
                            name="email"
                            defaultValue={User.email}
                            required
                            placeholder="Email"

                            className="border border-blue-600   rounded-2xl px-4 py-2 my-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input

                                type="text"
                                name="location"
                                defaultValue={User.location}
                                required
                                placeholder="Location"

                                className="border border-blue-600   rounded-2xl px-4 py-2  focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input
                                type="text"
                                name="rating"
                                defaultValue={User.rating}
                                required
                                placeholder="Rating"

                                className="border border-blue-600   rounded-2xl  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                           
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-yellow-500 text-white font-bold py-3 rounded-2xl transition-all"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;