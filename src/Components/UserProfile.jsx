import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex justify-center items-center p-6">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 text-center">

        <img
          src={user?.photoURL || "https://via.placeholder.com/120"}
          alt="User Avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-xl"
        />

        <h2 className="mt-6 text-3xl font-bold text-white tracking-wide">
          {user?.displayName || "User Name"}
        </h2>

        <p className="text-gray-300 mt-1 text-sm">{user?.email}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="font-semibold text-white mb-2 text-lg">About</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A passionate learner exploring new opportunities and building meaningful study connections.
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h3 className="font-semibold text-white mb-2 text-lg">Profile Details</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><strong className="text-white">Location:</strong> Not Provided</li>
              <li><strong className="text-white">Study Field:</strong> Not Provided</li>
              <li><strong className="text-white">Joined:</strong> Recently</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
