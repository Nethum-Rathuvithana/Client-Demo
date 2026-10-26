import React, { useState } from 'react';
import { Plus, Minus, Trash2, Send, Download, FileSpreadsheet, Check } from 'lucide-react';
import { GARMENTS } from '../data/fashionData';

export default function RetailRailBuilder() {
  // Rail Items State
  const [railItems, setRailItems] = useState([
    {
      garment: GARMENTS[0], // Peach Chiffon Gown
      quantity: 20, // starts at MOQ
      moq: 20
    },
    {
      garment: GARMENTS[1], // Travertine Cocoon Coat
      quantity: 15,
      moq: 15
    }
  ]);

  const [quoteSent, setQuoteSent] = useState(false);

  // Add garment to rail
  const handleAddToRail = (garment) => {
    const existing = railItems.find((item) => item.garment.id === garment.id);
    if (existing) {
      setRailItems((prev) =>
        prev.map((item) =>
          item.garment.id === garment.id ? { ...item, quantity: item.quantity + 5 } : item
        )
      );
    } else {
      setRailItems((prev) => [...prev, { garment, quantity: garment.moq, moq: garment.moq }]);
    }
  };

  const handleUpdateQty = (id, delta) => {
    setRailItems((prev) =>
      prev.map((item) => {
        if (item.garment.id === id) {
          const newQty = Math.max(item.moq, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemove = (id) => {
    setRailItems((prev) => prev.filter((item) => item.garment.id !== id));
  };

  // Calculations in LKR
  const grandTotalWholesaleLKR = railItems.reduce(
    (sum, item) => sum + item.garment.wholesalePriceLKR * item.quantity,
    0
  );

  const totalPieces = railItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="label-caps">B2B Wholesale Module</span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1B1917] mt-2">
              Virtual Clothing Rail Builder
            </h1>
            <p className="text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed">
              Assemble your boutique's seasonal rail directly from atelier collections. Configure order quantities with guaranteed MOQs and transmit an instant Line Sheet.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#B8A48C] block">Running Wholesale Total</span>
            <strong className="font-serif text-3xl text-[#1B1917]">
              LKR {grandTotalWholesaleLKR.toLocaleString()}
            </strong>
            <span className="block text-[11px] font-mono text-[#4A6B53]">
              {totalPieces} Pieces across {railItems.length} styles
            </span>
          </div>
        </div>

        {/* Section 1: The Virtual Rail Visual Experience */}
        <div className="linen-card p-6 md:p-10 bg-[#FAF7F0] border-2 border-[#B8A48C]/40 relative shadow-float">
          {/* Top Brass Rail Beam Visual */}
          <div className="relative mb-12">
            <div className="h-3 rounded-full bg-gradient-to-r from-[#B8A48C] via-[#E7B49A] to-[#B8A48C] shadow-md border border-[#96836d]" />
            <div className="flex justify-between px-12 -mt-1.5">
              <div className="w-2 h-8 bg-[#96836d] rounded" />
              <div className="w-2 h-8 bg-[#96836d] rounded" />
            </div>
          </div>

          {/* Hanging Garments on Rail */}
          {railItems.length === 0 ? (
            <div className="py-16 text-center text-[#B8A48C]">
              <p className="font-serif italic text-lg text-[#1B1917]">Your wholesale rail is currently empty.</p>
              <p className="text-xs mt-1">Select garments from the atelier catalogue below to build your boutique line sheet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {railItems.map((item) => (
                <div
                  key={item.garment.id}
                  className="relative p-6 rounded-2xl bg-white border border-[#B8A48C]/40 shadow-subtle flex flex-col justify-between"
                >
                  {/* Miniature Brass Hanger Top */}
                  <div className="w-8 h-4 border-t-2 border-r-2 border-[#B8A48C] rounded-tr-full mx-auto -mt-8 mb-3" />

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={item.garment.layers.photo}
                        alt={item.garment.name}
                        className="w-16 h-20 rounded-lg object-cover border border-[#E9DFCF]"
                      />
                      <div>
                        <h4 className="font-serif text-lg text-[#1B1917] font-medium leading-snug">
                          {item.garment.name}
                        </h4>
                        <span className="text-xs font-mono text-[#B8A48C] block">
                          MOQ: {item.moq} pcs
                        </span>
                        <span className="text-xs font-serif text-[#1B1917] block font-semibold mt-1">
                          LKR {item.garment.wholesalePriceLKR.toLocaleString()} / unit
                        </span>
                      </div>
                    </div>

                    <div className="running-stitch-h my-2" />

                    {/* Quantity Stepper enforcing MOQ */}
                    <div className="flex items-center justify-between py-2">
                      <span className="text-xs font-mono text-[#1B1917]">Order Units:</span>
                      <div className="flex items-center gap-2 bg-[#F7F2EA] px-2 py-1 rounded-lg border border-[#B8A48C]/40">
                        <button
                          onClick={() => handleUpdateQty(item.garment.id, -5)}
                          disabled={item.quantity <= item.moq}
                          className="w-6 h-6 rounded bg-white text-[#1B1917] flex items-center justify-center hover:bg-[#E9DFCF] disabled:opacity-40 transition-colors text-xs"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-mono text-xs font-bold text-[#1B1917] px-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQty(item.garment.id, 5)}
                          className="w-6 h-6 rounded bg-white text-[#1B1917] flex items-center justify-center hover:bg-[#E9DFCF] transition-colors text-xs"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E9DFCF] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-[#B8A48C] block uppercase font-mono">Line Total</span>
                      <strong className="font-serif text-base text-[#1B1917]">
                        LKR {(item.garment.wholesalePriceLKR * item.quantity).toLocaleString()}
                      </strong>
                    </div>

                    <button
                      onClick={() => handleRemove(item.garment.id)}
                      className="text-xs text-red-700/70 hover:text-red-700 flex items-center gap-1 font-mono transition-colors"
                    >
                      <Trash2 size={12} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Row */}
          {railItems.length > 0 && (
            <div className="mt-10 pt-6 border-t border-[#B8A48C]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#B8A48C]">
                Line Sheet Format: PDF & Digital Cryptographic Order Form
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => alert(`Line Sheet specification PDF exported for ${railItems.length} items.`)}
                  className="btn-pill-travertine text-xs"
                >
                  <Download size={14} />
                  <span>Download Line Sheet (PDF)</span>
                </button>

                <button
                  onClick={() => setQuoteSent(true)}
                  className="btn-pill-ink text-xs"
                >
                  <Send size={14} />
                  <span>{quoteSent ? '✓ Line Sheet Transmitted' : 'Send Official Quote Request'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Quick-Add Atelier Catalogue */}
        <div>
          <span className="label-caps">Available Designs to Rail</span>
          <h3 className="font-serif text-2xl text-[#1B1917] mt-1 mb-6">
            Add Atelier Pieces to Your Rail
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GARMENTS.map((g) => (
              <div
                key={g.id}
                className="p-4 bg-white rounded-2xl border border-[#B8A48C]/30 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <img
                    src={g.layers.photo}
                    alt={g.name}
                    className="w-full h-36 object-cover rounded-xl mb-3"
                  />
                  <h4 className="font-serif text-sm font-medium text-[#1B1917]">
                    {g.name}
                  </h4>
                  <div className="flex justify-between items-center text-xs font-mono text-[#B8A48C] mt-1">
                    <span>MOQ: {g.moq}</span>
                    <strong className="text-[#1B1917]">
                      LKR {g.wholesalePriceLKR.toLocaleString()}
                    </strong>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToRail(g)}
                  className="mt-3 btn-pill-travertine w-full justify-center text-xs py-1.5"
                >
                  + Add to Rail
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
