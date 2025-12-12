import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Github, ChevronRight, Terminal } from 'lucide-react';

export const ProductSections: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasSize = () => {
      if (canvas.parentElement) {
          canvas.width = canvas.parentElement.offsetWidth;
          canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Characters to drop
    const chars = '01XYZTENA'.split('');
    const fontSize = 16;
    let columns = canvas.width / fontSize;
    const drops: number[] = [];

    const initDrops = () => {
       columns = canvas.width / fontSize;
       for (let i = 0; i < columns; i++) {
         drops[i] = Math.random() * -50;
       }
    };
    
    initDrops();

    const draw = () => {
      // Semi-transparent black for trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#FF1A1A'; // Red color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Tool Section */}
      <section id="tool" className="py-24 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500px] bg-cyber-red/5 skew-y-12 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#0a0a0a] border border-gray-800 overflow-hidden shadow-2xl shadow-red-900/20"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
                <div className="flex items-center gap-3 text-cyber-red mb-6">
                  <Zap className="animate-pulse" />
                  <span className="font-mono text-sm tracking-widest uppercase">Version 1.0.0 Live</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  ⚡ Tool
                </h2>
                
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  The newest cybersecurity tool built for speed, power, and intelligent threat detection. 
                  Designed for Red Team exploration and rapid vulnerability assessment.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    "Smarter AI-powered analysis",
                    "Fast & lightweight execution",
                    "Designed for beginners & pros",
                    "Perfect for red-team operations"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <ChevronRight className="text-cyber-red" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://github.com/oryn179/TenaNet" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
                >
                  <Github size={20} />
                  Download on GitHub
                </a>
              </div>

              {/* Visual Side */}
              <div className="relative bg-black flex items-center justify-center p-10 min-h-[400px]">
                {/* Code window visualization */}
                <div className="w-full max-w-md bg-[#111] rounded-lg border border-gray-800 shadow-2xl font-mono text-xs md:text-sm">
                  <div className="flex items-center px-4 py-2 border-b border-gray-800 bg-[#1a1a1a]">
                    <div className="flex gap-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-500">tool — bash</span>
                  </div>
                  <div className="p-4 space-y-2 text-green-500">
                    <p className="flex"><span className="text-blue-500 mr-2">➜</span> <span className="text-white">./tool start --target=192.168.x.x</span></p>
                    <p className="text-gray-500">[+] Initializing Tool Core...</p>
                    <p className="text-gray-500">[+] Loading modules...</p>
                    <p className="text-yellow-500">[!] Analysis: Potentially Vulnerable</p>
                    <p className="text-gray-500">[+] Scanning ports...</p>
                    <div className="h-2 w-2/3 bg-gray-800 rounded overflow-hidden mt-4">
                      <div className="h-full bg-cyber-red w-[70%] animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Neon Glow under the code block */}
                <div className="absolute inset-0 bg-cyber-red/10 blur-[100px] pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTF Section */}
      <section id="ctf" className="py-20 bg-black text-red-500 font-mono border-t border-b border-red-900/30 relative overflow-hidden">
         {/* Matrix Rain Canvas Background for CTF Section */}
         <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />
         
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Terminal size={64} className="mx-auto mb-6 text-red-500" />
              <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-white">
                &lt;TenaNet_CTF /&gt;
              </h2>
              <div className="inline-block px-3 py-1 border border-red-500 text-red-500 text-xs mb-8 uppercase tracking-widest">
                Status: Closed
              </div>

              <p className="text-xl md:text-2xl text-red-400/80 max-w-2xl mx-auto mb-12">
                Challenge your skills. Hack the system. Join the elite.
                <br />
                Open for all hackers. Compete, learn, grow.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                  href="https://tenanet-cyber-ctf.lumi.ing/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-8 py-4 bg-red-600 text-white font-bold hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(255,26,26,0.4)]"
                >
                  ENTER CTF ARENA
                </a>
                
                <div className="flex gap-4">
                  <a href="https://t.me/TenaNetSecurity" className="text-red-500 hover:text-white underline decoration-dashed">
                    @TenaNetSecurity
                  </a>
                  <span className="text-red-800">|</span>
                  <a href="https://t.me/TenaNetCTF" className="text-red-500 hover:text-white underline decoration-dashed">
                    @TenaNetCTF
                  </a>
                </div>
              </div>
            </motion.div>
         </div>
      </section>
    </>
  );
};