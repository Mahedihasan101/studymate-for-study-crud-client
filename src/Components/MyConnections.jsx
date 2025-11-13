import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Connections() {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/${id}/request`);
        const data = await res.json();
        setPartners(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchConnections();
  }, []);

  const handleDelete = async (partnerId) => {
    if (!window.confirm("Are you sure you want to delete this partner?")) return;

    try {
      await fetch(`http://localhost:5000/users/${id}/remove-connection`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partnerId })
      });

      setPartners((prev) => prev.filter((p) => p._id !== partnerId));
    } catch (err) {
      console.error(err);
      alert("Failed to remove connection");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-5">My Connections</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Profile</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Study Mode</th>
              <th className="p-3 text-left">Availability</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Experience</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Partner Count</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50 transition duration-200">
                <td className="p-3">
                  <img
                    src={p.profileimage}
                    alt={p.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                  />
                </td>
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3">{p.subject}</td>
                <td className="p-3">{p.studyMode}</td>
                <td className="p-3">{p.availabilityTime}</td>
                <td className="p-3">{p.location}</td>
                <td className="p-3">{p.experienceLevel}</td>
                <td className="p-3">{p.rating} ⭐</td>
                <td className="p-3">{p.partnerCount}</td>
                <td className="p-3">{p.email}</td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => navigate(`/partners-details/${p._id}`)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/partners-update/${p._id}`)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
