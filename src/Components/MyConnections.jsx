import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { Link } from "react-router";


const MyConnections = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-users?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setProfiles(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete?")) return;

    fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
      .then(() => {
        setProfiles(profiles.filter((item) => item._id !== id));
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 drop-shadow">
        My Added Partners
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <div
            key={profile._id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={profile.profileimage}
              alt={profile.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">{profile.name}</h3>
              <p className="text-gray-600">{profile.subject}</p>
              <p className="text-sm text-gray-500">Mode: {profile.studyMode}</p>
              <p className="text-sm text-gray-500">Experience: {profile.experienceLevel}</p>

              <div className="flex justify-between pt-4">
                <Link
                  to={`/users/${profile._id}`}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  View
                </Link>

                <Link
                  to={`/update/${profile._id}`}
                  className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white text-sm"
                >
                  Update
                </Link>

                <button
                  onClick={() => handleDelete(profile._id)}
                  className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {profiles.length === 0 && (
        <p className="text-center mt-16 text-gray-600 text-lg">
          You haven’t added any partner profiles yet.
        </p>
      )}
    </div>
  );
};

export default MyConnections;
