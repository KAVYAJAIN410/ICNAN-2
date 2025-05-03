import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a2240] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="ICNAN Logo" width={80} height={80} />
          <div>
            <h3 className="text-xl font-semibold">ICNAN-25</h3>
            <p className="text-sm text-gray-300">
              International Conference on Nanoscience
            </p>
          </div>
        </div>

        {/* Right side - Contact Info */}
        <div className="text-md md:text-right">
          <p className="mb-1">Centre for Nanotechnology Research</p>
          <p className="mb-1">Vellore Institute of Technology, Vellore, TN, India</p>
          <p className="mb-1">December 18–20, 2025</p>
          <p className="mb-1">📧 contact@icnan25.org</p>
          <p>📞 +91 123 456 7890</p>
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
