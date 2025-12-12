import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldAlert, Activity, Lock, ArrowRight, Zap, Shield } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

export const HeroSection: React.FC<HeroProps> = ({ darkMode }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Increased range and stiffness for more direct/responsive following
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [35, -35]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, 35]), { stiffness: 400, damping: 30 });

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* 3D Rotating Shield Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none overflow-visible">
        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] [perspective:1000px]"
        >
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative [transform-style:preserve-3d]"
          >
             {/* Orbiting Ring */}
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed rounded-full ${darkMode ? 'border-cyber-red/20' : 'border-cyber-lightBlue/20'} animate-[spin_30s_linear_infinite] [transform:translateZ(-50px)]`}></div>

            {/* Front Shield - Red Neon */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center [transform:translateZ(40px)]"
              animate={{ 
                filter: [
                  `drop-shadow(0 0 25px ${darkMode ? 'rgba(255,26,26,0.6)' : 'rgba(255, 0, 0, 0.4)'})`,
                  `drop-shadow(0 0 5px ${darkMode ? 'rgba(255,26,26,0.2)' : 'rgba(255, 0, 0, 0.1)'})`,
                  `drop-shadow(0 0 25px ${darkMode ? 'rgba(255,26,26,0.6)' : 'rgba(255, 0, 0, 0.4)'})`
                ] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <Shield 
                strokeWidth={0.5} 
                className={`w-full h-full ${darkMode ? 'text-cyber-red' : 'text-red-500'} opacity-20`} 
              />
            </motion.div>

            {/* Middle Shield - Blue Cyber */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center [transform:rotateY(180deg)]"
              animate={{ 
                filter: [
                  `drop-shadow(0 0 25px ${darkMode ? 'rgba(47,141,255,0.6)' : 'rgba(26, 115, 232, 0.4)'})`,
                  `drop-shadow(0 0 5px ${darkMode ? 'rgba(47,141,255,0.2)' : 'rgba(26, 115, 232, 0.1)'})`,
                  `drop-shadow(0 0 25px ${darkMode ? 'rgba(47,141,255,0.6)' : 'rgba(26, 115, 232, 0.4)'})`
                ] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
               <Shield 
                strokeWidth={0.5} 
                className={`w-[85%] h-[85%] ${darkMode ? 'text-cyber-blue' : 'text-blue-500'} opacity-20`} 
              />
            </motion.div>
            
             {/* Core Glow */}
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyber-red/20 blur-[60px] rounded-full [transform:translateZ(0px)]`}></div>

          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 backdrop-blur-sm"
          style={{
            borderColor: darkMode ? 'rgba(255, 26, 26, 0.5)' : 'rgba(26, 115, 232, 0.3)',
            backgroundColor: darkMode ? 'rgba(255, 26, 26, 0.1)' : 'rgba(26, 115, 232, 0.1)',
          }}
        >
          <span className={`w-2 h-2 rounded-full animate-pulse ${darkMode ? 'bg-cyber-red' : 'bg-cyber-lightBlue'}`}></span>
          <span className={`text-sm font-semibold tracking-wide uppercase ${darkMode ? 'text-cyber-red' : 'text-cyber-lightBlue'}`}>
            System Status: Secure
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 ${darkMode ? 'text-white text-glow' : 'text-gray-900'}`}
        >
          Tena<span className={darkMode ? 'text-cyber-red' : 'text-cyber-lightBlue'}>Net</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-normal opacity-90 block mt-2">
            A Healthy & Safe Internet
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`mt-4 max-w-2xl mx-auto text-xl md:text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Next-generation cybersecurity platform protecting users from phishing, scams, and malicious links.
        </motion.p>

        {/* Features Grid (Mini) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-12 mb-12"
        >
          {[
            { icon: Activity, text: "Real-time Attack Awareness" },
            { icon: ShieldAlert, text: "Advanced Scam Detection" },
            { icon: Lock, text: "Secure Browsing Protocols" },
            { icon: Zap, text: "Lightweight Tools" }
          ].map((item, index) => (
            <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded border ${darkMode ? 'border-gray-800 bg-gray-900/50 text-gray-300' : 'border-gray-200 bg-white/50 text-gray-700'}`}>
              <item.icon size={18} className={darkMode ? 'text-cyber-red' : 'text-cyber-lightBlue'} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#tool" className={`group relative px-8 py-4 font-bold text-lg rounded overflow-hidden transition-all ${darkMode ? 'bg-cyber-red text-white hover:shadow-[0_0_20px_rgba(255,26,26,0.6)]' : 'bg-cyber-lightBlue text-white hover:shadow-lg'}`}>
             <span className="relative z-10 flex items-center gap-2">
               Explore Tool <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </span>
             {/* Glitch overlay */}
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </a>
          
          <a href="#team" className={`px-8 py-4 font-bold text-lg rounded border transition-all ${darkMode ? 'border-cyber-red text-cyber-red hover:bg-cyber-red/10' : 'border-cyber-lightBlue text-cyber-lightBlue hover:bg-blue-50'}`}>
            Join Community
          </a>
        </motion.div>
      </div>

      {/* Decorative Gradients */}
      <div className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t ${darkMode ? 'from-cyber-dark to-transparent' : 'from-white to-transparent'} z-20`}></div>
    </section>
  );
};