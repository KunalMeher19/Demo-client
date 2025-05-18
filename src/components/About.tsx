import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const benefits = [
    "10+ years of industry experience",
    "Award-winning design team",
    "Dedicated project managers",
    "Transparent communication",
    "Agile development methodology",
    "24/7 technical support"
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 md:py-32 bg-white dark:bg-gray-900 perspective-container"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform-3d hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaborating in a modern office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl -z-10 animate-float"></div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">About Our Company</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Founded in 2015, Nova has been at the forefront of digital innovation, 
              helping businesses of all sizes transform their digital presence and achieve 
              sustainable growth in an ever-evolving digital landscape.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              Our team of passionate experts combines cutting-edge technology with creative
              thinking to deliver solutions that not only meet but exceed our clients' expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center transform hover:translate-x-2 transition-transform">
                  <CheckCircle className="text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-500/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};