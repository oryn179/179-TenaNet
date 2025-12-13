
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Book, Video, Smartphone, Star, Lock, X, Youtube, Clapperboard, Tv, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseSectionProps {
  darkMode?: boolean; // Making it optional to avoid strict type errors if not passed immediately
}

export const CourseSection: React.FC<CourseSectionProps> = ({ darkMode = true }) => {
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState<'payment' | 'confirmation'>('payment');
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);

  const tiers = [
    {
      id: 'standard',
      name: 'Standard',
      price: 238,
      icon: Video,
      color: 'text-blue-400',
      borderColor: 'border-blue-400/30',
      features: ['Only Videos', 'Basic Hacking Concepts', 'Network Fundamentals'],
      description: "Perfect for visual learners starting their journey."
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 348,
      icon: Book,
      color: 'text-purple-400',
      borderColor: 'border-purple-400/30',
      features: ['Only Books (PDFs)', 'Deep Theory', 'Scripting Manuals'],
      description: "For those who prefer reading and deep diving into documentation."
    },
    {
      id: 'vvip',
      name: 'VVIP',
      price: 590,
      icon: Star,
      color: 'text-yellow-400',
      borderColor: 'border-yellow-400/50',
      highlight: true,
      features: ['Books + Videos', 'Social Media App Methods', 'Exclusive Tools Access'],
      details: [
        { label: 'How To Get YouTube Premium', icon: Youtube },
        { label: 'How To Get Prime Video Premium', icon: Tv },
        { label: 'How To Get Crunchyroll Premium', icon: Clapperboard }
      ],
      description: "The complete package. Everything you need to dominate."
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 0,
      icon: Lock,
      color: 'text-gray-500',
      borderColor: 'border-gray-800',
      features: ['Advanced Exploits', 'Private Community', '1-on-1 Mentorship'],
      disabled: true,
      cooking: true,
      description: "We are cooking..."
    }
  ];

  const handleBuyClick = (tier: any) => {
    if (tier.disabled) return;
    setSelectedTier(tier);
    setModalStep('payment');
    setIsModalOpen(true);
  };

  const toggleDetails = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedDetails(expandedDetails === id ? null : id);
  };

  return (
    <section id="courses" className="py-24 relative">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80 -z-10"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Ethical Hacking <span className="text-cyber-red">Courses</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Master the art of cybersecurity. Choose your path and start your journey today.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl bg-[#0F0F0F] border ${tier.borderColor} p-6 flex flex-col hover:transform hover:scale-105 transition-all duration-300 ${tier.disabled ? 'opacity-70 grayscale' : 'shadow-2xl'}`}
              style={{
                boxShadow: tier.highlight ? '0 0 20px rgba(234, 179, 8, 0.15)' : 'none'
              }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full uppercase tracking-wider">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4 ${tier.color}`}>
                  <tier.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  {tier.cooking ? (
                     <span className="text-xl font-mono text-gray-500 italic">Coming Soon</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-white">{tier.price}</span>
                      <span className="text-sm text-gray-400">ETB</span>
                    </>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-2 min-h-[40px]">{tier.description}</p>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={16} className={`mt-1 flex-shrink-0 ${tier.color}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
                
                {/* Expandable Details for VVIP */}
                {tier.details && (
                  <div className="pt-2">
                    <button 
                      onClick={(e) => toggleDetails(tier.id, e)}
                      className="text-xs flex items-center gap-1 text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                      {expandedDetails === tier.id ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
                      {expandedDetails === tier.id ? 'Hide Extras' : 'View Extras'}
                    </button>
                    
                    <AnimatePresence>
                      {expandedDetails === tier.id && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 space-y-2 pl-2 border-l border-gray-800"
                        >
                          {tier.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                               <detail.icon size={12} className="text-yellow-500" />
                               {detail.label}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleBuyClick(tier)}
                disabled={tier.disabled}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-200 ${
                  tier.disabled 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    : tier.highlight 
                      ? 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg shadow-yellow-900/20' 
                      : 'bg-white hover:bg-gray-200 text-black'
                }`}
              >
                {tier.cooking ? 'We are cooking...' : 'Buy Paid Course'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {isModalOpen && selectedTier && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#111] border border-gray-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl shadow-red-900/10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                {modalStep === 'payment' ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">Payment Details</h3>
                      <p className="text-gray-400">
                        Purchase <span className={`font-bold ${selectedTier.color}`}>{selectedTier.name}</span> Tier
                      </p>
                    </div>

                    <div className="bg-[#0a0a0a] rounded-xl p-6 border border-gray-800 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                      
                      <div className="flex items-center justify-between mb-6">
                         <span className="text-gray-400 font-mono text-sm">AMOUNT</span>
                         <span className="text-3xl font-bold text-white">{selectedTier.price} ETB</span>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded bg-white flex items-center justify-center flex-shrink-0">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Telebirr.png" alt="Telebirr" className="w-8 h-8 object-contain" />
                           </div>
                           <div>
                             <p className="text-sm text-gray-400">Payment Method</p>
                             <p className="font-bold text-white">Telebirr</p>
                           </div>
                        </div>

                        <div className="h-px bg-gray-800"></div>

                        <div className="grid grid-cols-1 gap-2">
                           <div className="flex justify-between items-center">
                              <span className="text-gray-500 text-sm">Phone No</span>
                              <span className="text-white font-mono select-all">0978366565</span>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-gray-500 text-sm">Name</span>
                              <span className="text-white font-medium">Alemseged</span>
                           </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setModalStep('confirmation')}
                      className="w-full py-4 bg-cyber-red hover:bg-red-600 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(255,26,26,0.4)]"
                    >
                      DONE
                    </button>
                    <p className="text-center text-xs text-gray-500">Click DONE after you have completed the transfer.</p>
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                      <Check size={40} className="text-green-500" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Confirm Order</h3>
                      <p className="text-gray-400 text-sm">
                        Please send your transaction receipt to our Telegram bot to verify and receive access.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                      <p className="text-sm text-yellow-500 mb-1">Status</p>
                      <p className="text-white text-sm font-medium animate-pulse">
                        Please wait for us to see your transaction.
                      </p>
                    </div>

                    <a 
                      href="https://t.me/Confirm_TenaNet_BOT" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-4 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold rounded-lg transition-all"
                    >
                      Send On Telegram
                    </a>

                    <div className="pt-4 border-t border-gray-800">
                       <p className="text-xs text-gray-500 mb-2">
                         If your transaction does not appear within 24 hours, contact us via Telegram.
                       </p>
                       <a 
                        href="https://t.me/oryn179"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600"
                        style={{
                           textShadow: '0 0 10px rgba(255, 69, 0, 0.3)'
                        }}
                       >
                         Contact here
                       </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
