import React, { useState, useRef } from 'react';
import { X, ArrowRight, RotateCw, Check, Sparkles, Sliders, ChevronDown } from 'lucide-react';
import { GARMENTS, JOURNEY_STAGES } from '../data/fashionData';

export default function GarmentDetailModal({ garmentId, onClose, onSelectProfile, userRole = 'customer' }) {
  const garment = GARMENTS.find((g) => g.id === garmentId) || GARMENTS[0];

  // Art -> Wear Unzip Slider state (0: 100% sketch, 50: drape, 100: on-model photo)
  const [sliderPos, setSliderPos] = useState(50);
  const [isUnzipping, setIsUnzipping] = useState(false);
  const [activeRevealLayer, setActiveRevealLayer] = useState('split'); // 'sketch', 'drape', 'photo', 'split'

  // Hang-Tag Flip state: 'front' (Wear it) vs 'back' (Stock it)
  const [tagSide, setTagSide] = useState(userRole === 'retail' ? 'back' : 'front');

  // Fit Twin State
  const [userHeight, setUserHeight] = useState(172);
  const [userSize, setUserSize] = useState('S');
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customNotes, setCustomNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [quoteRequested, setQuoteRequested] = useState(false);

  // Unzip drag handler
  const containerRef = useRef(null);

  const handlePointerMove = (e) => {
    if (!isUnzipping || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    setIsCustomModalOpen(false);
    alert(`Custom commission request submitted directly to ${garment.designer.name}. You will receive tailored fabric swatches & measurement confirmations in your WEAR studio.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-[#1B1917]/70 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl my-auto bg-[#F7F2EA] rounded-3xl border border-[#B8A48C]/50 shadow-pedestal overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#B8A48C]/30 bg-[#F1E9DC]/60">
          <div className="flex items-center gap-3">
            <span className="label-caps-dark">A to W · Gallery Archive</span>
            <span className="text-xs text-[#B8A48C]">/</span>
            <span className="text-xs font-mono text-[#B8A48C]">{garment.edition}</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#E9DFCF] hover:bg-[#1B1917] hover:text-[#F7F2EA] transition-colors flex items-center justify-center text-[#1B1917]"
            aria-label="Close garment exhibition"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 md:p-10 space-y-12">
          {/* Main Grid: Art->Wear Reveal (Left) & Spring Hang-Tag (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Art -> Wear Reveal Interactive Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3">
                <span className="label-caps">Art → Wear Reveal · Drag Seam to Unzip</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSliderPos(0)}
                    className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${sliderPos <= 15 ? 'bg-[#1B1917] text-white' : 'bg-[#E9DFCF] text-[#1B1917]'}`}
                  >
                    Sketch
                  </button>
                  <button
                    onClick={() => setSliderPos(50)}
                    className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${sliderPos > 15 && sliderPos < 85 ? 'bg-[#1B1917] text-white' : 'bg-[#E9DFCF] text-[#1B1917]'}`}
                  >
                    3D Drape
                  </button>
                  <button
                    onClick={() => setSliderPos(100)}
                    className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${sliderPos >= 85 ? 'bg-[#1B1917] text-white' : 'bg-[#E9DFCF] text-[#1B1917]'}`}
                  >
                    On Model
                  </button>
                </div>
              </div>

              {/* Reveal Interactive Window */}
              <div
                ref={containerRef}
                onPointerDown={() => setIsUnzipping(true)}
                onPointerUp={() => setIsUnzipping(false)}
                onPointerLeave={() => setIsUnzipping(false)}
                onPointerMove={handlePointerMove}
                className="relative w-full h-[460px] md:h-[520px] rounded-2xl overflow-hidden shadow-float cursor-ew-resize select-none border border-[#B8A48C]/40 bg-[#FAF7F0]"
              >
                {/* Background Layer: High-Fashion Model Photo (Wear) */}
                <img
                  src={garment.layers.photo}
                  alt={`${garment.name} on model`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foreground Layer: Charcoal & Graphite Sketch (Art) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={garment.layers.sketch}
                    alt={`${garment.name} architectural sketch`}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-[0.25]"
                    style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                  />
                  {/* Watermark sketch tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#1B1917] uppercase tracking-wider">
                    Graphite Study · Maya S.
                  </div>
                </div>

                {/* Vertical Running Stitch Seam Divider */}
                <div
                  className="absolute top-0 bottom-0 z-20 pointer-events-none -translate-x-1/2 flex flex-col items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="h-full w-0.5 border-l-2 border-dashed border-[#E7B49A] shadow-md" />
                  {/* Seam Zipper Knot Disc */}
                  <div className="absolute w-8 h-8 rounded-full bg-[#1B1917] text-[#F7F2EA] flex items-center justify-center shadow-lg border-2 border-[#E7B49A]">
                    <span className="text-[10px] font-mono font-bold">⇄</span>
                  </div>
                </div>

                {/* Label Badges */}
                <div className="absolute bottom-4 right-4 bg-[#1B1917]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#F7F2EA]">
                  On Model: {garment.credits.modelledBy}
                </div>
              </div>

              <p className="text-xs text-[#B8A48C] font-mono mt-3">
                Drag the running-stitch seam across to explore the transition from concept to garment.
              </p>
            </div>

            {/* Right: Spring Physics Hang-Tag & Dual Commerce Mode */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="label-caps">Physical Spring Hang-Tag</span>
                {/* Flip Toggle Button */}
                <button
                  onClick={() => setTagSide(tagSide === 'front' ? 'back' : 'front')}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#1B1917] bg-[#E9DFCF] px-3 py-1 rounded-full hover:bg-[#1B1917] hover:text-[#F7F2EA] transition-all shadow-sm"
                >
                  <RotateCw size={12} />
                  <span>Flip to {tagSide === 'front' ? 'Wholesale (Stock it)' : 'Customer (Wear it)'}</span>
                </button>
              </div>

              {/* The Reversible Hang-Tag Card */}
              <div
                className={`relative w-full rounded-2xl p-6 md:p-8 border-2 transition-all duration-700 shadow-float ${
                  tagSide === 'front'
                    ? 'bg-[#FAF6EE] border-[#E7B49A]'
                    : 'bg-[#F2ECE1] border-[#B8A48C]'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Brass Eyelet Hole at top */}
                <div className="w-5 h-5 rounded-full border-2 border-[#B8A48C] bg-white mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-[#1B1917]" />
                </div>

                {/* FRONT SIDE: "Wear it" (Customer) */}
                {tagSide === 'front' ? (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center">
                      <span className="label-caps text-[#E7B49A]">Front · Direct Patronage</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#1B1917] mt-1">
                        {garment.name}
                      </h3>
                      <p className="text-xs text-[#B8A48C] font-mono mt-1">
                        Designed by {garment.designer.name}
                      </p>
                    </div>

                    <div className="running-stitch-h" />

                    {/* Price in LKR */}
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase font-mono text-[#B8A48C]">Price</span>
                      <div className="text-right">
                        <span className="font-serif text-3xl font-medium text-[#1B1917]">
                          LKR {garment.retailPriceLKR.toLocaleString()}
                        </span>
                        <span className="block text-[10px] text-[#4A6B53] font-mono">
                          Includes atelier provenance certificate
                        </span>
                      </div>
                    </div>

                    {/* Size Selector with Tape Measure Visual */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-[#1B1917]">Select Measurement Ribbon:</span>
                        <span className="text-[10px] text-[#B8A48C] font-mono">Tape Measure Mode</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {['XS', 'S', 'M', 'L'].map((sz) => (
                          <button
                            key={sz}
                            onClick={() => setUserSize(sz)}
                            className={`py-2 text-xs font-mono rounded-lg border transition-all cursor-measure ${
                              userSize === sz
                                ? 'bg-[#1B1917] text-white border-[#1B1917] shadow-sm'
                                : 'bg-white text-[#1B1917] border-[#B8A48C]/40 hover:border-[#1B1917]'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-2">
                      <button
                        onClick={() => setOrderConfirmed(true)}
                        className="btn-pill-ink w-full justify-center text-xs py-3"
                      >
                        {orderConfirmed ? '✓ Added to Wardrobe' : 'Acquire for Direct Wear'}
                      </button>

                      <button
                        onClick={() => setIsCustomModalOpen(true)}
                        className="btn-pill-travertine w-full justify-center text-xs py-2.5"
                      >
                        Request a Custom Version (Made to Measure)
                      </button>
                    </div>

                    <div className="text-[11px] text-[#B8A48C] text-center font-mono">
                      {garment.availability} · Ships in protected linen archive bag
                    </div>
                  </div>
                ) : (
                  /* BACK SIDE: "Stock it" (Retailer) */
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center">
                      <span className="label-caps text-[#4A6B53]">Back · Retail & Wholesale</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#1B1917] mt-1">
                        Boutique Wholesale Order
                      </h3>
                      <p className="text-xs text-[#B8A48C] font-mono mt-1">
                        Curated Rail Supply for Boutiques
                      </p>
                    </div>

                    <div className="running-stitch-h" />

                    {/* Wholesale Price + MOQ */}
                    <div className="p-4 bg-white/80 rounded-xl border border-[#B8A48C]/30 space-y-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-mono text-[#B8A48C]">Wholesale Price:</span>
                        <span className="font-serif text-2xl font-semibold text-[#1B1917]">
                          LKR {garment.wholesalePriceLKR.toLocaleString()} / pc
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-[#B8A48C]">Minimum Order Quantity (MOQ):</span>
                        <strong className="text-[#1B1917] bg-[#E9DFCF] px-2 py-0.5 rounded font-mono">
                          {garment.moq} pieces
                        </strong>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-[#B8A48C]">Est. Production Run:</span>
                        <span className="text-[#1B1917] font-mono">21 Working Days</span>
                      </div>
                    </div>

                    {/* Wholesale Actions */}
                    <div className="space-y-3 pt-2">
                      <button
                        onClick={() => setQuoteRequested(true)}
                        className="btn-pill-ink w-full justify-center text-xs py-3"
                      >
                        {quoteRequested ? '✓ Quote Registered' : 'Request Official Wholesale Quote'}
                      </button>

                      <button
                        onClick={() => alert(`Physical muslin sample and fabric swatch swatch pack for ${garment.name} dispatched to your boutique address.`)}
                        className="btn-pill-travertine w-full justify-center text-xs py-2.5"
                      >
                        Request Physical Sample & Fabric Swatch
                      </button>
                    </div>

                    <div className="text-[11px] text-[#B8A48C] text-center font-mono">
                      Includes retailer linesheet & rights to photography for in-store marketing
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section: Fit Twin Mannequin Alignment */}
          <div className="linen-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <span className="label-caps">Fit Twin Alignment</span>
                <h4 className="font-serif text-2xl text-[#1B1917] mt-1">
                  Compare Proportions with Editorial Model
                </h4>
              </div>
              <div className="text-xs font-mono bg-[#E9DFCF] px-3 py-1 rounded-full text-[#1B1917]">
                Model: {garment.fitTwin.modelHeight} cm · Size {garment.fitTwin.modelSize}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Height Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>Your Height:</span>
                  <strong>{userHeight} cm</strong>
                </div>
                <input
                  type="range"
                  min="150"
                  max="195"
                  value={userHeight}
                  onChange={(e) => setUserHeight(Number(e.target.value))}
                  className="w-full accent-[#1B1917]"
                />
                <span className="text-[10px] text-[#B8A48C] font-mono">
                  Height variance: {userHeight - garment.fitTwin.modelHeight > 0 ? `+${userHeight - garment.fitTwin.modelHeight}` : userHeight - garment.fitTwin.modelHeight} cm
                </span>
              </div>

              {/* Fit Twin Feedback Badge */}
              <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#B8A48C]/40 text-xs space-y-1">
                <span className="label-caps text-[#4A6B53]">Fit Twin Match: 96%</span>
                <p className="text-[#1B1917] font-medium mt-1">
                  Worn by a model of {garment.fitTwin.modelHeight} cm, size {garment.fitTwin.modelSize}, almost identical to you.
                </p>
                <p className="text-[#B8A48C] text-[11px] pt-1">
                  {garment.fitTwin.recommendation}
                </p>
              </div>

              {/* Dynamic 3D Mannequin Visual Representation */}
              <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-[#B8A48C]/30 h-28">
                <div
                  className="w-16 bg-[#E7B49A]/30 border-2 border-[#1B1917] rounded-t-full transition-all duration-300 flex flex-col items-center justify-center text-[10px] font-mono text-[#1B1917]"
                  style={{
                    height: `${Math.min(95, Math.max(50, (userHeight / 180) * 80))}px`,
                    width: userSize === 'L' ? '54px' : userSize === 'M' ? '46px' : '40px'
                  }}
                >
                  <span>{userSize}</span>
                  <span className="text-[8px] opacity-70">{userHeight}cm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Journey Strip with Provenance Dates */}
          <div className="space-y-4">
            <span className="label-caps">Provenance & Creation Journey</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {garment.journeyDates.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-[#B8A48C]/30 shadow-subtle space-y-1">
                  <span className="text-[10px] font-mono text-[#E7B49A] block">0{idx + 1}</span>
                  <p className="text-xs font-medium text-[#1B1917]">{item.stage}</p>
                  <p className="text-[10px] text-[#B8A48C] font-mono">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Film Credits Roll */}
          <div className="pt-8 border-t border-[#B8A48C]/30 text-center space-y-4">
            <span className="label-caps">Garment Credits</span>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
              <div className="p-2">
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Designed By</span>
                <strong className="text-[#1B1917] text-sm font-serif">{garment.credits.designedBy}</strong>
              </div>
              <div className="p-2">
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Sample Approved</span>
                <strong className="text-[#1B1917] text-sm font-serif">{garment.credits.sampleApproved}</strong>
              </div>
              <div className="p-2">
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Produced By</span>
                <strong className="text-[#1B1917] text-sm font-serif">{garment.credits.producedBy}</strong>
              </div>
              <div className="p-2">
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Photographed By</span>
                <strong className="text-[#1B1917] text-sm font-serif">{garment.credits.photographedBy}</strong>
              </div>
              <div className="p-2">
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Modelled By</span>
                <strong className="text-[#1B1917] text-sm font-serif">{garment.credits.modelledBy}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Request Custom Version Dialog */}
      {isCustomModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-[#FAF6EE] p-8 rounded-3xl max-w-lg w-full border border-[#B8A48C] shadow-pedestal space-y-4">
            <h3 className="font-serif text-2xl text-[#1B1917]">Commission Custom Drape</h3>
            <p className="text-xs text-[#1B1917]/70">
              Submit your bespoke measurements and styling notes directly to {garment.designer.name}.
            </p>
            <form onSubmit={handleCustomSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-[#B8A48C] block mb-1">Your Height & Bust / Waist / Hips (cm)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 172cm · 86 / 66 / 92"
                  className="w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-[#B8A48C] block mb-1">Atelier Notes or Hem Modification</label>
                <textarea
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Specify length preferences or bespoke color adjustments..."
                  className="w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(false)}
                  className="btn-pill-travertine text-xs"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-pill-ink text-xs">
                  Transmit to Atelier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
