import React from 'react';
import { Mail, Send, Github, MessageCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const ContactFooter: React.FC<ContactProps> = ({ darkMode }) => {
  // Fallback logo URL that matches the theme
  const LOGO_URL = "https://ui-avatars.com/api/?name=Tena+Net&background=0D0D0D&color=FF1A1A&bold=true&size=128";

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className={`rounded-2xl p-8 md:p-12 border ${darkMode ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-200 shadow-xl'}`}>
          <div className="text-center mb-10">
            <h2 className={`text-3xl font-display font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>We don't need your data. Just your questions.</p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
               {/* Email Card */}
               <a href="mailto:oryn179@gmail.com" className={`flex items-center p-4 rounded-lg border transition-all ${darkMode ? 'border-gray-700 hover:border-cyber-red hover:bg-gray-800' : 'border-gray-200 hover:border-cyber-lightBlue hover:bg-gray-50'}`}>
                 <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800 text-cyber-red' : 'bg-blue-100 text-cyber-lightBlue'}`}>
                   <Mail size={24} />
                 </div>
                 <div>
                   <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email Support</p>
                   <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>oryn179@gmail.com</p>
                 </div>
               </a>

               {/* Telegram Card */}
               <a href="https://t.me/TenaNet_Bot" className={`flex items-center p-4 rounded-lg border transition-all ${darkMode ? 'border-gray-700 hover:border-cyber-red hover:bg-gray-800' : 'border-gray-200 hover:border-cyber-lightBlue hover:bg-gray-50'}`}>
                 <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-500'}`}>
                   <Send size={24} />
                 </div>
                 <div>
                   <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Telegram Bot</p>
                   <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>@TenaNet_Bot</p>
                 </div>
               </a>
            </div>

            {/* Visual Form (No Backend) */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Send a quick message via Telegram..." 
                disabled
                className={`w-full p-4 rounded-lg border bg-transparent cursor-not-allowed ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-400'}`}
              />
              <a href="https://t.me/TenaNet_Bot" className="absolute right-2 top-2 bottom-2 px-6 bg-cyber-red hover:bg-red-600 text-white font-bold rounded flex items-center justify-center transition-colors">
                DM
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'bg-black border-gray-900' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <img 
                src="/tenanet.jpg" 
                onError={(e) => {
                  e.currentTarget.src = LOGO_URL;
                  e.currentTarget.onerror = null;
                }}
                alt="TenaNet" 
                className="h-8 w-8 rounded-full object-cover" 
              />
              <span className={`font-display font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                TenaNet
              </span>
            </div>

            <div className={`text-sm mb-4 md:mb-0 ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              &copy; 2025 TenaNet Cybersecurity. Healthy Internet. Scam-Free Life.
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/oryn179" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}>
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              <a href="https://t.me/TenaNet_Bot" target="_blank" rel="noopener noreferrer" className={`transition-colors ${darkMode ? 'text-gray-500 hover:text-[#0088cc]' : 'text-gray-400 hover:text-[#0088cc]'}`}>
                <span className="sr-only">Telegram</span>
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};