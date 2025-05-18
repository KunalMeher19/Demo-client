import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black text-white overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[100px] animate-float"></div>
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] rounded-full bg-indigo-500 blur-[100px] animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute top-[30%] left-[60%] w-[25%] h-[25%] rounded-full bg-blue-800 blur-[100px] animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Ideas Into <span className="text-blue-400">Digital Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We craft premium digital experiences that elevate brands and deliver exceptional results in today's competitive landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="bg-transparent text-white hover:text-blue-400 border border-white hover:border-blue-400 font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Explore Services 
                <ChevronRight className="ml-1 transform group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-scrollDot"></div>
        </div>
      </div>
    </section>
  );
};