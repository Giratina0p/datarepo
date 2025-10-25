import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  BookOpen, 
  TrendingUp,
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import clubLogo from '@/assets/club-logo.png';
import heroBg from '@/assets/hero-bg.jpg';
import event1 from '@/assets/club-event-1.jpg';
import event2 from '@/assets/club-event-2.jpg';
import event3 from '@/assets/club-event-3.jpg';

const Home = () => {
  const values = [
    {
      icon: Users,
      title: 'Leadership',
      description: 'Developing strong leaders who inspire and guide their peers.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Fostering creative thinking and innovative problem-solving.'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Promoting highest standards of academic achievement.'
    }
  ];

  const clubImages = [
    { src: "./Gallery/2.png", alt: 'IGNIS XR-AI',description: 'IGNIS XR-AI, a three-day event by DataVedhi.Club from Nov 7–9, 2024, offered hands-on training in XR and AI through Unity sessions, real-world applications, and a collaborative hackathon.' },
    { src: "./Gallery/7.png", alt: 'BI Nexus',description: 'Datavedhi.club hosted "BI Nexus" on March 4, 2024—a hands-on Power BI workshop that equipped students with key data visualization and analytics skills.' },
    { src: "./Vaidushi.png", alt: 'Vaidhushi',description: 'DataVedhi.Club organized "Vaidhushi" on March 15, 2024—a day-long event featuring a panel discussion on AI ethics and a workshop on AI-driven data analysis.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[100vh] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a0033 50%, #0a0e27 100%)',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      >
        {/* Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            zIndex: 1
          }}
        ></div>

        {/* Neon Glow Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
            zIndex: 1
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.img
            src={clubLogo}
            alt="Academic Excellence Club Logo"
            className="h-24 w-24 lg:h-32 lg:w-32 mx-auto mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{
              color: '#00d9ff',
              textShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4), 0 0 60px rgba(255, 0, 110, 0.3)',
              letterSpacing: '0.05em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            WHERE INNOVATION MEETS COMMUNITY
          </motion.h1>
          
          <motion.p
            className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{
              color: '#e0e0ff',
              textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
              letterSpacing: '0.02em'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Join a vibrant community of tech enthusiasts, developers, and innovators shaping the future of technology.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
          </motion.div>
        </motion.div>

        {/* Cyberpunk Particles - Digital Glitches */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                background: i % 3 === 0 ? '#00d9ff' : i % 3 === 1 ? '#ff006e' : '#ffa500',
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                borderRadius: i % 2 === 0 ? '50%' : '0',
                boxShadow: i % 3 === 0 ? '0 0 10px rgba(0, 217, 255, 0.8)' : i % 3 === 1 ? '0 0 10px rgba(255, 0, 110, 0.8)' : '0 0 10px rgba(255, 165, 0, 0.8)'
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                opacity: 0
              }}
              animate={{
                y: -100,
                x: Math.random() * window.innerWidth,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>

      {/* Club Overview Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 border-t-2 border-b-2 border-cyan-400 py-8"
            style={{
              borderColor: '#00d9ff',
              boxShadow: 'inset 0 0 20px rgba(0, 217, 255, 0.1)'
            }}
          >
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6 uppercase tracking-widest"
              style={{
                color: '#00d9ff',
                textShadow: '0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(255, 0, 110, 0.3)'
              }}
            >
              // ABOUT OUR CLUB
            </h2>
            <p 
              className="text-lg max-w-4xl mx-auto leading-relaxed"
              style={{
                color: '#d0d0ff',
                textShadow: '0 0 10px rgba(0, 217, 255, 0.3)'
              }}
            >
            Datavedhi.club, the official Data Science club of VBIT, is dedicated to fostering a strong foundation in data-driven technologies. Established under the guidance of Dr. Y. Raju (HoD, Data Science) with faculty coordinator Mrs.M.Lavanya , the club provides a platform for students to explore Machine Learning, Artificial Intelligence, Data Analytics, and Big Data. By organizing hands-on workshops, hackathons, and industry collaborations, Datavedhi.club empowers aspiring data scientists to solve real-world problems with data-driven insights. The club encourages innovation, collaboration, and continuous learning to shape future leaders in the field of Data Science
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 border-2"
                style={{
                  borderColor: index === 0 ? '#00d9ff' : index === 1 ? '#ff006e' : '#ffa500',
                  background: 'rgba(15, 15, 30, 0.6)',
                  boxShadow: index === 0 ? '0 0 20px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 217, 255, 0.1)' : index === 1 ? '0 0 20px rgba(255, 0, 110, 0.3), inset 0 0 20px rgba(255, 0, 110, 0.1)' : '0 0 20px rgba(255, 165, 0, 0.3), inset 0 0 20px rgba(255, 165, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  boxShadow: index === 0 ? '0 0 40px rgba(0, 217, 255, 0.6), inset 0 0 20px rgba(0, 217, 255, 0.2)' : index === 1 ? '0 0 40px rgba(255, 0, 110, 0.6), inset 0 0 20px rgba(255, 0, 110, 0.2)' : '0 0 40px rgba(255, 165, 0, 0.6), inset 0 0 20px rgba(255, 165, 0, 0.2)'
                }}
              >
                <div 
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                  style={{
                    border: `2px solid ${index === 0 ? '#00d9ff' : index === 1 ? '#ff006e' : '#ffa500'}`,
                    boxShadow: index === 0 ? '0 0 15px rgba(0, 217, 255, 0.5)' : index === 1 ? '0 0 15px rgba(255, 0, 110, 0.5)' : '0 0 15px rgba(255, 165, 0, 0.5)'
                  }}
                >
                  <value.icon 
                    className="h-8 w-8"
                    style={{
                      color: index === 0 ? '#00d9ff' : index === 1 ? '#ff006e' : '#ffa500'
                    }}
                  />
                </div>
                <h3 
                  className="text-xl font-semibold mb-4 uppercase tracking-wide"
                  style={{
                    color: index === 0 ? '#00d9ff' : index === 1 ? '#ff006e' : '#ffa500',
                    textShadow: index === 0 ? '0 0 10px rgba(0, 217, 255, 0.6)' : index === 1 ? '0 0 10px rgba(255, 0, 110, 0.6)' : '0 0 10px rgba(255, 165, 0, 0.6)'
                  }}
                >
                  {value.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{
                    color: '#d0d0ff'
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Life in Images Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6 uppercase tracking-widest"
              style={{
                color: '#ff006e',
                textShadow: '0 0 20px rgba(255, 0, 110, 0.6), 0 0 40px rgba(0, 217, 255, 0.3)'
              }}
            >
              // EVENTS & SHOWCASE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clubImages.map((image, index ,description) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="overflow-hidden group"
                style={{
                  border: '2px solid',
                  borderColor: index === 0 ? '#00d9ff' : index === 1 ? '#ff006e' : '#ffa500',
                  background: 'rgba(15, 15, 30, 0.8)',
                  boxShadow: index === 0 ? '0 0 20px rgba(0, 217, 255, 0.3)' : index === 1 ? '0 0 20px rgba(255, 0, 110, 0.3)' : '0 0 20px rgba(255, 165, 0, 0.3)'
                }}
                whileHover={{
                  boxShadow: index === 0 ? '0 0 40px rgba(0, 217, 255, 0.6)' : index === 1 ? '0 0 40px rgba(255, 0, 110, 0.6)' : '0 0 40px rgba(255, 165, 0, 0.6)',
                  scale: 1.02
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{
                      background: index === 0 ? 'linear-gradient(135deg, rgba(0, 217, 255, 0.5), rgba(255, 0, 110, 0.3))' : index === 1 ? 'linear-gradient(135deg, rgba(255, 0, 110, 0.5), rgba(0, 217, 255, 0.3))' : 'linear-gradient(135deg, rgba(255, 165, 0, 0.5), rgba(0, 217, 255, 0.3))'
                    }}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold uppercase tracking-wide mb-2"
                    style={{
                      color: index === 0 ? '#00d9ff' : index === 1 ? '#ff006e' : '#ffa500',
                      textShadow: index === 0 ? '0 0 10px rgba(0, 217, 255, 0.5)' : index === 1 ? '0 0 10px rgba(255, 0, 110, 0.5)' : '0 0 10px rgba(255, 165, 0, 0.5)'
                    }}
                  >
                    {image.alt}
                  </h3>
                  <p 
                    className="mt-2 text-sm leading-relaxed"
                    style={{
                      color: '#d0d0ff'
                    }}
                  >
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link 
              to="/events" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'inline-block',
                padding: '12px 40px',
                border: '2px solid #00d9ff',
                color: '#00d9ff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 'bold',
                fontSize: '14px',
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 40px rgba(0, 217, 255, 0.8), inset 0 0 20px rgba(0, 217, 255, 0.2)';
                e.target.style.background = 'rgba(0, 217, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.4)';
                e.target.style.background = 'transparent';
              }}
            >
              // VIEW ALL EVENTS
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;