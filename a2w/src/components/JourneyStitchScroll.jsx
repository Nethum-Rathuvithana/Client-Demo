import React, { useState } from 'react';
import { Check, Scissors, Camera, Sparkles, Tag, ArrowRight, ShieldCheck } from 'lucide-react';
import { JOURNEY_STAGES } from '../data/fashionData';

export default function JourneyStitchScroll({ onSelectGarment }) {
  const [activeKnot, setActiveKnot] = useState(0); // 0 to 5
  const currentStage = JOURNEY_STAGES[activeKnot];

  return (
    <section className="relative w-full py-20 px-4 md:px-12 bg-[#F1E9DC]/40 border-y border-[#B8A48C]/30 overflow-hidden">
      {/* Background Decorative Arches */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E7B49A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D5E3EE]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-caps">Room 02 · Stitch-Scroll</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1B1917] mt-2 mb-4">
            The Journey of a Design
          </h2>
          <p className="text-sm md:text-base text-[#1B1917]/70 font-sans leading-relaxed">
            One continuous running-stitch thread traces each creation through six transformative stages — 
            from an architect’s initial graphite line to the boutique rail.
          </p>
        </div>

        {/* The Running-Stitch Knot Track */}
        <div className="relative mb-12 px-6">
          {/* Background Running Stitch Line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#B8A48C]/60 pointer-events-none" />
          
          {/* Active Colored Progress Thread */}
          <div
            className="absolute top-1/2 left-8 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#E7B49A] transition-all duration-700 pointer-events-none"
            style={{ width: `${(activeKnot / 5) * 85}%` }}
          />

          {/* Knots */}
          <div className="relative flex justify-between items-center z-10">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isPast = idx < activeKnot;
              const isCurrent = idx === activeKnot;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveKnot(idx)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 text-xs md:text-sm font-mono shadow-subtle ${
                      isCurrent
                        ? 'bg-[#1B1917] text-[#F7F2EA] scale-110 ring-4 ring-[#E7B49A]/50'
                        : isPast
                        ? 'bg-[#E7B49A] text-[#1B1917]'
                        : 'bg-[#F7F2EA] text-[#B8A48C] border border-[#B8A48C]/50 hover:border-[#1B1917]'
                    }`}
                  >
                    {isPast ? <Check size={16} /> : `0${idx + 1}`}
                  </div>
                  <span
                    className={`text-[11px] md:text-xs mt-3 tracking-wide hidden sm:block text-center max-w-[90px] transition-colors ${
                      isCurrent ? 'font-semibold text-[#1B1917]' : 'text-[#B8A48C] group-hover:text-[#1B1917]'
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Knot Interactive Transformation Stage */}
        <div className="linen-card p-6 md:p-12 min-h-[460px] flex flex-col md:flex-row items-center gap-10">
          {/* Left: Interactive Visual Representation */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[340px]">
            {/* Stage 1: Submitted - Pencil sketch line reveal */}
            {activeKnot === 0 && (
              <div className="relative w-full max-w-sm p-6 bg-white rounded-2xl shadow-float border border-[#B8A48C]/30 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-[#E9DFCF] pb-3 mb-4">
                  <span className="label-caps">Draft Technical Spec #A2W-804</span>
                  <span className="text-[11px] font-mono text-[#B8A48C]">280 GSM Paper</span>
                </div>
                {/* Simulated Graphite Sketch Drawing */}
                <svg className="w-full h-48 mx-auto" viewBox="0 0 200 240" fill="none">
                  <path
                    d="M100 20 C110 30, 115 50, 100 70 C85 50, 90 30, 100 20 Z"
                    stroke="#1B1917"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    className="thread-animated"
                  />
                  <path
                    d="M80 75 C100 80, 100 80, 120 75 L150 210 C100 225, 100 225, 50 210 Z"
                    stroke="#1B1917"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 75 L100 218 M75 140 C100 150, 100 150, 125 140"
                    stroke="#B8A48C"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                </svg>
                <div className="mt-4 p-3 bg-[#F7F2EA] rounded-xl text-xs space-y-1 text-[#1B1917]/80">
                  <div className="flex justify-between"><span>Silhouette:</span> <strong className="text-[#1B1917]">Fluted Column Gown</strong></div>
                  <div className="flex justify-between"><span>Fabric Intent:</span> <strong>Mulberry Silk Chiffon</strong></div>
                  <div className="flex justify-between"><span>Author:</span> <strong>Maya Senanayake</strong></div>
                </div>
              </div>
            )}

            {/* Stage 2: Details & Categorisation - Swatches orbit & settle */}
            {activeKnot === 1 && (
              <div className="relative w-full max-w-sm flex flex-col items-center animate-fadeIn">
                <div className="w-56 h-56 rounded-full border border-dashed border-[#B8A48C] flex items-center justify-center relative">
                  <div className="w-32 h-32 rounded-2xl bg-[#E7B49A] shadow-float flex flex-col items-center justify-center text-center p-3 text-[#1B1917] border border-white/60">
                    <span className="label-caps-dark text-[10px]">Primary Swatch</span>
                    <strong className="text-sm font-serif mt-1">Blush Peach Silk</strong>
                    <span className="text-[10px] opacity-75 font-mono">Pantone 14-1318</span>
                  </div>

                  {/* Orbiting Pinned Badges */}
                  <div className="absolute -top-3 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium">
                    📌 Evening Gala
                  </div>
                  <div className="absolute -bottom-3 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium">
                    📌 Hand-Pleated
                  </div>
                  <div className="absolute -left-6 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium">
                    📌 100% Organic Silk
                  </div>
                  <div className="absolute -right-6 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium">
                    📌 Zero-Waste Cut
                  </div>
                </div>
                <span className="text-xs text-[#B8A48C] mt-4 font-mono">Swatches verified & archived</span>
              </div>
            )}

            {/* Stage 3: Sample Approval - White muslin toile with stitch seal */}
            {activeKnot === 2 && (
              <div className="relative w-full max-w-sm p-6 bg-[#FAF7F0] rounded-2xl shadow-float border border-[#B8A48C]/40 animate-fadeIn">
                <div className="flex justify-between items-center mb-3">
                  <span className="label-caps">Muslin Fitting Toile</span>
                  <span className="text-xs font-mono text-[#4A6B53]">Fit Pass 100%</span>
                </div>
                <div className="relative w-44 h-56 mx-auto bg-[#F2EDE2] rounded-xl border-2 border-dashed border-[#B8A48C] flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-[#B8A48C] font-mono tracking-widest uppercase">Toile Sample</span>
                  {/* Tailor Pins */}
                  <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-[#E7B49A] shadow-sm" />
                  <div className="absolute top-12 right-6 w-2 h-2 rounded-full bg-[#E7B49A] shadow-sm" />
                  <div className="absolute bottom-8 left-10 w-2 h-2 rounded-full bg-[#E7B49A] shadow-sm" />

                  {/* Certified Approval Seal */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px]">
                    <div className="w-28 h-28 rounded-full border-2 border-[#1B1917] p-1 flex flex-col items-center justify-center text-center rotate-[-12deg] bg-[#F7F2EA]/90 shadow-subtle">
                      <ShieldCheck size={20} className="text-[#4A6B53] mb-1" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#1B1917]">APPROVED</span>
                      <span className="text-[8px] text-[#B8A48C] font-mono">COLOMBO ATELIER</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stage 4: Production - Pattern pieces fly in & seams stitched */}
            {activeKnot === 3 && (
              <div className="relative w-full max-w-sm p-6 bg-white rounded-2xl shadow-float border border-[#B8A48C]/40 animate-fadeIn">
                <div className="flex justify-between items-center mb-3">
                  <span className="label-caps">Production Floor</span>
                  <span className="text-xs font-mono text-[#B8A48C]">Batch #LKA-018</span>
                </div>
                <div className="p-4 bg-[#F7F2EA] rounded-xl border border-[#E9DFCF] space-y-3">
                  <div className="flex items-center gap-3">
                    <Scissors size={18} className="text-[#1B1917]" />
                    <div className="text-xs">
                      <p className="font-medium text-[#1B1917]">Pattern Cutting Completed</p>
                      <p className="text-[10px] text-[#B8A48C]">Lanka Fine Silk Weavers</p>
                    </div>
                  </div>
                  <div className="running-stitch-h my-2" />
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#E7B49A] animate-ping" />
                    <div className="text-xs">
                      <p className="font-medium text-[#1B1917]">Assembly & Hand-Pleating</p>
                      <p className="text-[10px] text-[#B8A48C]">Master Cutter Sunil Fernando</p>
                    </div>
                  </div>
                  <div className="w-full bg-[#E9DFCF] h-1.5 rounded-full overflow-hidden mt-3">
                    <div className="bg-[#4A6B53] h-full w-4/5 rounded-full" />
                  </div>
                  <span className="text-[10px] text-[#4A6B53] font-mono block text-right">80% Stitched</span>
                </div>
              </div>
            )}

            {/* Stage 5: Photoshoot - Flash and contact sheet */}
            {activeKnot === 4 && (
              <div className="relative w-full max-w-sm animate-fadeIn">
                <div className="relative rounded-2xl overflow-hidden shadow-float border border-[#B8A48C]/50 bg-[#1B1917]">
                  <img
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80"
                    alt="Editorial Photoshoot"
                    className="w-full h-64 object-cover opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B1917]/80 text-[#F7F2EA] backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] flex items-center gap-1.5">
                    <Camera size={12} />
                    <span>Tariq Thorne · Golden Colonnade</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl text-xs flex justify-between items-center text-[#1B1917]">
                    <span>Model: <strong>Keshini Perera</strong></span>
                    <span className="font-mono text-[10px] text-[#B8A48C]">Frame 04/24</span>
                  </div>
                </div>
              </div>
            )}

            {/* Stage 6: Live on Platform - Rail & Dual Hang-tag */}
            {activeKnot === 5 && (
              <div className="relative w-full max-w-sm p-6 bg-white rounded-2xl shadow-float border border-[#B8A48C]/40 animate-fadeIn">
                <div className="flex justify-between items-center mb-3">
                  <span className="label-caps">Exhibition Rail #01</span>
                  <span className="text-xs bg-[#4A6B53]/10 text-[#4A6B53] px-2 py-0.5 rounded-full font-medium">● Live Now</span>
                </div>
                {/* Physical Hang Tag with dual chips */}
                <div className="p-5 bg-[#FAF6EE] rounded-2xl border-2 border-[#E9DFCF] shadow-subtle relative">
                  <div className="w-3 h-3 rounded-full bg-[#1B1917] mx-auto mb-3" />
                  <h4 className="font-serif text-lg font-medium text-center text-[#1B1917]">
                    The Peach Chiffon Gown
                  </h4>
                  <p className="text-xs text-center text-[#B8A48C] mt-0.5">Edition 01 of 18</p>

                  <div className="mt-4 pt-3 border-t border-[#E9DFCF] grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 bg-white rounded-xl border border-[#B8A48C]/30">
                      <span className="label-caps text-[9px] block">Direct Wear</span>
                      <strong className="text-sm font-serif text-[#1B1917] block mt-0.5">LKR 68,000</strong>
                      <span className="text-[10px] text-[#B8A48C]">Single Edition</span>
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-[#B8A48C]/30">
                      <span className="label-caps text-[9px] block">Boutique Stock</span>
                      <strong className="text-sm font-serif text-[#1B1917] block mt-0.5">LKR 38,000</strong>
                      <span className="text-[10px] text-[#B8A48C]">MOQ 20 Pcs</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Knot Description & Navigation */}
          <div className="w-full md:w-1/2 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9DFCF] text-xs font-mono text-[#1B1917]">
              <span>{currentStage.badge}</span>
              <span>·</span>
              <span>Stage {activeKnot + 1} of 6</span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-[#1B1917] font-normal">
              {currentStage.title}
            </h3>

            <p className="font-serif italic text-lg md:text-xl text-[#B8A48C]">
              "{currentStage.shortCopy}"
            </p>

            <p className="text-sm text-[#1B1917]/80 leading-relaxed font-sans">
              {currentStage.detail}
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setActiveKnot((prev) => (prev + 1) % 6)}
                className="btn-pill-ink text-xs"
              >
                <span>Advance Thread to Stage 0{((activeKnot + 1) % 6) + 1}</span>
                <ArrowRight size={14} />
              </button>

              {activeKnot === 5 && (
                <button
                  onClick={() => onSelectGarment && onSelectGarment('hero_gown')}
                  className="btn-pill-travertine text-xs"
                >
                  View Gown in Hall →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
