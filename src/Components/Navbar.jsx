import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [openDropdown, setOpenDropdown] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOutUser();
        navigate("/login");
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm text-black">
            <div className="flex justify-between items-center max-w-[1320px] mx-auto p-5">

                <div>
                    <h1 className="font-black text-[27px]">
                        Study<span className="text-blue-500">Mate.</span>
                    </h1>
                </div>

                <ul className="flex gap-6 font-medium text-[15px]">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/find-partners"><li>Find Partners</li></Link>

                    {/* SHOW ONLY AFTER LOGIN */}
                    {user && (
                        <>
                            <Link to="/create-partner-profile"><li>Create Partner Profile</li></Link>
                            <Link to="/my-connections"><li>My Connections</li></Link>
                        </>
                    )}
                </ul>

                <div>
                    {user ? (
                        <div className="relative">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-500"
                                onClick={() => setOpenDropdown(!openDropdown)}
                            />

                            {openDropdown && (
                                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-3 w-40">
                                    <button
                                        className="block text-left w-full hover:text-blue-500"
                                        onClick={() => navigate("/profile")}
                                    >
                                        Profile
                                    </button>
                                    <button
                                        className="block text-left w-full mt-2 hover:text-red-500"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <Link to="/login">
                                <button className="px-7 py-2 bg-blue-500 text-white rounded-md">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
