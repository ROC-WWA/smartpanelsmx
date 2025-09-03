import React from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const CallUs: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 py-4">
      {/* Left Column */}
      <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full">
        <Phone size={24} />
      </div>

      {/* Right Column */}
      <div>
        <p className="text-lg font-semibold">Llámanos en cualquier momento</p>
        <Link href="tel:5215610197622" className="text-green-500 font-medium">
          +52 56 1019 7622
        </Link>
      </div>
    </div>
  );
};

export default CallUs;