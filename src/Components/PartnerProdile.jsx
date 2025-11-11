import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PartnerProfile = () => {
  const { id } = useParams(); // Get partner ID from route
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPartner(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <p className="text-gray-500 text-xl">Loading profile...</p>
      </div>
    );
  }

  if (!partner) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-xl">Profile not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 mt-12">
      <div className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={partner.profileimage}
          alt={partner.name}
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
        />

        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold text-gray-800">{partner.name}</h1>
          <p className="text-gray-600"><span className="font-semibold">Subject:</span> {partner.subject}</p>
          <p className="text-gray-600"><span className="font-semibold">Study Mode:</span> {partner.studyMode}</p>
          <p className="text-gray-600"><span className="font-semibold">Availability:</span> {partner.availabilityTime}</p>
          <p className="text-gray-600"><span className="font-semibold">Location:</span> {partner.location}</p>
          <p className="text-gray-600"><span className="font-semibold">Experience Level:</span> {partner.experienceLevel}</p>
          <p className="text-yellow-500 font-semibold">⭐ {partner.rating}</p>
          <p className="text-gray-600"><span className="font-semibold">Partner Count:</span> {partner.patnerCount}</p>
          <p className="text-gray-600"><span className="font-semibold">Email:</span> {partner.email}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;
