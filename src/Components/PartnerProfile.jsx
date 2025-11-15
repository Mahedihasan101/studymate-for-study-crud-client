import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PartnerProfile = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const currentUserMongoId = "67410d4e9a4b3ab81a9e4a3c";

  useEffect(() => {
    const stored = localStorage.getItem(`request_sent_${id}`);
    if (stored === "true") setRequestSent(true);

    const fetchPartner = async () => {
      try {
        const res = await fetch(`http://localhost:5000/partners/${id}`);
        const data = await res.json();
        setPartner(data);

        if (data.connections?.some(c => c.userId === currentUserMongoId)) {
          setRequestSent(true);
          localStorage.setItem(`request_sent_${id}`, "true");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartner();
  }, [id]);

  // SEND REQUEST
  const handleSendRequest = async () => {
    if (requestSent) return;
    setSending(true);
    try {
      const res = await fetch(`http://localhost:5000/partners/${id}/request`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserMongoId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");

      setPartner(data);
      setRequestSent(true);
      localStorage.setItem(`request_sent_${id}`, "true");
    } catch (err) {
      console.error(err);
      alert("Error sending request");
    } finally {
      setSending(false);
    }
  };

  // CANCEL REQUEST
  const handleCancelRequest = async () => {
    if (!requestSent) return;
    setSending(true);
    try {
      const res = await fetch(`http://localhost:5000/partners/${id}/cancel-request`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserMongoId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");

      setPartner(data);
      setRequestSent(false);
      localStorage.removeItem(`request_sent_${id}`);
    } catch (err) {
      console.error(err);
      alert("Error cancelling request");
    } finally {
      setSending(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (!partner) return <p className="text-center mt-10 text-red-500">Profile not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 mt-20">
      <div className="bg-white shadow-lg p-8 rounded-2xl flex flex-col md:flex-row gap-6 dark:bg-gray-400">
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

          {!requestSent ? (
            <button
              onClick={handleSendRequest}
              disabled={sending}
              className="px-4 py-2 mt-3 rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {sending ? "Sending..." : "Send Partner Request"}
            </button>
          ) : (
            <button
              onClick={handleCancelRequest}
              disabled={sending}
              className="px-4 py-2 mt-3 rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              {sending ? "Cancelling..." : "Cancel Request"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;
