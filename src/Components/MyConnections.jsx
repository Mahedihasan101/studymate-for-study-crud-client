import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router";
import img from '../assets/joyful-TqnN_11wKas-unsplash.jpg'

const MyConnections = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Check user & fetch data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchProfiles(currentUser.email);
      } else {
        setUser(null);
        setProfiles([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Fetch profiles from server
  const fetchProfiles = (email) => {
    fetch(`http://localhost:3000/my-users?email=${email}`)
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error("Fetch failed:", err))
      .finally(() => setLoading(false));
  };

  // 🔹 Delete profile
  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this profile?")) return;

    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Profile deleted successfully 🗑️");
        setProfiles((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Delete failed:", err));
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br  from-blue-100 to-purple-100 py-10 px-6 mt-15"style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 drop-shadow">
        My Connections
      </h2>

      {loading ? (
        <p className="text-center mt-16 text-gray-600 text-lg">Loading...</p>
      ) : profiles.length === 0 ? (
        <p className="text-center  text-gray-600 text-lg ">
          You haven’t added any partner profiles yet.
        </p>
      ) : (
        <div className=" max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile._id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              {profile.profileimage && (
                <img
                  src={profile.profileimage}
                  alt={profile.name || "Profile"}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-5 space-y-2">
                {profile.name && (
                  <h3 className="text-2xl font-bold text-gray-800">
                    {profile.name}
                  </h3>
                )}
                {profile.subject && (
                  <p className="text-gray-600 text-lg">{profile.subject}</p>
                )}

                <div className="text-sm text-gray-500 space-y-1">
                  {profile.studyMode && (
                    <p>
                      <span className="font-semibold">Study Mode:</span>{" "}
                      {profile.studyMode}
                    </p>
                  )}
                  {profile.availabilityTime && (
                    <p>
                      <span className="font-semibold">Availability:</span>{" "}
                      {profile.availabilityTime}
                    </p>
                  )}
                  {profile.location && (
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      {profile.location}
                    </p>
                  )}
                  {profile.experienceLevel && (
                    <p>
                      <span className="font-semibold">Experience:</span>{" "}
                      {profile.experienceLevel}
                    </p>
                  )}
                  {profile.rating && (
                    <p>
                      <span className="font-semibold">Rating:</span>{" "}
                      {profile.rating}
                    </p>
                  )}
                </div>

                {/* 🔹 Buttons */}
                <div className="flex justify-between pt-4">
                  <Link to={`/update-profile/${profile._id}`}>
                   <button
                    className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm cursor-not-allowed"
                    title="Update feature coming soon"
                  >
                    Update
                  </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(profile._id)}
                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyConnections;
