import React, { useState, useEffect } from 'react';
import NavigationHeader from './components/NavigationHeader';
import HomeColonnade from './components/HomeColonnade';
import DiscoverWing from './wings/DiscoverWing';
import ConnectWing from './wings/ConnectWing';
import CreateWing from './wings/CreateWing';
import WearWing from './wings/WearWing';
import RetailRailBuilder from './wings/RetailRailBuilder';
import TheUnusualWing from './wings/TheUnusualWing';
import GarmentDetailModal from './wings/GarmentDetailModal';
import EnterAsModal from './components/EnterAsModal';
import CurtainTransition from './components/CurtainTransition';
import CursorThreadTrail from './components/CursorThreadTrail';
import LoaderNeedle from './components/LoaderNeedle';
import { soundEngine } from './components/SoundSystem';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [previousNav, setPreviousNav] = useState('home');
  const [isCurtainTransitioning, setIsCurtainTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('right');

  // Role State (default: 'customer' or read from localStorage)
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('a_to_w_role') || 'customer';
  });

  // Modal States
  const [showEnterAsModal, setShowEnterAsModal] = useState(false);
  const [selectedGarmentId, setSelectedGarmentId] = useState(null);

  // Audio State
  const [soundMuted, setSoundMuted] = useState(true);

  // Initial Loader state
  const [isLoading, setIsLoading] = useState(true);

  // 1. Initial Visit Check
  useEffect(() => {
    const savedRole = localStorage.getItem('a_to_w_role');
    if (!savedRole) {
      // First visit: show "How will you wear A to W?" threshold doors
      setShowEnterAsModal(true);
    }
  }, []);

  // 2. Dynamic Daylight Tint based on local time
  useEffect(() => {
    const updateTimeTint = () => {
      const hour = new Date().getHours();
      let mode = 'morning';
      if (hour >= 16 && hour < 19) {
        mode = 'golden-hour';
      } else if (hour >= 19 || hour < 6) {
        mode = 'evening';
      }
      document.body.setAttribute('data-time-mode', mode);
    };

    updateTimeTint();
    const interval = setInterval(updateTimeTint, 60000);
    return () => clearInterval(interval);
  }, []);

  // Navigation Handler with Curtain Transition
  const handleNavigate = (newNav) => {
    if (newNav === activeNav) return;
    setPreviousNav(activeNav);
    setTransitionDirection(newNav === 'home' ? 'left' : 'right');
    setIsCurtainTransitioning(true);

    setTimeout(() => {
      setActiveNav(newNav);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 350);

    setTimeout(() => {
      setIsCurtainTransitioning(false);
    }, 700);
  };

  // Sound Toggle Handler
  const handleToggleSound = () => {
    const isNowActive = soundEngine.toggle();
    setSoundMuted(!isNowActive);
  };

  const isTheatricalMode = activeNav === 'unusual';

  return (
    <div className={`min-h-screen relative font-sans ${isTheatricalMode ? 'theatrical-dark' : ''}`}>
      {/* 1. Initial Needle Stitches Loader */}
      {isLoading && (
        <LoaderNeedle onComplete={() => setIsLoading(false)} />
      )}

      {/* 2. Film Grain Overlay (3-4% subtle tactile luxury) */}
      <div className="film-grain" />

      {/* 3. Soft Dynamic Sunbeam Cursor Gradient */}
      {!isTheatricalMode && <div className="sunbeam-ambient" />}

      {/* 4. Continuous Running-Stitch Cursor Trail (600ms) */}
      <CursorThreadTrail />

      {/* 5. Sheer Curtain Wipe on Page Change */}
      <CurtainTransition
        isChanging={isCurtainTransitioning}
        direction={transitionDirection}
        isTheatrical={isTheatricalMode}
      />

      {/* 6. Navigation Header (Unless inside The Unusual) */}
      {!isTheatricalMode && (
        <NavigationHeader
          activeNav={activeNav}
          onNavigate={handleNavigate}
          currentRole={userRole}
          onOpenRoleModal={() => setShowEnterAsModal(true)}
          soundMuted={soundMuted}
          onToggleSound={handleToggleSound}
          onOpenRail={() => handleNavigate('rail')}
          onOpenUnusual={() => handleNavigate('unusual')}
        />
      )}

      {/* 7. Active Wing View Router */}
      <main className="w-full">
        {activeNav === 'home' && (
          <HomeColonnade
            onNavigate={handleNavigate}
            onSelectGarment={(id) => setSelectedGarmentId(id)}
            userRole={userRole}
            onOpenRoleModal={() => setShowEnterAsModal(true)}
          />
        )}

        {activeNav === 'discover' && (
          <DiscoverWing
            onSelectGarment={(id) => setSelectedGarmentId(id)}
            userRole={userRole}
          />
        )}

        {activeNav === 'connect' && (
          <ConnectWing
            onSelectGarment={(id) => setSelectedGarmentId(id)}
          />
        )}

        {activeNav === 'create' && (
          <CreateWing />
        )}

        {activeNav === 'wear' && (
          <WearWing
            onSelectGarment={(id) => setSelectedGarmentId(id)}
          />
        )}

        {activeNav === 'rail' && (
          <RetailRailBuilder />
        )}

        {activeNav === 'unusual' && (
          <TheUnusualWing
            onExit={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* 8. Global Modals */}
      {/* Garment Detail Modal (Art -> Wear, Hang-tag, Fit Twin, Credits) */}
      {selectedGarmentId && (
        <GarmentDetailModal
          garmentId={selectedGarmentId}
          onClose={() => setSelectedGarmentId(null)}
          userRole={userRole}
        />
      )}

      {/* "How will you wear A to W?" Enter As Threshold Modal */}
      {showEnterAsModal && (
        <EnterAsModal
          onSelectRole={(roleId) => {
            setUserRole(roleId);
            setShowEnterAsModal(false);
          }}
          onClose={() => setShowEnterAsModal(false)}
        />
      )}

      {/* 9. Colonnade Footer */}
      {!isTheatricalMode && (
        <footer className="w-full py-16 px-4 md:px-12 bg-[#F1E9DC] border-t border-[#B8A48C]/40 text-xs text-[#1B1917]/70">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1B1917] text-[#F7F2EA] flex items-center justify-center font-serif text-sm font-bold">
                  AW
                </div>
                <div>
                  <span className="font-serif text-lg text-[#1B1917] block">A to W — Art to Wear</span>
                  <span className="label-caps text-[9px] text-[#B8A48C]">Turning ideas into opportunity</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 font-mono text-[11px]">
                <button onClick={() => handleNavigate('discover')} className="hover:text-[#1B1917]">DISCOVER</button>
                <button onClick={() => handleNavigate('connect')} className="hover:text-[#1B1917]">CONNECT</button>
                <button onClick={() => handleNavigate('create')} className="hover:text-[#1B1917]">CREATE</button>
                <button onClick={() => handleNavigate('wear')} className="hover:text-[#1B1917]">WEAR</button>
                <button onClick={() => handleNavigate('rail')} className="hover:text-[#1B1917]">WHOLESALE RAIL</button>
                <button onClick={() => handleNavigate('unusual')} className="hover:text-[#1B1917]">THE UNUSUAL</button>
              </div>
            </div>

            <div className="running-stitch-h" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#B8A48C]">
              <p>
                © 2026 A to W Ecosystem. All garments verified with cryptographic provenance. Default currency: Sri Lankan Rupee (LKR).
              </p>
              <div className="flex items-center gap-3">
                <span>Ivory #F7F2EA</span>
                <span>·</span>
                <span>Travertine #E9DFCF</span>
                <span>·</span>
                <span>Blush Peach #E7B49A</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
