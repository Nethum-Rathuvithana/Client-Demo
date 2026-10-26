// Opt-in Web Audio System: Soft Room Tone & Fabric Rustle Transitions
class FabricSoundEngine {
  constructor() {
    this.ctx = null;
    this.roomToneNode = null;
    this.gainNode = null;
    this.isMuted = true;
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();

    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Warm Room Tone Generator (filtered pink noise / gentle hum)
    this.createRoomTone();
  }

  createRoomTone() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.012; // very quiet baseline
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to warm sunlit room resonance (around 220Hz lowpass)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(240, this.ctx.currentTime);

    this.roomToneGain = this.ctx.createGain();
    this.roomToneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(this.roomToneGain);
    this.roomToneGain.connect(this.masterGain);

    whiteNoise.start(0);
  }

  playFabricRustle() {
    if (this.isMuted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      // Synthesize sheer chiffon fabric breath / rustle
      const oscCount = 3;
      for (let i = 0; i < oscCount; i++) {
        const noiseNode = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.5, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let j = 0; j < data.length; j++) {
          data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (this.ctx.sampleRate * 0.15));
        }
        noiseNode.buffer = buffer;

        const bpf = this.ctx.createBiquadFilter();
        bpf.type = 'bandpass';
        bpf.frequency.setValueAtTime(1400 + i * 800, now);
        bpf.Q.setValueAtTime(2.0, now);

        const rustleGain = this.ctx.createGain();
        rustleGain.gain.setValueAtTime(0.001, now);
        rustleGain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
        rustleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        noiseNode.connect(bpf);
        bpf.connect(rustleGain);
        rustleGain.connect(this.masterGain);

        noiseNode.start(now);
      }
    } catch {
      // Audio fallback silent
    }
  }

  toggle() {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isMuted = !this.isMuted;
    const targetGain = this.isMuted ? 0 : 0.8;
    this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.2);
    
    if (!this.isMuted) {
      this.playFabricRustle();
    }
    return !this.isMuted;
  }
}

export const soundEngine = new FabricSoundEngine();
