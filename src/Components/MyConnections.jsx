import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";

export default function Connections() {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const currentUserMongoId = user?._id || "67410d4e9a4b3ab81a9e4a3c"; // use logged-in user's ID

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const res = await fetch(`http://localhost:5000/partners`);
        const data = await res.json();

        const partnersArray = Array.isArray(data) ? data : [];
        const filteredPartners = partnersArray.filter(
          partner => partner.partnerCount > 0
        );

        setPartners(filteredPartners);
      } catch (err) {
        console.error(err);
      }
    };

    fetchConnections();
  }, []);

  const handleSendRequest = async (partner) => {
    if (partner.requests?.includes(currentUserMongoId)) {
      alert("❌ You have already sent a request to this partner!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/partners/${partner._id}/request`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserMongoId }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to send request");
        return;
      }

      // update partnerCount and requests locally
      setPartners((prev) =>
        prev.map((p) =>
          p._id === partner._id
            ? { ...p, partnerCount: p.partnerCount + 1, requests: [...(p.requests || []), currentUserMongoId] }
            : p
        )
      );

      alert("✅ Request sent successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Error sending request");
    }
  };

  const handleDelete = async (partnerId) => {
    if (!window.confirm("Are you sure you want to delete this partner?")) return;

    try {
      await fetch(
        `http://localhost:5000/partners/${currentUserMongoId}/remove-connection`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ partnerId }),
        }
      );

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
              <th className="p-3 text-left">Partner Count</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((p) => (
              <tr
                key={p._id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
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
                <td className="p-3">{p.partnerCount}</td>
                <td className="p-3 space-x-2">
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
                  <button
                    onClick={() => handleSendRequest(p)}
                    disabled={p.requests?.includes(currentUserMongoId)}
                    className={`px-3 py-1 rounded-lg text-white ${
                      p.requests?.includes(currentUserMongoId)
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {p.requests?.includes(currentUserMongoId) ? "Request Sent" : "Send Request"}
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
