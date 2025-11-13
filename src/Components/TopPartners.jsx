import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router";

const TopPartners = () => {
  const { user } = useContext(AuthContext);
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const topThree = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
        setPartners(topThree);
      });
  }, []);

  const handleViewProfile = (id) => {
    if (user) {
      navigate(`/partners-details/${id}`);
    } else {
      navigate("/login", { state: { from: `/partners-details/${id}` } });
    }
  };

  return (
    <div className="py-20 bg-white max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
        Top Study <span className="text-blue-500">Partners</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <img
              src={partner.img}
              className="w-28 h-28 mx-auto rounded-full border-3 border-blue-600 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{partner.name}</h3>
            <p className="text-gray-600">{partner.subject}</p>
            <p className="text-yellow-500 mt-2 font-semibold">⭐ {partner.rating}</p>

            <button
              onClick={() => handleViewProfile(partner._id)}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPartners;
