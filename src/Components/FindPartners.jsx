// FindPartner.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; 

export default function FindPartner() {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredPartners = partners
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        p.subject.toLowerCase().includes(search)
    )
    .sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-10">
        Find <span className="text-blue-500">Study Partner</span>
      </h2>

      {/* Search + Sort Controls */}
      <div className="flex flex-col md:flex-row mt-5 justify-end gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name or subject"
          onChange={handleSearch}
          className="px-4 py-2 border rounded-lg w-full md:w-72 focus:outline-none focus:ring focus:ring-blue-300"
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full md:w-40 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Sort By</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>

      {/* Partner List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPartners.length === 0 && (
          <p className="text-gray-500">No partners found.</p>
        )}

        {filteredPartners.map((p) => (
          <div
            key={p._id}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="flex items-center gap-4">
              <img
                src={p.profileimage}
                alt={p.name}
                className="w-16 h-16 rounded-full border object-cover"
              />
              <div>
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.subject}</p>
              </div>
            </div>

            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Study Mode:</span> {p.studyMode}
              </p>
              <p>
                <span className="font-medium">Availability:</span>{" "}
                {p.availabilityTime}
              </p>
              <p>
                <span className="font-medium">Location:</span> {p.location}
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {p.experienceLevel}
              </p>
              <p>
                <span className="font-medium">Rating:</span> {p.rating} ⭐
              </p>
            </div>

            <button
              onClick={() => navigate(`/partners-details/${p._id}`)}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
