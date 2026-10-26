import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Moon, Eye, Feather } from 'lucide-react';

export default function TheUnusualWing({ onExit }) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const coutureActs = [
    {
      act: 'Act I',
      title: 'Monolithic Obsidian Drape',
      material: 'Triple-Dyed Crêpe & Stiffened Wild Organza',
      silhouette: 'Monumental Asymmetric Cape',
      story: 'Sculpted in total darkness. The garment absorbs 98% of ambient light, casting sharp architectural shadows against the stage floor.',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      edition: 'Numbered Atelier Prototype 01 of 03'
    },
    {
      act: 'Act II',
      title: 'The Shadow Corset',
      material: 'Hand-Hammered Antiqued Brass & Carbon Silk',
      silhouette: 'Anatomical Ribcage Cage',
      story: 'A structural harness holding pleated midnight tulle that rustles like paper when moved across the stage.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      edition: 'Numbered Atelier Prototype 02 of 03'
    },
    {
      act: 'Act III',
      title: 'The Eclipse Shroud',
      material: 'Raw Metallic Thread & Uncut Handloom Silk',
      silhouette: 'Floor-Sweeping Cocoon',
      story: 'Woven with an intentional break in tension every seven stitches, creating an organic frayed perimeter that floats behind the body.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      edition: 'Numbered Atelier Prototype 03 of 03'
    }
  ];

  const currentAct = coutureActs[activeStageIndex];

  return (
    <div className="w-full min-h-screen bg-[#121110] text-[#F7F2EA] transition-colors duration-1000 relative overflow-hidden select-none">
      {/* Top Black Stage Header */}
      <div className="relative z-30 px-6 md:px-12 py-6 border-b border-[#383430] flex items-center justify-between bg-[#121110]/90 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button
            onClick={onExit}
            className="flex items-center gap-2 text-xs font-mono text-[#B8A48C] hover:text-[#F7F2EA] transition-colors bg-[#23201D] px-3.5 py-1.5 rounded-full border border-[#383430]"
          >
            <ArrowLeft size={14} />
            <span>Return to Sunlit Gallery</span>
          </button>
          <span className="text-xs font-mono text-[#E7B49A]">
            The Unusual · Theatrical Dark Pavilion
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#B8A48C]">
          <Moon size={14} className="text-[#E7B49A]" />
          <span>Stage Mode · Pinned Scroll</span>
        </div>
      </div>

      {/* Main Split Layout: Pinned Stage (Left) + Right Rail Scroll */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Pinned Stage (Left Column, Sticky) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative w-full h-[540px] md:h-[620px] rounded-3xl overflow-hidden bg-[#181615] border border-[#383430] shadow-2xl flex flex-col justify-end p-8">
              {/* Stage Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E7B49A]/10 via-transparent to-[#121110] pointer-events-none" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-96 bg-[#FFE8C8]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Garment Image */}
              <img
                src={currentAct.image}
                alt={currentAct.title}
                className="absolute inset-0 w-full h-full object-cover opacity-85 filter contrast-125 transition-all duration-1000 scale-105"
              />

              {/* Pinned Stage Caption */}
              <div className="relative z-10 bg-[#121110]/85 backdrop-blur-md p-6 rounded-2xl border border-[#383430] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-[#E7B49A] uppercase tracking-widest">
                    {currentAct.act} · Spotlit Center
                  </span>
                  <span className="text-[10px] font-mono text-[#B8A48C]">
                    {currentAct.edition}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
                  {currentAct.title}
                </h3>
                <p className="text-xs text-[#B8A48C] font-mono">
                  {currentAct.silhouette} · {currentAct.material}
                </p>
              </div>
            </div>
          </div>

          {/* Right Rail (Scrolling Column) */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <span className="label-caps text-[#E7B49A]">Avant-Garde Chamber</span>
              <h2 className="font-serif text-3xl md:text-5xl text-white font-light">
                The Anatomy of Darkness
              </h2>
              <p className="text-sm text-[#B8A48C] leading-relaxed font-sans">
                Where convention ends and wearable sculpture begins. Scroll down the right rail to shift the spotlight across unreleased theatrical studies.
              </p>
            </div>

            {/* Rail Acts List */}
            <div className="space-y-8">
              {coutureActs.map((act, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div
                    key={act.act}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                      isActive
                        ? 'bg-[#1e1c1a] border-[#E7B49A] shadow-xl'
                        : 'bg-[#181615] border-[#2f2b28] opacity-60 hover:opacity-100 hover:border-[#B8A48C]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-mono text-[#E7B49A] font-semibold">
                        {act.act}
                      </span>
                      <span className="text-xs font-mono text-[#B8A48C]">
                        {isActive ? '● Stage Active' : 'Click to Focus Stage'}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl text-white mb-2">
                      {act.title}
                    </h4>

                    <p className="text-xs text-[#B8A48C] leading-relaxed mb-4">
                      {act.story}
                    </p>

                    <div className="p-3 bg-[#121110] rounded-xl border border-[#2f2b28] text-xs font-mono space-y-1 text-[#B8A48C]">
                      <div>Silhouette: <span className="text-white">{act.silhouette}</span></div>
                      <div>Material: <span className="text-white">{act.material}</span></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Atelier Commission Action */}
            <div className="p-8 rounded-3xl bg-[#1e1c1a] border border-[#383430] text-center space-y-4">
              <Sparkles size={24} className="mx-auto text-[#E7B49A]" />
              <h4 className="font-serif text-2xl text-white">Private Theatrical Commissions</h4>
              <p className="text-xs text-[#B8A48C] max-w-sm mx-auto leading-relaxed">
                Custom one-off haute couture pieces crafted exclusively for cinema, opera and private collections.
              </p>
              <button
                onClick={() => alert('Theatrical commission request logged. An atelier liaison will contact your representative.')}
                className="btn-pill-ink bg-[#F7F2EA] text-[#1B1917] hover:bg-white text-xs py-2.5 px-6 mx-auto"
              >
                Inquire on Theatrical Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
