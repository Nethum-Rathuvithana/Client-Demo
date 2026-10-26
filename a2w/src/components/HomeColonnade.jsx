import React, { useState, useEffect } from 'react';
import ThreeHeroScene from '../three/ThreeHeroScene';
import JourneyStitchScroll from './JourneyStitchScroll';
import ThreeOrreryScene from '../three/ThreeOrreryScene';
import { GARMENTS, ROLES } from '../data/fashionData';
import { ArrowRight, Eye, Sparkles, Feather, Compass } from 'lucide-react';
import { soundEngine } from './SoundSystem';

export default function HomeColonnade({
  onNavigate,
  onSelectGarment,
  userRole = 'customer',
  onOpenRoleModal
}) {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress for camera dolly in hero
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / heroHeight));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative">
      {/* =========================================================================
          ROOM 1: THRESHOLD (HERO)
          Ivory arched hall, swaying sheer curtains, 3D peach gown on pedestal rotatable
          ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#F7F2EA] px-4 md:px-12 pt-12 pb-16">
        {/* Ambient Top Tagline & Grand Heading */}
        <div className="max-w-7xl mx-auto w-full z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9DFCF]/70 border border-[#B8A48C]/40 text-xs font-mono text-[#1B1917]">
            <span className="w-2 h-2 rounded-full bg-[#E7B49A]" />
            <span>Room 01 · Threshold</span>
            <span>·</span>
            <span className="text-[#B8A48C]">Walk the Colonnade</span>
          </div>

          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight text-[#1B1917] font-normal">
            A to W
          </h1>

          <p className="font-serif italic text-xl md:text-3xl text-[#B8A48C] max-w-3xl mx-auto">
            "A quiet, sunlit gallery where every piece carries the story of how it was made."
          </p>

          <p className="text-xs md:text-sm font-sans text-[#1B1917]/70 max-w-xl mx-auto leading-relaxed">
            A fashion platform connecting independent designers, atelier brands, retail shops, models, and collectors — turning ideas into opportunity.
          </p>
        </div>

        {/* 3D Canvas Center Stage: The Peach Chiffon Gown */}
        <div className="relative w-full max-w-4xl mx-auto h-[480px] md:h-[560px] my-4 z-10">
          <ThreeHeroScene scrollProgress={scrollProgress} />
        </div>

        {/* Four Small Architectural Nav Arches */}
        <div className="max-w-5xl mx-auto w-full z-10">
          <div className="text-center mb-4">
            <span className="label-caps">Four Gateways to the Ecosystem</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { id: 'discover', title: 'DISCOVER', subtitle: 'The Arched Hall', note: 'Shop wearable art' },
              { id: 'connect', title: 'CONNECT', subtitle: 'The Loom', note: 'Woven networks' },
              { id: 'create', title: 'CREATE', subtitle: 'The Studio', note: 'Cutting table & specs' },
              { id: 'wear', title: 'WEAR', subtitle: 'The Wardrobe', note: 'Patronage & fit twin' }
            ].map((gate) => (
              <button
                key={gate.id}
                onClick={() => {
                  soundEngine.playFabricRustle();
                  onNavigate(gate.id);
                }}
                className="arch-card p-5 bg-[#FAF6EE]/90 hover:bg-white text-center flex flex-col justify-between items-center group cursor-pointer transition-all duration-500 shadow-subtle min-h-[160px]"
              >
                <div className="w-8 h-8 rounded-full bg-[#E9DFCF] text-[#1B1917] flex items-center justify-center font-mono text-xs group-hover:bg-[#1B1917] group-hover:text-white transition-colors">
                  ↗
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1B1917] tracking-wider group-hover:text-[#4A6B53] transition-colors">
                    {gate.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#B8A48C] block mt-0.5">
                    {gate.subtitle}
                  </span>
                </div>
                <span className="text-[10px] text-[#1B1917]/70 font-sans">
                  {gate.note}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center items-center gap-2 text-xs font-mono text-[#B8A48C]">
            <span className="animate-bounce">↓</span>
            <span>Scroll downward to trace the running stitch into Room 02</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROOM 2: THE JOURNEY OF A DESIGN ("STITCH-SCROLL")
          Sideways path, ONE 3D garment changing at six knots
          ========================================================================= */}
      <JourneyStitchScroll onSelectGarment={onSelectGarment} />

      {/* =========================================================================
          ROOM 3: WHO'S INSIDE (3D ORRERY)
          Orbiting marble pedestals with symbolic objects & light pulses
          ========================================================================= */}
      <section className="relative w-full py-24 px-4 md:px-12 bg-[#F7F2EA] border-b border-[#B8A48C]/30">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="label-caps">Room 03 · 3D Orrery Orbit</span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1B1917] mt-2 mb-3">
              Who's Inside the Colonnade
            </h2>
            <p className="text-sm md:text-base text-[#1B1917]/70 font-sans leading-relaxed">
              Drag to orbit the central "A to W" disc. Light pulses pulse both ways between creators, ateliers, and collectors.
            </p>
          </div>

          {/* Interactive 3D Orrery View */}
          <ThreeOrreryScene
            onSelectRole={(roleId) => {
              if (roleId === 'designer') onNavigate('create');
              else if (roleId === 'brand') onNavigate('connect');
              else if (roleId === 'retail') onNavigate('discover');
              else if (roleId === 'model') onNavigate('connect');
              else if (roleId === 'customer') onNavigate('wear');
              else onNavigate('connect');
            }}
          />
        </div>
      </section>

      {/* =========================================================================
          ROOM 4: THE HALL (PREVIEW)
          Horizontal drift through gallery of garments on pedestals
          ========================================================================= */}
      <section className="relative w-full py-24 px-4 md:px-12 bg-[#F1E9DC]/60 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#B8A48C]/30 pb-6">
            <div>
              <span className="label-caps">Room 04 · Horizontal Drift</span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1B1917] mt-2">
                The Hall of Sculptural Garments
              </h2>
              <p className="text-xs md:text-sm text-[#1B1917]/70 font-sans mt-2">
                No grids. No discount banners. Every piece turns gently toward your gaze.
              </p>
            </div>

            <button
              onClick={() => onNavigate('discover')}
              className="btn-pill-ink text-xs"
            >
              <span>Enter Full Arched Gallery</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Horizontal Pedestal Drift Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GARMENTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectGarment && onSelectGarment(item.id)}
                className="arch-card p-6 bg-[#FAF6EE] flex flex-col justify-between min-h-[500px] cursor-pointer group hover:bg-white hover:border-[#1B1917] transition-all duration-500 shadow-subtle"
              >
                <div className="flex justify-between items-center text-xs font-mono text-[#B8A48C]">
                  <span>{item.edition}</span>
                  <span className="text-[#1B1917] bg-white px-2 py-0.5 rounded-full border border-[#B8A48C]/30">
                    {item.occasion}
                  </span>
                </div>

                <div className="relative w-full h-64 my-4 rounded-t-full overflow-hidden bg-[#FAF7F0] shadow-sm">
                  <img
                    src={item.layers.photo}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1B1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="btn-pill-ink text-xs py-2 px-4 shadow-lg">
                      <Eye size={14} />
                      <span>Art → Wear Reveal</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#1B1917] group-hover:text-[#4A6B53] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-[#B8A48C]">
                    By {item.designer.name}
                  </p>
                  <div className="running-stitch-h my-1" />
                  <div className="flex justify-between items-center text-xs pt-1">
                    <span className="font-serif text-lg text-[#1B1917]">
                      LKR {userRole === 'retail' ? item.wholesalePriceLKR.toLocaleString() : item.retailPriceLKR.toLocaleString()}
                    </span>
                    <span className="font-mono text-[10px] text-[#B8A48C]">
                      {userRole === 'retail' ? `Wholesale MOQ ${item.moq}` : 'Single Edition'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROOM 5: THE BIGGER PICTURE
          Sheer curtains part, walk outside into pale sky, loose thread tails
          ========================================================================= */}
      <section className="relative w-full py-32 px-4 md:px-12 bg-gradient-to-b from-[#F7F2EA] via-[#D5E3EE]/30 to-[#F7F2EA] text-center overflow-hidden">
        {/* Subtle Sunbeam Center Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(231,180,154,0.2),transparent_70%)] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9DFCF] text-xs font-mono text-[#1B1917]">
            <Feather size={14} className="text-[#E7B49A]" />
            <span>Room 05 · The Bigger Picture</span>
          </div>

          <h2 className="font-serif text-4xl md:text-7xl text-[#1B1917] font-light leading-tight">
            Supporting local talent. <br />
            <span className="italic text-[#B8A48C]">Building a stronger fashion future.</span>
          </h2>

          <p className="text-sm md:text-base text-[#1B1917]/75 font-sans max-w-xl mx-auto leading-relaxed">
            By connecting raw sketch craft with master ateliers, boutique wholesale rails, and passionate collectors, we replace disposable fast consumption with permanent wearable art.
          </p>

          {/* Five Role Buttons Ending in Loose Thread Tails */}
          <div className="pt-6 flex flex-wrap justify-center gap-4">
            {ROLES.filter(r => r.id !== 'production').map((r) => (
              <div key={r.id} className="relative group">
                <button
                  onClick={() => {
                    soundEngine.playFabricRustle();
                    if (r.id === 'designer') onNavigate('create');
                    else if (r.id === 'brand') onNavigate('connect');
                    else if (r.id === 'retail') onNavigate('discover');
                    else if (r.id === 'model') onNavigate('connect');
                    else onNavigate('wear');
                  }}
                  className="btn-pill-ink text-xs px-5 py-2.5 shadow-sm group-hover:scale-105 transition-transform"
                >
                  <span>{r.name} Door</span>
                  <ArrowRight size={12} />
                </button>
                {/* Loose Thread Tail hanging down */}
                <div className="w-0.5 h-6 mx-auto border-l border-dashed border-[#B8A48C] mt-1 group-hover:border-[#E7B49A] transition-colors" />
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button
              onClick={onOpenRoleModal}
              className="text-xs font-mono text-[#B8A48C] hover:text-[#1B1917] underline underline-offset-4 transition-colors"
            >
              Reopen "How will you wear A to W?" threshold doors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
