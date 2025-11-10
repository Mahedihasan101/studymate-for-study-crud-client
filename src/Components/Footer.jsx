import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-10 mt-10">
                <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

                    <div>
                        <div>
                            <h2 className="text-xl font-bold">
                                Study<span className="text-blue-500">Mate.</span>
                            </h2>
                        </div>
                        <p className="mt-3 text-gray-400">
                            Your smart companion for organized and effective learning.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Important Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Home</li>
                            <li>Courses</li>
                            <li>Resources</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>FAQ</li>
                            <li>Help Center</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Follow Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Facebook</li>
                            <li>YouTube</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>

                </div>

                <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-5">
                    © 2025 Study Mate. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
