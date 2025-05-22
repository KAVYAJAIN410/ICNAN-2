import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a2240] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image src="Logo.png" alt="ICNAN Logo" width={80} height={80} />
          <div>
            <h3 className="text-xl font-semibold">ICNAN-25</h3>
            <p className="text-sm text-gray-300">
              International Conference on Nanoscience & Nanotechnology
            </p>
          </div>
        </div>

        {/* Right side - Contact Info */}
        <div className="text-md md:text-right">
          <p className="mb-1">Centre for Nanotechnology Research</p>
          <p className="mb-1">Vellore Institute of Technology, Vellore, TN, India</p>
          <p className="mb-1">December 16–19, 2025</p>
          <p className="mb-1">cnricnan@vit.ac.in</p>
          <p>📞 +91 9994882510</p>
          <p>📞 +91 9791322311</p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        <p>© 2025 ICNAN. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
