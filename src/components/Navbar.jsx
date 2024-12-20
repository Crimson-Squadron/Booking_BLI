import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#2D5C97] text-[#FFF] w-full py-4 px-6 flex items-center justify-between rounded-b-xl">
            {/* Left Section */}
            <div className="flex items-center gap-8">
                {/* Logo */}
                <img src="assets/navbar/LOGO BLI.svg" alt="Logo" className="h-12" />
                {/* BCA Learning Institute */}
                <img src="navbar/bca learning.svg" alt="BCA Learning" className="h-10" />
            </div>

            {/* Center Section */}
            <div className="flex gap-14 text-[18px] font-semibold tracking-[1.08px] ml-auto">
                <a href="#" className="hover:text-gray-300 hover:scale-110 transition-transform duration-200">FAVORITE</a>
                <a href="#" className="hover:text-gray-300 hover:scale-110 transition-transform duration-200">BOOK</a>
                <a href="#" className="hover:text-gray-300 hover:scale-110 transition-transform duration-200">HISTORY</a>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-10 ml-14">
                {/* Notification Icon */}
                <img src="navbar/bell.svg" alt="Bell" className="h-6 cursor-pointer hover:opacity-70 hover:scale-110 transition-transform duration-200" />
                {/* Logout Icon */}
                <img src="navbar/logout.svg" alt="Logout" className="h-6 cursor-pointer hover:opacity-70 hover:scale-110 transition-transform duration-200" />
            </div>
        </nav>
    );
}

export default Navbar;