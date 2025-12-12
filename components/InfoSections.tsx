import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Users, AlertTriangle, BookOpen, Terminal, ChevronRight } from 'lucide-react';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`p-8 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

export const InfoSections: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 dark:text-white">
              <span className="text-cyber-red">🔒</span> Welcome to TenaNet
            </h2>
            <div className="space-y-6 text-lg dark:text-gray-300 text-gray-700">
              <p>
                The name comes from <span className="font-bold dark:text-cyber-blue text-cyber-lightBlue">"Tena" (ጤና)</span>, meaning Health, combined with "Net". We are building a <span className="italic">Healthy Internet</span>.
              </p>
              <p>
                Our mission is simple:
              </p>
              <ul className="space-y-4 ml-4">
                {[
                  "Protect users from scams & phishing",
                  "Build trust in the digital world",
                  "Make cybersecurity accessible globally"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-px w-6 bg-cyber-red"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-sm pt-4 border-t dark:border-gray-800 border-gray-200 dark:text-gray-500 text-gray-400">
                // TenaNet — Safe Internet, Scam-Free Life.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract visual */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-red/20 to-cyber-blue/20 blur-3xl rounded-full"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-black/80 p-6 rounded-lg border border-gray-800 border-l-4 border-l-cyber-red">
                  <Shield className="text-cyber-red mb-2" size={32} />
                  <h3 className="text-white font-bold">Protection</h3>
                </div>
                <div className="bg-black/80 p-6 rounded-lg border border-gray-800">
                  <Globe className="text-blue-400 mb-2" size={32} />
                  <h3 className="text-white font-bold">Global</h3>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-black/80 p-6 rounded-lg border border-gray-800">
                  <Users className="text-green-400 mb-2" size={32} />
                  <h3 className="text-white font-bold">Trust</h3>
                </div>
                <div className="bg-black/80 p-6 rounded-lg border border-gray-800 border-r-4 border-r-blue-500">
                  <Terminal className="text-gray-300 mb-2" size={32} />
                  <h3 className="text-white font-bold">Education</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why TenaNet Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">Why TenaNet?</h2>
            <div className="h-1 w-20 bg-cyber-red mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: AlertTriangle, 
                title: "Scam & Phishing Alerts", 
                desc: "Real-time notifications about the latest threats targeting your region." 
              },
              { 
                icon: Terminal, 
                title: "Red & Blue Team Education", 
                desc: "Learn how to attack to defend. Comprehensive resources for both sides." 
              },
              { 
                icon: BookOpen, 
                title: "Cyber Safety Tips", 
                desc: "Actionable advice to secure your digital footprint immediately." 
              },
              { 
                icon: Shield, 
                title: "Tools & Updates", 
                desc: "Access our repo of open-source security tools for personal testing." 
              },
              { 
                icon: Globe, 
                title: "Ethiopia-focused", 
                desc: "Tailored awareness for the growing digital landscape in Ethiopia & Africa." 
              },
               { 
                icon: Users, 
                title: "Community Driven", 
                desc: "A network of white-hat hackers working together for a safer net." 
              }
            ].map((card, idx) => (
              <Card key={idx} className="bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800 hover:border-cyber-red/50 dark:hover:shadow-[0_0_15px_rgba(255,26,26,0.2)] group">
                <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6 group-hover:bg-cyber-red/20 transition-colors">
                  <card.icon className="text-gray-600 dark:text-gray-300 group-hover:text-cyber-red transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-cyber-red transition-colors">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{card.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 max-w-5xl mx-auto px-4 text-center">
        <motion.div 
          className="border border-red-900/50 bg-[#1a0505] p-10 rounded-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {/* Matrix lines overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
          
          <h2 className="text-3xl font-display font-bold text-white mb-6">Red Team Leadership</h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            "Any Time You Get Scammed or Have Questions <br /> 
            <span className="font-bold text-cyber-red">→ DM Us Right Now.</span>"
          </p>
          
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-cyber-red via-purple-600 to-blue-600">
            <div className="bg-black rounded-full px-8 py-3">
              <a href="https://t.me/Oryn179" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-bold hover:text-cyber-red transition-colors">
                Contact @Oryn179 <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};