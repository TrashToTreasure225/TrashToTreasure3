import React, { useEffect, useRef } from 'react';
import { Leaf, Recycle, Crop as Drop } from 'lucide-react';

export const Hero: React.FC = () => {
  const floatingIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateFloatingIcons = () => {
      if (!floatingIconsRef.current) return;
      
      const icons = floatingIconsRef.current.children;
      
      Array.from(icons).forEach((icon, index) => {
        const htmlIcon = icon as HTMLElement;
        // Random positions and animation durations for each icon
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 50;
        const randomDuration = 20 + Math.random() * 30;
        const randomDelay = Math.random() * 5;
        
        htmlIcon.style.left = `${randomX}%`;
        htmlIcon.style.top = `${randomY}%`;
        htmlIcon.style.animationDuration = `${randomDuration}s`;
        htmlIcon.style.animationDelay = `${randomDelay}s`;
      });
    };
    
    animateFloatingIcons();
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(3, 169, 244, 0.8) 0%, rgba(76, 175, 80, 0.9) 100%)',
      }}
    >
      {/* Floating background elements */}
      <div ref={floatingIconsRef} className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-white opacity-10 animate-float"
            style={{
              animation: 'float 30s infinite linear',
            }}
          >
            {i % 3 === 0 ? (
              <Leaf size={i % 2 === 0 ? 48 : 32} />
            ) : i % 3 === 1 ? (
              <Recycle size={i % 2 === 0 ? 48 : 32} />
            ) : (
              <Drop size={i % 2 === 0 ? 48 : 32} />
            )}
          </div>
        ))}
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Transforming Trash into Treasure – A Student Movement for a Cleaner Bali
          </h1>
          
          <p className="text-xl md:text-2xl text-white opacity-90 mb-10 animate-slideUp">
            Turning waste into progress through youth-led transparency and action.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#about" 
              className="px-8 py-3 bg-white text-primary-700 font-semibold rounded-full hover:bg-primary-50 transition-colors duration-300 shadow-lg"
            >
              Learn More
            </a>
            <a 
              href="#transparency" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-700 transition-colors duration-300"
            >
              View Impact
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-10">
        <svg className="relative block w-full h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};
