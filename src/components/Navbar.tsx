import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronDown } from 'lucide-react';
import clubLogo from '@/assets/club-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExcomOpen, setIsExcomOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const excomItems = [
    { name: 'Ex-Com 2024-25', path: '/excom-2024' },
    { name: 'Ex-Com 2023-24', path: '/excom-2023' },
    { name: 'Ex-Com 2022-23', path: '/excom-2022' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isExcomActive = () => {
    return excomItems.some(item => location.pathname === item.path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        background: isScrolled 
          ? 'linear-gradient(180deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 0, 51, 0.95) 100%)'
          : 'transparent',
        borderBottom: isScrolled ? '2px solid rgba(0, 217, 255, 0.3)' : 'none',
        boxShadow: isScrolled ? '0 0 30px rgba(0, 217, 255, 0.2), inset 0 1px 0 rgba(0, 217, 255, 0.1)' : 'none',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Data Club Logo" className="h-10 w-10 lg:h-12 lg:w-12" />
            <span 
              className="font-semibold text-lg lg:text-xl uppercase tracking-wider"
              style={{
                color: '#00d9ff',
                textShadow: '0 0 10px rgba(0, 217, 255, 0.6), 0 0 20px rgba(255, 0, 110, 0.3)'
              }}
            >
              Data Vedhi.Club
            </span>
          </Link>

          {/* Dropdown Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-all"
            style={{
              color: '#00d9ff',
              textShadow: '0 0 10px rgba(0, 217, 255, 0.6)',
              hover: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.textShadow = '0 0 20px rgba(0, 217, 255, 0.8), 0 0 30px rgba(255, 0, 110, 0.4)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.textShadow = '0 0 10px rgba(0, 217, 255, 0.6)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <ArrowRight size={24} />
              </motion.div>
            )}
          </button>
        </div>

        {/* Dropdown Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.98) 0%, rgba(26, 0, 51, 0.98) 100%)',
                borderTop: '2px solid rgba(0, 217, 255, 0.3)',
                boxShadow: 'inset 0 1px 0 rgba(0, 217, 255, 0.1), 0 10px 30px rgba(0, 217, 255, 0.2)'
              }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: '13px',
                      color: isActive(item.path) ? '#00d9ff' : '#d0d0ff',
                      background: isActive(item.path) 
                        ? 'rgba(0, 217, 255, 0.1)' 
                        : 'transparent',
                      borderLeft: isActive(item.path) ? '3px solid #00d9ff' : '3px solid transparent',
                      textShadow: isActive(item.path)
                        ? '0 0 10px rgba(0, 217, 255, 0.6)'
                        : 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.color = '#00d9ff';
                        e.target.style.background = 'rgba(0, 217, 255, 0.05)';
                        e.target.style.textShadow = '0 0 10px rgba(0, 217, 255, 0.5)';
                        e.target.style.borderLeft = '3px solid rgba(0, 217, 255, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.path)) {
                        e.target.style.color = '#d0d0ff';
                        e.target.style.background = 'transparent';
                        e.target.style.textShadow = 'none';
                        e.target.style.borderLeft = '3px solid transparent';
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Dropdown Ex-Com Section */}
                <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(0, 217, 255, 0.2)' }}>
                  <button
                    onClick={() => setIsExcomOpen(!isExcomOpen)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: '13px',
                      color: isExcomActive() ? '#00d9ff' : '#d0d0ff',
                      background: isExcomActive() 
                        ? 'rgba(0, 217, 255, 0.1)' 
                        : 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textShadow: isExcomActive()
                        ? '0 0 10px rgba(0, 217, 255, 0.6)'
                        : 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (!isExcomActive()) {
                        e.target.style.color = '#00d9ff';
                        e.target.style.background = 'rgba(0, 217, 255, 0.05)';
                        e.target.style.textShadow = '0 0 10px rgba(0, 217, 255, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isExcomActive()) {
                        e.target.style.color = '#d0d0ff';
                        e.target.style.background = 'transparent';
                        e.target.style.textShadow = 'none';
                      }
                    }}
                  >
                    <span>Ex-Com</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isExcomOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isExcomOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {excomItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                              setIsExcomOpen(false);
                              setIsOpen(false);
                            }}
                            style={{
                              display: 'block',
                              padding: '10px 16px 10px 32px',
                              fontWeight: 500,
                              fontSize: '12px',
                              color: isActive(item.path) ? '#ff006e' : '#b0b0dd',
                              background: isActive(item.path) 
                                ? 'rgba(255, 0, 110, 0.08)' 
                                : 'transparent',
                              borderLeft: isActive(item.path) ? '3px solid #ff006e' : '3px solid transparent',
                              textShadow: isActive(item.path)
                                ? '0 0 10px rgba(255, 0, 110, 0.5)'
                                : 'none',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                              if (!isActive(item.path)) {
                                e.target.style.color = '#ff006e';
                                e.target.style.background = 'rgba(255, 0, 110, 0.05)';
                                e.target.style.textShadow = '0 0 10px rgba(255, 0, 110, 0.4)';
                                e.target.style.borderLeft = '3px solid rgba(255, 0, 110, 0.5)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isActive(item.path)) {
                                e.target.style.color = '#b0b0dd';
                                e.target.style.background = 'transparent';
                                e.target.style.textShadow = 'none';
                                e.target.style.borderLeft = '3px solid transparent';
                              }
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;