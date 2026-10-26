import React, { useState } from 'react';
import { Package, Truck, Sparkles, Check, Clock, ShieldCheck, MapPin, Sliders } from 'lucide-react';
import { GARMENTS } from '../data/fashionData';

export default function WearWing({ onSelectGarment }) {
  // Saved Wardrobe Pieces
  const [wardrobePieces, setWardrobePieces] = useState([
    {
      id: 'w1',
      garment: GARMENTS[0], // Peach Chiffon Gown
      type: 'Direct Acquisition',
      editionNumber: '01 of 18',
      statusStage: 4, // Production stage
      orderDate: 'October 18, 2026',
      trackingStep: 3, // Out for hand delivery
      customMeasurements: '172 cm · 84 / 64 / 91',
      certificateHash: '0x9b42e71f...'
    },
    {
      id: 'w2',
      garment: GARMENTS[1], // Travertine Cocoon Coat
      type: 'Bespoke Commission',
      editionNumber: 'Custom Toile',
      statusStage: 3, // Sample Approval
      orderDate: 'October 22, 2026',
      trackingStep: 2, // Muslin fitting approved
      customMeasurements: 'Extended Hem +5cm',
      certificateHash: '0x3a88c02d...'
    }
  ]);

  // Saved Fit Twin Measurements
  const [fitTwinProfile, setFitTwinProfile] = useState({
    height: 172,
    size: 'S',
    bust: 84,
    waist: 64,
    hips: 91,
    shoulderWidth: 38
  });

  const trackingSteps = [
    { title: 'Pattern Cut & Stitch', atelier: 'Colombo Atelier', date: 'Oct 19' },
    { title: 'Artisanal Inspection', atelier: 'Guild Quality Board', date: 'Oct 22' },
    { title: 'Dispatched in Linen Bag', atelier: 'Lanka Heritage Dispatch', date: 'Oct 25' },
    { title: 'Hand-Delivered to Patron', atelier: 'Express Courier', date: 'Pending' }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="label-caps">Wing 04 · Collector Wardrobe</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1B1917] mt-2">
              Wear: Your Private Collection
            </h1>
            <p className="text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed">
              Every acquired piece carries its permanent certificate of provenance, active creation thread, and verified Fit Twin measurements.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FAF6EE] px-4 py-2 rounded-full border border-[#B8A48C]/40 text-xs font-mono">
            <span>Patron Status:</span>
            <strong className="text-[#1B1917]">Patron Tier I · 2 Numbered Editions</strong>
          </div>
        </div>

        {/* Section 1: Active In-Flight Creations & Running Stitch Thread */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1B1917]">
              In-Flight Creation & Delivery Threads
            </h3>
            <span className="text-xs font-mono text-[#B8A48C]">
              {wardrobePieces.length} Garments in Pipeline
            </span>
          </div>

          <div className="space-y-8">
            {wardrobePieces.map((item) => (
              <div
                key={item.id}
                className="linen-card p-6 md:p-8 bg-[#FAF6EE] border border-[#B8A48C]/50 shadow-float"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Garment Preview */}
                  <div className="lg:col-span-3 flex items-center gap-4">
                    <img
                      src={item.garment.layers.photo}
                      alt={item.garment.name}
                      className="w-24 h-32 rounded-xl object-cover border border-[#B8A48C]/40 shadow-sm"
                    />
                    <div>
                      <span className="label-caps text-[#E7B49A] text-[10px]">
                        {item.type}
                      </span>
                      <h4 className="font-serif text-xl text-[#1B1917] mt-0.5">
                        {item.garment.name}
                      </h4>
                      <p className="text-xs font-mono text-[#B8A48C] mt-1">
                        Edition: {item.editionNumber}
                      </p>
                      <span className="inline-block mt-2 text-[10px] bg-[#E9DFCF] px-2 py-0.5 rounded text-[#1B1917] font-mono">
                        Cert: {item.certificateHash}
                      </span>
                    </div>
                  </div>

                  {/* The Running-Stitch Delivery Thread Track */}
                  <div className="lg:col-span-9 space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-[#1B1917] font-semibold">
                        Delivery Thread Tracking
                      </span>
                      <span className="font-mono text-[#4A6B53]">
                        ● Estimated Arrival: 2 Days
                      </span>
                    </div>

                    {/* Progress Thread Bar */}
                    <div className="relative py-4">
                      {/* Base running stitch */}
                      <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#B8A48C]/60 pointer-events-none" />

                      {/* Active colored running stitch */}
                      <div
                        className="absolute top-1/2 left-4 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#4A6B53] pointer-events-none transition-all duration-700"
                        style={{ width: `${(item.trackingStep / 4) * 85}%` }}
                      />

                      {/* Checkpoint Nodes */}
                      <div className="relative flex justify-between z-10">
                        {trackingSteps.map((step, sIdx) => {
                          const isDone = sIdx < item.trackingStep;
                          const isCurrent = sIdx === item.trackingStep;
                          return (
                            <div key={sIdx} className="flex flex-col items-center max-w-[120px] text-center">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${
                                  isDone
                                    ? 'bg-[#4A6B53] text-white shadow-sm'
                                    : isCurrent
                                    ? 'bg-[#1B1917] text-white ring-4 ring-[#E7B49A]/50'
                                    : 'bg-white text-[#B8A48C] border border-[#B8A48C]/40'
                                }`}
                              >
                                {isDone ? <Check size={12} /> : `0${sIdx + 1}`}
                              </div>
                              <span className="text-[11px] font-medium text-[#1B1917] mt-2">
                                {step.title}
                              </span>
                              <span className="text-[9px] font-mono text-[#B8A48C]">
                                {step.atelier}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Saved Fit Twin Profile */}
        <div className="linen-card p-6 md:p-10 bg-[#F1E9DC] border border-[#B8A48C]/40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <span className="label-caps">Saved Biometrics</span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1B1917] mt-1">
                Your Saved Fit Twin Profile
              </h3>
            </div>
            <span className="text-xs font-mono text-[#4A6B53] bg-[#4A6B53]/10 px-3 py-1 rounded-full">
              ✓ Synchronized Across All Ateliers
            </span>
          </div>

          <p className="text-xs md:text-sm text-[#1B1917]/70 font-sans max-w-xl leading-relaxed mb-6">
            When you browse pieces or order custom drapes, designers instantly receive your verified architectural proportions for zero-waste precision tailoring.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center">
              <span className="text-[10px] font-mono text-[#B8A48C] uppercase block">Height</span>
              <strong className="font-serif text-xl text-[#1B1917]">{fitTwinProfile.height} cm</strong>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center">
              <span className="text-[10px] font-mono text-[#B8A48C] uppercase block">Standard Size</span>
              <strong className="font-serif text-xl text-[#1B1917]">{fitTwinProfile.size} / UK 8</strong>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center">
              <span className="text-[10px] font-mono text-[#B8A48C] uppercase block">Bust</span>
              <strong className="font-serif text-xl text-[#1B1917]">{fitTwinProfile.bust} cm</strong>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center">
              <span className="text-[10px] font-mono text-[#B8A48C] uppercase block">Waist</span>
              <strong className="font-serif text-xl text-[#1B1917]">{fitTwinProfile.waist} cm</strong>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center">
              <span className="text-[10px] font-mono text-[#B8A48C] uppercase block">Hips</span>
              <strong className="font-serif text-xl text-[#1B1917]">{fitTwinProfile.hips} cm</strong>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center">
              <span className="text-[10px] font-mono text-[#B8A48C] uppercase block">Shoulder</span>
              <strong className="font-serif text-xl text-[#1B1917]">{fitTwinProfile.shoulderWidth} cm</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
