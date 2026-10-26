import React from 'react';
import { ROLES } from '../data/fashionData';
import { Sparkles, ArrowRight, X } from 'lucide-react';
import { soundEngine } from './SoundSystem';

export default function EnterAsModal({ onSelectRole, onClose }) {
  const enterRoles = ROLES.filter((r) => r.id !== 'production'); // 5 primary arch-doors

  const handleSelect = (roleId) => {
    soundEngine.playFabricRustle();
    localStorage.setItem('a_to_w_role', roleId);
    onSelectRole(roleId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1917]/75 backdrop-blur-md overflow-y-auto animate-fadeIn select-none">
      <div className="relative w-full max-w-5xl my-auto bg-[#F7F2EA] rounded-3xl border border-[#B8A48C]/50 shadow-pedestal p-6 md:p-12 text-center">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#E9DFCF] text-[#1B1917] hover:bg-[#1B1917] hover:text-white transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        )}

        {/* Top Header */}
        <span className="label-caps text-[#E7B49A]">The Threshold of A to W</span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#1B1917] mt-2 mb-3">
          How will you wear A to W?
        </h2>
        <p className="text-sm md:text-base text-[#1B1917]/75 font-sans max-w-xl mx-auto leading-relaxed mb-10">
          Select your door into our sunlit gallery. Your choice tailors your exhibition experience, default pricing mode, and atelier tools.
        </p>

        {/* The Five Arch-Doors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {enterRoles.map((role) => (
            <div
              key={role.id}
              onClick={() => handleSelect(role.id)}
              className="arch-card p-5 bg-[#FAF6EE] flex flex-col justify-between items-center text-center cursor-pointer group hover:bg-white hover:border-[#1B1917] transition-all duration-500 min-h-[300px]"
            >
              {/* Arch Top Emblem */}
              <div className="w-14 h-14 rounded-full bg-[#E9DFCF] border border-[#B8A48C]/50 flex items-center justify-center text-[#1B1917] group-hover:scale-110 group-hover:bg-[#1B1917] group-hover:text-[#F7F2EA] transition-all duration-500 shadow-sm">
                <span className="font-serif text-lg font-bold">
                  {role.name[0]}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="my-4">
                <h3 className="font-serif text-xl font-medium text-[#1B1917] group-hover:text-[#4A6B53] transition-colors">
                  {role.name}
                </h3>
                <p className="text-xs text-[#1B1917]/70 mt-2 font-sans line-clamp-3 leading-relaxed">
                  {role.tagline}
                </p>
              </div>

              {/* Bottom Doorway Pill */}
              <button className="btn-pill-travertine group-hover:bg-[#1B1917] group-hover:text-white w-full justify-center text-[11px] py-1.5 transition-colors">
                <span>Enter Door</span>
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs font-mono text-[#B8A48C]">
          You can switch your perspective anytime via the role pill in the navigation header.
        </p>
      </div>
    </div>
  );
}
