import React from 'react';


const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-900 text-white py-10 mt-10">
                <div class="max-w-[1320px]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

                    <div>
                        <div>
                            
                            <h2 class="text-xl font-bold">Study<span className='text-blue-500'>Mate.</span></h2>
                        </div>
                        <p class="mt-3 text-gray-400">
                            Your smart companion for organized and effective learning.
                        </p>
                    </div>

                    <div>
                        <h3 class="font-semibold mb-3">Important Links</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-semibold mb-3">Support</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-semibold mb-3">Follow Us</h3>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>

                </div>

                <div class="text-center text-gray-500 mt-8 border-t border-gray-700 pt-5">
                    © 2025 Study Mate. All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Footer;