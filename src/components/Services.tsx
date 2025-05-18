import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  LayoutGrid, 
  Smartphone, 
  BarChart3, 
  Globe, 
  Shuffle, 
  ShieldCheck
} from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const services: Service[] = [
    {
      icon: <LayoutGrid size={32} className="text-blue-600 dark:text-blue-400" />,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces and seamless experiences that delight users and drive engagement."
    },
    {
      icon: <Smartphone size={32} className="text-blue-600 dark:text-blue-400" />,
      title: "Mobile Development",
      description: "Building responsive, native-like applications for iOS and Android platforms."
    },
    {
      icon: <Globe size={32} className="text-blue-600 dark:text-blue-400" />,
      title: "Web Development",
      description: "Crafting high-performance websites with modern frameworks and best practices."
    },
    {
      icon: <BarChart3 size={32} className="text-blue-600 dark:text-blue-400" />,
      title: "Digital Marketing",
      description: "Data-driven strategies to increase visibility and drive qualified traffic to your business."
    },
    {
      icon: <Shuffle size={32} className="text-blue-600 dark:text-blue-400" />,
      title: "Brand Strategy",
      description: "Developing comprehensive brand identities that resonate with your target audience."
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-600 dark:text-blue-400" />,
      title: "Cyber Security",
      description: "Implementing robust security measures to protect your digital assets and customer data."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800 perspective-container"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Premium Services</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We offer a comprehensive suite of digital services tailored to elevate your brand 
            and drive business growth in today's competitive landscape.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isInView ? 'is-visible' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 transform-3d"
            >
              <div className="mb-5 p-3 inline-block bg-blue-50 dark:bg-blue-900/30 rounded-lg transform transition-transform hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}