import React, { useState } from 'react';
import { Network, Sparkles, Send, RotateCw, MapPin, Layers, Award, ArrowUpRight } from 'lucide-react';
import { NETWORK_PROFILES, UPCOMING_DROPS } from '../data/fashionData';

export default function ConnectWing({ onSelectGarment }) {
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('all');
  const [hoveredProfileId, setHoveredProfileId] = useState(null);
  const [activeCompCardId, setActiveCompCardId] = useState('p4'); // model card flip state
  const [compCardSide, setCompCardSide] = useState('front'); // 'front' vs 'back'
  const [collabModalProfile, setCollabModalProfile] = useState(null);
  const [collabSent, setCollabSent] = useState(false);

  const filteredProfiles = selectedRoleFilter === 'all'
    ? NETWORK_PROFILES
    : NETWORK_PROFILES.filter((p) => p.role === selectedRoleFilter);

  const handleRequestCollab = (profile) => {
    setCollabModalProfile(profile);
    setCollabSent(false);
  };

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="label-caps">Wing 02 · Collaborative Ecosystem</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1B1917] mt-2">
              The Loom: Woven Network
            </h1>
            <p className="text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed">
              Every partnership is a running-stitch thread. Hover over any creative node to trace their active collaborations across design, production, and retail.
            </p>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Creatives' },
              { id: 'designer', label: 'Designers' },
              { id: 'brand', label: 'Brands' },
              { id: 'retail', label: 'Retail Shops' },
              { id: 'model', label: 'Models' },
              { id: 'production', label: 'Production Mills' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRoleFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedRoleFilter === tab.id
                    ? 'bg-[#1B1917] text-white shadow-sm'
                    : 'bg-[#E9DFCF] text-[#1B1917] hover:bg-[#F1E9DC]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Interactive Woven Loom SVG Diagram */}
        <div className="linen-card p-6 md:p-8 relative overflow-hidden bg-[#F2EDE2]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="label-caps">Thread Topography</span>
              <h3 className="font-serif text-2xl text-[#1B1917] mt-1">
                Active Cross-Disciplinary Collaborations
              </h3>
            </div>
            <span className="text-xs font-mono text-[#B8A48C]">
              Hover a node to illuminate active threads
            </span>
          </div>

          {/* Loom Node Web */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {NETWORK_PROFILES.map((profile) => {
              const isHovered = hoveredProfileId === profile.id;
              const isConnected =
                hoveredProfileId &&
                NETWORK_PROFILES.find((p) => p.id === hoveredProfileId)?.activeCollaborations.includes(profile.id);

              return (
                <div
                  key={profile.id}
                  onMouseEnter={() => setHoveredProfileId(profile.id)}
                  onMouseLeave={() => setHoveredProfileId(null)}
                  className={`p-4 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? 'border-[#1B1917] ring-2 ring-[#E7B49A] shadow-float scale-105'
                      : isConnected
                      ? 'border-[#E7B49A] bg-[#FAF3E8] shadow-subtle'
                      : 'border-[#B8A48C]/30 hover:border-[#B8A48C]'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#B8A48C]"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-medium text-[#1B1917] leading-tight">
                        {profile.name}
                      </h4>
                      <span className="text-[10px] font-mono text-[#E7B49A] uppercase">
                        {profile.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#1B1917]/70 line-clamp-2 mb-3">
                    {profile.bio}
                  </p>

                  <div className="pt-2 border-t border-[#E9DFCF] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#4A6B53]">
                      ● {profile.activeCollaborations.length} Active Threads
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRequestCollab(profile);
                      }}
                      className="text-[10px] uppercase font-mono text-[#1B1917] hover:underline"
                    >
                      Collab →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Model Editorial Comp-Card Spotlight (Interactive Flip) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="label-caps">Talent Comp-Card Archive</span>
            <h2 className="font-serif text-3xl text-[#1B1917]">
              Digital Comp-Cards with Fit Twin Verification
            </h2>
            <p className="text-sm text-[#1B1917]/80 leading-relaxed font-sans">
              Models receive verified architectural measurement tags, book direct editorial campaigns, and earn recurring royalties on every piece sold through their photoshoots.
            </p>

            {/* Reversible Comp Card */}
            <div className="relative pt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono text-[#B8A48C]">
                  {compCardSide === 'front' ? 'Face Editorial Comp' : 'Measurements & Portfolio Back'}
                </span>
                <button
                  onClick={() => setCompCardSide(compCardSide === 'front' ? 'back' : 'front')}
                  className="flex items-center gap-1.5 text-xs font-mono bg-[#E9DFCF] px-3 py-1 rounded-full text-[#1B1917] hover:bg-[#1B1917] hover:text-white transition-all shadow-sm"
                >
                  <RotateCw size={12} />
                  <span>Flip Comp-Card</span>
                </button>
              </div>

              {/* Comp Card Frame */}
              <div
                className={`w-full rounded-2xl p-6 border-2 transition-all duration-700 shadow-float bg-[#FAF6EE] border-[#B8A48C] ${
                  compCardSide === 'front' ? 'min-h-[460px]' : 'min-h-[460px]'
                }`}
              >
                {compCardSide === 'front' ? (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="w-full h-72 rounded-xl overflow-hidden relative">
                      <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80"
                        alt="Keshini Perera"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#1B1917]/80 text-[#F7F2EA] backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono">
                        Verified A to W Fit Twin
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[#1B1917]">Keshini Perera</h3>
                      <p className="text-xs font-mono text-[#B8A48C]">Colombo & Singapore · Model ID #A2W-MD04</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-[#E9DFCF]">
                      <div className="p-2 bg-white rounded-lg border border-[#B8A48C]/20">
                        <span className="text-[10px] text-[#B8A48C] block">Height</span>
                        <strong>174 cm</strong>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-[#B8A48C]/20">
                        <span className="text-[10px] text-[#B8A48C] block">Size</span>
                        <strong>S / UK 8</strong>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-[#B8A48C]/20">
                        <span className="text-[10px] text-[#B8A48C] block">Shoe</span>
                        <strong>39 EU</strong>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="label-caps text-[#E7B49A]">Portfolio & Garments Modelled</span>
                    <h3 className="font-serif text-xl text-[#1B1917]">Exhibition Appearances</h3>
                    
                    <div className="space-y-2">
                      <div
                        onClick={() => onSelectGarment && onSelectGarment('hero_gown')}
                        className="p-3 bg-white rounded-xl border border-[#B8A48C]/30 flex items-center justify-between cursor-pointer hover:border-[#1B1917]"
                      >
                        <div>
                          <strong className="text-xs font-serif text-[#1B1917] block">The Peach Chiffon Gown</strong>
                          <span className="text-[10px] text-[#B8A48C]">Lead Campaign · 14 sales generated</span>
                        </div>
                        <span className="text-xs font-mono text-[#4A6B53]">+5% Commission</span>
                      </div>

                      <div
                        onClick={() => onSelectGarment && onSelectGarment('hall_garment_04')}
                        className="p-3 bg-white rounded-xl border border-[#B8A48C]/30 flex items-center justify-between cursor-pointer hover:border-[#1B1917]"
                      >
                        <div>
                          <strong className="text-xs font-serif text-[#1B1917] block">Midnight Ink Pleated Tunic</strong>
                          <span className="text-[10px] text-[#B8A48C]">Studio Editorial · 8 sales generated</span>
                        </div>
                        <span className="text-xs font-mono text-[#4A6B53]">+5% Commission</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E9DFCF]">
                      <span className="text-[10px] uppercase font-mono text-[#B8A48C] block mb-1">Availability</span>
                      <p className="text-xs text-[#1B1917] font-medium">Available for November Colonnade Shoots in Colombo & Galle</p>
                    </div>

                    <button
                      onClick={() => handleRequestCollab(NETWORK_PROFILES[3])}
                      className="btn-pill-ink w-full justify-center text-xs py-2.5 mt-2"
                    >
                      Book for Campaign Shoot
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Fashion Brand Lookbook & Upcoming Drops */}
          <div className="lg:col-span-7 space-y-6">
            <span className="label-caps">Brand Portfolios & Upcoming Drops</span>
            <div className="space-y-6">
              {UPCOMING_DROPS.map((drop) => (
                <div
                  key={drop.id}
                  className="arch-card p-6 md:p-8 bg-[#F1E9DC] border border-[#B8A48C]/50 relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-mono text-[#E7B49A] block uppercase tracking-wider">
                        {drop.brand}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#1B1917] mt-1">
                        {drop.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono bg-[#1B1917] text-[#F7F2EA] px-3 py-1 rounded-full">
                      Drop: {drop.revealDate}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-[#1B1917]/80 leading-relaxed max-w-xl">
                    {drop.description}
                  </p>

                  {/* Silhouetted Sheer Veil Preview */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden my-4 bg-[#1B1917]">
                    <img
                      src={drop.silhouetteImage}
                      alt={drop.title}
                      className="w-full h-full object-cover filter blur-[8px] opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1B1917]/80 via-transparent to-[#1B1917]/80 flex flex-col items-center justify-center p-4 text-center">
                      <span className="label-caps text-white mb-1">Hidden Behind Sheer Silk</span>
                      <p className="text-xs text-[#F7F2EA]/90 font-serif italic">
                        Silhouettes soften until launch date wind releases the curtain.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="text-xs font-mono text-[#4A6B53]">
                      ● {drop.notifiedCount} Curators Knot-Notified
                    </span>

                    <button
                      onClick={() => alert(`A knot has been stitched in your ribbon! You will be given 24h early access before public release.`)}
                      className="btn-pill-ink text-xs py-2 px-5"
                    >
                      Tie Knot for Early Drop Access
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Pitch Modal */}
      {collabModalProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FAF6EE] p-8 rounded-3xl max-w-lg w-full border border-[#B8A48C] shadow-pedestal space-y-4 animate-fadeIn">
            <h3 className="font-serif text-2xl text-[#1B1917]">
              Request Collaboration with {collabModalProfile.name}
            </h3>
            <p className="text-xs text-[#1B1917]/80">
              Drag a collaborative running stitch thread to pitch a joint collection, sample request, or retail rail allocation.
            </p>

            {collabSent ? (
              <div className="p-4 bg-[#4A6B53]/15 text-[#4A6B53] rounded-xl text-xs space-y-2">
                <p className="font-medium">✓ Thread connected successfully!</p>
                <p>
                  A formal collaboration proposal has been pinned to {collabModalProfile.name}'s Studio board. You will receive an alert once reviewed.
                </p>
                <button
                  onClick={() => setCollabModalProfile(null)}
                  className="btn-pill-ink text-xs mt-2"
                >
                  Return to The Loom
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCollabSent(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-mono text-[#B8A48C] block mb-1">Project Intent / Capsule Concept</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Resort 2027 Chiffon & Fluted Linen Capsule"
                    className="w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-[#B8A48C] block mb-1">Proposed Terms & Scope</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Specify target pieces, MOQ requirements or shoot dates..."
                    className="w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setCollabModalProfile(null)}
                    className="btn-pill-travertine text-xs"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-pill-ink text-xs">
                    Cast Running Stitch Thread
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
