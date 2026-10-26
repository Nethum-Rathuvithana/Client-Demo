import React, { useState } from 'react';
import { UploadCloud, Scissors, Pin, ArrowUpRight, Check, TrendingUp, Mail, FileText, Sparkles } from 'lucide-react';
import { GARMENTS, JOURNEY_STAGES } from '../data/fashionData';

export default function CreateWing() {
  // State for cutting table upload
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [uploadedDesign, setUploadedDesign] = useState(null);
  const [autoTags, setAutoTags] = useState([]);

  // Pinned inbox notes
  const [inboxNotes, setInboxNotes] = useState([
    {
      id: 'n1',
      sender: 'The Cinnamon Arch Boutique',
      type: 'Wholesale Quote',
      title: 'Wholesale Order Request · 25 pcs',
      detail: 'Requesting 25 units of Peach Chiffon Gown at LKR 38,000 wholesale for Galle Fort salon.',
      date: '2 hours ago',
      status: 'pending'
    },
    {
      id: 'n2',
      sender: 'House of Sylvan',
      type: 'Brand Co-Lab',
      title: 'Solstice Colonnade Capsule Drop',
      detail: 'Invitation to co-design 3 exclusive looks for upcoming November unreleased drop.',
      date: 'Yesterday',
      status: 'pending'
    },
    {
      id: 'n3',
      sender: 'Keshini Perera (Model)',
      type: 'Shoot Application',
      title: 'Campaign Model Booking Match',
      detail: 'Confirmed Fit Twin match (174cm, Size S) available for colonnade lookbook.',
      date: 'Oct 24',
      status: 'accepted'
    }
  ]);

  const handleSimulatedUpload = () => {
    setUploadedDesign({
      title: 'Monolithic Fluted Cape 01',
      timestamp: 'Just now',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'
    });
    setAutoTags([
      '📌 Evening Wrap',
      '📌 100% Unbleached Silk',
      '📌 Zero-Waste Bias Cut',
      '📌 Yield Efficiency: 94%'
    ]);
  };

  const handleActionNote = (id, action) => {
    setInboxNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, status: action } : n))
    );
  };

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="label-caps">Wing 03 · Atelier Studio</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1B1917] mt-2">
              The Designer's Studio
            </h1>
            <p className="text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed">
              Drop sketches onto the digital cutting table to generate verified technical packs. Track your six-stage threads and oversee boutique wholesale inquiries.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#FAF6EE] px-4 py-2 rounded-full border border-[#B8A48C]/40 text-xs font-mono">
            <span>Atelier Status:</span>
            <span className="text-[#4A6B53] font-semibold">● 3 Active Master Runs</span>
          </div>
        </div>

        {/* Section 1: The Cutting Table Upload Experience */}
        <div className="linen-card p-6 md:p-10 bg-[#FAF7F0] border-2 border-dashed border-[#B8A48C]/60 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Drop Zone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDraggingOver(true);
              }}
              onDragLeave={() => setIsDraggingOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDraggingOver(false);
                handleSimulatedUpload();
              }}
              onClick={handleSimulatedUpload}
              className={`w-full lg:w-1/2 min-h-[300px] rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8 text-center cursor-pointer ${
                isDraggingOver
                  ? 'border-[#1B1917] bg-[#E7B49A]/20 scale-[1.01]'
                  : 'border-[#B8A48C] bg-white hover:border-[#1B1917] hover:bg-[#FAF6EE]'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-[#E9DFCF] text-[#1B1917] flex items-center justify-center mb-4 shadow-sm">
                <Scissors size={28} />
              </div>

              <h3 className="font-serif text-2xl text-[#1B1917]">
                The Cutting Table
              </h3>
              <p className="text-xs text-[#1B1917]/70 mt-2 max-w-sm leading-relaxed">
                Drag a sketch, CAD spec or technical illustration here (or click to sample). Automated AI fiber detection pins specs in real-time.
              </p>

              <span className="mt-4 btn-pill-ink text-xs py-2 px-5">
                <UploadCloud size={14} />
                <span>Upload Architectural Sketch</span>
              </span>
            </div>

            {/* Auto-Detected Technical Pinned Spec Preview */}
            <div className="w-full lg:w-1/2 p-6 bg-white rounded-2xl border border-[#B8A48C]/40 shadow-subtle min-h-[300px] flex flex-col justify-between">
              {uploadedDesign ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="label-caps text-[#4A6B53]">● Registered Spec #SK-908</span>
                      <h4 className="font-serif text-xl text-[#1B1917] mt-0.5">
                        {uploadedDesign.title}
                      </h4>
                      <span className="text-[10px] text-[#B8A48C] font-mono">
                        Cryptographic Hash: 0x7c92b...verified
                      </span>
                    </div>
                    <img
                      src={uploadedDesign.image}
                      alt="Uploaded sketch"
                      className="w-16 h-16 rounded-lg object-cover border border-[#E9DFCF]"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#B8A48C] block mb-2">
                      Auto-Detected Composition Pins:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {autoTags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#FAF6EE] text-[#1B1917] border border-[#B8A48C]/40 rounded-full text-xs font-mono shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E9DFCF] flex items-center justify-between">
                    <span className="text-xs text-[#4A6B53] font-mono">
                      ✓ Ready for Stage 03 Sample Cutting
                    </span>
                    <button
                      onClick={() => alert(`Design routed to Lanka Fine Silk Weavers for muslin toile creation.`)}
                      className="btn-pill-ink text-xs py-2 px-4"
                    >
                      Commission Muslin Sample →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-10 text-[#B8A48C]">
                  <Pin size={24} className="mb-2 text-[#E7B49A]" />
                  <p className="font-serif italic text-base text-[#1B1917]">Cutting table currently waiting.</p>
                  <p className="text-xs mt-1">Upload a sketch to view automated yarn categorization and pattern layout.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Flowing Ribbon Performance Charts */}
        <div className="linen-card p-6 md:p-8 bg-[#F1E9DC]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <span className="label-caps">Studio Analytics</span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1B1917] mt-1">
                Flowing Ribbon Performance
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono bg-[#4A6B53]/15 text-[#4A6B53] px-3 py-1 rounded-full font-semibold">
                +62% Gallery Discovery
              </span>
              <span className="text-xs font-mono bg-[#4A6B53]/15 text-[#4A6B53] px-3 py-1 rounded-full font-semibold">
                +48% Wholesale Inquiries
              </span>
            </div>
          </div>

          {/* Flowing Ribbon Waves (SVG) */}
          <div className="relative w-full h-48 bg-white/70 rounded-2xl p-4 border border-[#B8A48C]/40 overflow-hidden flex items-end">
            <svg className="w-full h-full" viewBox="0 0 600 160" preserveAspectRatio="none">
              <defs>
                <linearGradient id="peachRibbon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E7B49A" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#E7B49A" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="taupeRibbon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B8A48C" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#B8A48C" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Secondary Wave */}
              <path
                d="M0,100 C120,40 240,140 360,70 C480,20 540,80 600,40 L600,160 L0,160 Z"
                fill="url(#taupeRibbon)"
              />
              {/* Primary Ribbon Wave */}
              <path
                d="M0,80 C100,120 200,30 320,60 C420,90 500,20 600,10 L600,160 L0,160 Z"
                fill="url(#peachRibbon)"
              />
              <path
                d="M0,80 C100,120 200,30 320,60 C420,90 500,20 600,10"
                fill="none"
                stroke="#1B1917"
                strokeWidth="2"
                strokeDasharray="6 4"
                className="thread-animated"
              />
            </svg>

            {/* Metric Floating Badges */}
            <div className="absolute top-4 left-6 flex items-center gap-6 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Direct Wear Sales</span>
                <strong className="font-serif text-lg text-[#1B1917]">LKR 1,240,000</strong>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Wholesale Rail Royalties</span>
                <strong className="font-serif text-lg text-[#1B1917]">LKR 3,480,000</strong>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#B8A48C] block">Boutique Inquiries</span>
                <strong className="font-serif text-lg text-[#4A6B53]">34 Active</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Corkboard Studio Inbox */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="label-caps">Studio Corkboard</span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1B1917] mt-1">
                Pinned Inquiries & Wholesale Dispatches
              </h3>
            </div>
            <span className="text-xs font-mono text-[#B8A48C]">
              {inboxNotes.filter(n => n.status === 'pending').length} Action Items Pinned
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inboxNotes.map((note) => (
              <div
                key={note.id}
                className="relative p-6 rounded-2xl bg-[#FAF6EE] border border-[#B8A48C]/50 shadow-subtle flex flex-col justify-between min-h-[220px]"
              >
                {/* Visual Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#E7B49A] border-2 border-white shadow-sm flex items-center justify-center text-[10px]">
                  📌
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2 pt-2">
                    <span className="label-caps text-[#E7B49A] text-[10px]">{note.type}</span>
                    <span className="text-[10px] font-mono text-[#B8A48C]">{note.date}</span>
                  </div>

                  <h4 className="font-serif text-lg text-[#1B1917] font-medium leading-snug">
                    {note.title}
                  </h4>
                  <p className="text-xs font-mono text-[#B8A48C] mt-0.5">From: {note.sender}</p>

                  <p className="text-xs text-[#1B1917]/80 mt-3 leading-relaxed">
                    {note.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9DFCF] flex items-center justify-between">
                  {note.status === 'accepted' ? (
                    <span className="text-xs font-mono text-[#4A6B53]">✓ Approved & Thread Active</span>
                  ) : note.status === 'declined' ? (
                    <span className="text-xs font-mono text-[#B8A48C]">Archived</span>
                  ) : (
                    <div className="flex gap-2 w-full">
                      <button
                        onClick={() => handleActionNote(note.id, 'accepted')}
                        className="btn-pill-ink text-[11px] py-1.5 px-3 flex-1 justify-center"
                      >
                        Accept Terms
                      </button>
                      <button
                        onClick={() => handleActionNote(note.id, 'declined')}
                        className="btn-pill-travertine text-[11px] py-1.5 px-3"
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
