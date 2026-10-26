import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, ShoppingBag, Eye, Moon } from 'lucide-react';
import { ROLES } from '../data/fashionData';
import { soundEngine } from './SoundSystem';

export default function NavigationHeader({
  activeNav,
  onNavigate,
  currentRole,
  onOpenRoleModal,
  soundMuted,
  onToggleSound,
  onOpenRail,
  onOpenUnusual
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'discover', label: 'DISCOVER' },
    { id: 'connect', label: 'CONNECT' },
    { id: 'create', label: 'CREATE' },
    { id: 'wear', label: 'WEAR' }
  ];

  const currentRoleData = ROLES.find((r) => r.id === currentRole) || ROLES[0];

  const handleNavClick = (id) => {
    soundEngine.playFabricRustle();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F2EA]/90 backdrop-blur-md border-b border-[#B8A48C]/30 transition-all select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logotype */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-[#1B1917] text-[#F7F2EA] flex items-center justify-center font-serif text-base font-bold shadow-sm group-hover:scale-105 transition-transform">
            AW
          </div>
          <div>
            <span className="font-serif text-2xl tracking-wide text-[#1B1917] block leading-none">
              A to W
            </span>
            <span className="label-caps text-[9px] tracking-[0.25em] text-[#B8A48C]">
              Art to Wear
            </span>
          </div>
        </div>

        {/* Central 4-Word Primary Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`stitch-link text-xs font-mono tracking-[0.22em] uppercase py-1 font-medium transition-colors ${
                  isActive ? 'text-[#1B1917] active font-bold' : 'text-[#1B1917]/70 hover:text-[#1B1917]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Tools: Role Pill, Rail, Unusual, Audio Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Virtual Rail quick link */}
          <button
            onClick={() => {
              soundEngine.playFabricRustle();
              onOpenRail();
            }}
            className="flex items-center gap-1.5 text-xs font-mono bg-[#E9DFCF] text-[#1B1917] px-3 py-1.5 rounded-full hover:bg-[#F1E9DC] transition-colors"
            title="Open Virtual Wholesale Rail Builder"
          >
            <ShoppingBag size={13} />
            <span>Rail</span>
          </button>

          {/* The Unusual quick link */}
          <button
            onClick={() => {
              soundEngine.playFabricRustle();
              onOpenUnusual();
            }}
            className="flex items-center gap-1.5 text-xs font-mono bg-[#1B1917] text-[#F7F2EA] px-3 py-1.5 rounded-full hover:bg-[#2b2825] transition-colors"
            title="Enter The Unusual Theatrical Dark Room"
          >
            <Moon size={13} className="text-[#E7B49A]" />
            <span>The Unusual</span>
          </button>

          {/* Role Pill Switcher */}
          <button
            onClick={onOpenRoleModal}
            className="flex items-center gap-1.5 text-xs font-mono bg-[#F1E9DC] border border-[#B8A48C]/50 text-[#1B1917] px-3.5 py-1.5 rounded-full hover:border-[#1B1917] transition-all"
            title="Switch your viewing perspective"
          >
            <span className="w-2 h-2 rounded-full bg-[#E7B49A]" />
            <span className="text-[#B8A48C]">Role:</span>
            <strong className="font-semibold">{currentRoleData.name}</strong>
          </button>

          {/* Audio Fabric Rustle / Room Tone Toggle */}
          <button
            onClick={onToggleSound}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              soundMuted
                ? 'bg-[#E9DFCF] text-[#B8A48C] hover:text-[#1B1917]'
                : 'bg-[#1B1917] text-[#F7F2EA] ring-2 ring-[#E7B49A]'
            }`}
            aria-label="Toggle Sound"
            title={soundMuted ? 'Turn Sound On (Soft room tone & fabric rustle)' : 'Mute Sound'}
          >
            {soundMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleSound}
            className="w-8 h-8 rounded-full bg-[#E9DFCF] flex items-center justify-center text-[#1B1917]"
          >
            {soundMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-[#E9DFCF] flex items-center justify-center text-[#1B1917]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F2EA] border-b border-[#B8A48C]/30 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="space-y-3 pb-4 border-b border-[#E9DFCF]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left font-serif text-2xl ${
                  activeNav === item.id ? 'text-[#1B1917] font-bold' : 'text-[#1B1917]/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                onOpenRail();
                setMobileMenuOpen(false);
              }}
              className="btn-pill-travertine w-full justify-center text-xs py-2"
            >
              Wholesale Rail Builder
            </button>
            <button
              onClick={() => {
                onOpenUnusual();
                setMobileMenuOpen(false);
              }}
              className="btn-pill-ink w-full justify-center text-xs py-2"
            >
              The Unusual Pavilion
            </button>
            <button
              onClick={() => {
                onOpenRoleModal();
                setMobileMenuOpen(false);
              }}
              className="btn-pill-travertine w-full justify-center text-xs py-2"
            >
              Switch Role ({currentRoleData.name})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
