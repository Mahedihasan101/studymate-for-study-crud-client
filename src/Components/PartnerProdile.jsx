import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PartnerProfile = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  // 🔹 Replace with logged-in user _id or keep test value
  const currentUserMongoId = "67410d4e9a4b3ab81a9e4a3c"; 

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users/${id}`);
        const data = await res.json();
        setPartner(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartner();
  }, [id]);

  const handleSendRequest = async () => {
    try {
      setSending(true);
      const response = await fetch(`http://localhost:5000/users/${id}/request`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserMongoId }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to send request");
        return;
      }

      setPartner(data);
      alert("✅ Partner request sent successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Error sending request.");
    } finally {
      setSending(false);
    }
  };

  if (loading)
    return <p className="text-center text-lg text-gray-500 mt-10">Loading profile...</p>;
  if (!partner)
    return <p className="text-center text-lg text-red-500 mt-10">Profile not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white shadow-lg p-8 rounded-2xl flex flex-col md:flex-row gap-6">
        <img
          src={partner.profileimage}
          alt={partner.name}
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
        />
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold">{partner.name}</h1>
          <p>📘 Subject: {partner.subject}</p>
          <p>🎓 Experience: {partner.experienceLevel}</p>
          <p>📍 Location: {partner.location}</p>
          <p>⭐ Rating: {partner.rating}</p>
          <p>👥 Partner Count: {partner.partnerCount}</p>

          <button
            onClick={handleSendRequest}
            disabled={sending}
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-700"
          >
            {sending ? "Sending..." : "Send Partner Request"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;
