import React, { useState } from 'react';
import { SlidersHorizontal, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { GARMENTS } from '../data/fashionData';

export default function DiscoverWing({ onSelectGarment, userRole = 'customer' }) {
  // Swatch Wall filters
  const [selectedFabric, setSelectedFabric] = useState('All');
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');

  const fabrics = ['All', 'Silk Chiffon', 'Wild Silk', 'Flax Linen', 'Glass Organza', 'Crepe De Chine', 'Raw Matka'];
  const occasions = ['All', 'Evening Gala', 'Architectural Outerwear', 'Resort & Gallery', 'Ceremony'];
  const colorSwatches = [
    { label: 'All', hex: 'transparent' },
    { label: 'Blush Peach', hex: '#E7B49A' },
    { label: 'Warm Travertine', hex: '#E9DFCF' },
    { label: 'Raw Linen', hex: '#F1E9DC' },
    { label: 'Sky Mist', hex: '#D5E3EE' },
    { label: 'Deep Ink', hex: '#1B1917' }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#B8A48C]/30 pb-8">
          <div>
            <span className="label-caps">Wing 01 · Curated Gallery</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1B1917] mt-2">
              The Hall of Wearable Art
            </h1>
            <p className="text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed">
              Step through continuous stone arches. Every piece stands in its own architectural space.
              Filter via the swatch wall below — non-matching pieces soften into sheer ghosts so the gallery stays whole.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#E9DFCF]/60 px-4 py-2 rounded-full border border-[#B8A48C]/40 text-xs font-mono">
            <span>Viewing Mode:</span>
            <strong className="text-[#1B1917] capitalize">
              {userRole === 'retail' ? 'Retail Wholesale (LKR + MOQ)' : 'Collector Patronage (LKR)'}
            </strong>
          </div>
        </div>

        {/* The Swatch Wall Filter Bar */}
        <div className="mt-8 p-6 rounded-3xl bg-[#F1E9DC] border border-[#B8A48C]/40 shadow-subtle space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-[#1B1917]" />
              <span className="label-caps-dark">The Swatch Wall Filters</span>
            </div>
            <button
              onClick={() => {
                setSelectedFabric('All');
                setSelectedOccasion('All');
                setSelectedColor('All');
              }}
              className="text-xs text-[#B8A48C] hover:text-[#1B1917] font-mono transition-colors"
            >
              Reset Swatches
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Fabric Swatches */}
            <div>
              <span className="text-[11px] font-mono text-[#B8A48C] block mb-2">Material / Weave:</span>
              <div className="flex flex-wrap gap-1.5">
                {fabrics.map((fab) => (
                  <button
                    key={fab}
                    onClick={() => setSelectedFabric(fab)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      selectedFabric === fab
                        ? 'bg-[#1B1917] text-white shadow-sm'
                        : 'bg-white/80 text-[#1B1917] border border-[#B8A48C]/30 hover:border-[#1B1917]'
                    }`}
                  >
                    {fab}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion */}
            <div>
              <span className="text-[11px] font-mono text-[#B8A48C] block mb-2">Architectural Occasion:</span>
              <div className="flex flex-wrap gap-1.5">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setSelectedOccasion(occ)}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      selectedOccasion === occ
                        ? 'bg-[#1B1917] text-white shadow-sm'
                        : 'bg-white/80 text-[#1B1917] border border-[#B8A48C]/30 hover:border-[#1B1917]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Swatch Circles */}
            <div>
              <span className="text-[11px] font-mono text-[#B8A48C] block mb-2">Palette Tone:</span>
              <div className="flex items-center gap-2">
                {colorSwatches.map((swatch) => (
                  <button
                    key={swatch.label}
                    onClick={() => setSelectedColor(swatch.label)}
                    title={swatch.label}
                    className={`relative w-7 h-7 rounded-full border-2 transition-transform ${
                      selectedColor === swatch.label ? 'scale-125 border-[#1B1917]' : 'border-white hover:scale-110'
                    }`}
                    style={{
                      backgroundColor: swatch.hex === 'transparent' ? '#F7F2EA' : swatch.hex,
                      backgroundImage: swatch.hex === 'transparent' ? 'radial-gradient(#B8A48C 1px, transparent 1px)' : 'none',
                      backgroundSize: '4px 4px'
                    }}
                  />
                ))}
                <span className="text-xs font-mono text-[#1B1917] ml-2">{selectedColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Gallery: Non-uniform Arch Colonnade Pedestals */}
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GARMENTS.map((garment, idx) => {
            // Check matches
            const matchFabric = selectedFabric === 'All' || garment.fabric.toLowerCase().includes(selectedFabric.toLowerCase());
            const matchOccasion = selectedOccasion === 'All' || garment.occasion.toLowerCase().includes(selectedOccasion.toLowerCase());
            const matchColor = selectedColor === 'All' || garment.colorName.toLowerCase().includes(selectedColor.toLowerCase());
            const isMatch = matchFabric && matchOccasion && matchColor;

            return (
              <div
                key={garment.id}
                className={`relative transition-all duration-700 ${
                  isMatch
                    ? 'opacity-100 filter-none scale-100'
                    : 'opacity-25 filter blur-[4px] scale-[0.97] pointer-events-none'
                }`}
              >
                {/* Architectural Arch Frame */}
                <div className="arch-card p-6 flex flex-col justify-between min-h-[580px] bg-[#F1E9DC]/70 border border-[#B8A48C]/40 group hover:border-[#1B1917]">
                  {/* Top Header */}
                  <div className="flex items-center justify-between pb-3">
                    <span className="label-caps text-[#B8A48C]">{garment.edition}</span>
                    <span className="text-[10px] font-mono bg-white/70 px-2.5 py-0.5 rounded-full text-[#1B1917]">
                      {garment.occasion}
                    </span>
                  </div>

                  {/* Center Sculptural Pedestal & Garment Image */}
                  <div
                    onClick={() => isMatch && onSelectGarment && onSelectGarment(garment.id)}
                    className="relative w-full h-80 my-4 rounded-t-full overflow-hidden bg-[#FAF6EE] cursor-pointer shadow-subtle group-hover:shadow-float transition-all duration-500"
                  >
                    <img
                      src={garment.layers.photo}
                      alt={garment.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Subtle Sheer Veil Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B1917]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="btn-pill-ink text-xs py-2 px-4 shadow-lg">
                        <Eye size={14} />
                        <span>Inspect Art → Wear</span>
                      </span>
                    </div>

                    {/* Color Swatch Badge */}
                    <div
                      className="absolute top-4 right-4 w-4 h-4 rounded-full border border-white shadow-sm"
                      style={{ backgroundColor: garment.colorHex }}
                      title={garment.colorName}
                    />
                  </div>

                  {/* Bottom Pedestal Details */}
                  <div className="space-y-3 pt-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-2xl text-[#1B1917] group-hover:text-[#4A6B53] transition-colors">
                          {garment.name}
                        </h3>
                        <p className="text-xs font-mono text-[#B8A48C]">
                          By {garment.designer.name}
                        </p>
                      </div>
                      <button
                        onClick={() => isMatch && onSelectGarment && onSelectGarment(garment.id)}
                        className="w-8 h-8 rounded-full bg-[#E9DFCF] group-hover:bg-[#1B1917] group-hover:text-white transition-colors flex items-center justify-center text-[#1B1917]"
                        aria-label="View garment"
                      >
                        <ArrowUpRight size={16} />
                      </button>
                    </div>

                    <div className="running-stitch-h my-1" />

                    {/* Dynamic Pricing: Wholesale for Retailers, Retail for Customers */}
                    <div className="flex justify-between items-center text-xs">
                      {userRole === 'retail' ? (
                        <>
                          <div>
                            <span className="text-[10px] text-[#B8A48C] block uppercase font-mono">Wholesale MOQ {garment.moq}</span>
                            <strong className="font-serif text-lg text-[#1B1917]">
                              LKR {garment.wholesalePriceLKR.toLocaleString()}
                            </strong>
                          </div>
                          <span className="text-[10px] font-mono text-[#4A6B53] bg-[#4A6B53]/10 px-2 py-0.5 rounded">
                            Boutique Stock
                          </span>
                        </>
                      ) : (
                        <>
                          <div>
                            <span className="text-[10px] text-[#B8A48C] block uppercase font-mono">Direct Acquisition</span>
                            <strong className="font-serif text-lg text-[#1B1917]">
                              LKR {garment.retailPriceLKR.toLocaleString()}
                            </strong>
                          </div>
                          <span className="text-[10px] font-mono text-[#B8A48C]">
                            {garment.availability}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
