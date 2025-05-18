import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { text: "About Us", url: "#about" },
        { text: "Services", url: "#services" },
        { text: "Career", url: "#" },
        { text: "Contact", url: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { text: "UI/UX Design", url: "#services" },
        { text: "Web Development", url: "#services" },
        { text: "Mobile Development", url: "#services" },
        { text: "Digital Marketing", url: "#services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", url: "#" },
        { text: "Case Studies", url: "#" },
        { text: "Tutorials", url: "#" },
        { text: "FAQ", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Company Information */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nova</h3>
            <p className="text-gray-400 mb-6 max-w-xs">
              Transforming ideas into digital excellence with innovative solutions tailored for modern businesses.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social} profile`}
                >
                  <img 
                    src={`https://api.iconify.design/mdi:${social}.svg?color=%23a0aec0`} 
                    alt={social}
                    width="20" 
                    height="20"
                    className="hover:brightness-150 transition-filter"
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-blue-400 transition-colors transform hover:translate-x-1 inline-block"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div className="col-span-2">
            <h4 className="font-semibold text-lg mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 dark:bg-slate-950 text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            © {currentYear} Nova. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-400 mx-3 md:ml-0 md:mr-6 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 mx-3 md:mx-6 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 mx-3 md:mx-6 transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};