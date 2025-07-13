import { useEffect, useState } from 'react';
import { Cloud, CloudRain } from 'lucide-react';
import sadBoy from '@/assets/sad-boy.jpg';

export const BeforeYouPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="story-section relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #4a5568 0%, #2d3748 50%, #1a202c 100%)'
    }}>
      {/* Rain effect */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-20 bg-gray-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationName: 'fall',
              animationDuration: `${0.5 + Math.random() * 0.3}s`,
              animationIterationCount: 'infinite',
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Clouds */}
      <div className="absolute top-10 left-10 text-gray-500 opacity-50">
        <Cloud className="w-16 h-16 float" />
      </div>
      <div className="absolute top-20 right-20 text-gray-600 opacity-40">
        <CloudRain className="w-20 h-20 float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute top-32 left-1/3 text-gray-500 opacity-30">
        <Cloud className="w-12 h-12 float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="character-container">
        <img 
          src={sadBoy} 
          alt="Sad boy before love" 
          className="w-full h-auto rounded-2xl shadow-2xl filter grayscale contrast-75"
        />
      </div>

      {showText && (
        <div className="story-text animate-fade-in" style={{
          background: 'rgba(45, 55, 72, 0.8)',
          color: '#e2e8f0'
        }}>
          <p className="mb-6 text-xl">
            "I was a mess. Broken inside. No dreams, no hope. I didn't believe in love, or in myself."
          </p>
          <p className="text-lg opacity-90">
            "I failed in everything. I hated my face, hated waking up. My world was gray..."
          </p>
        </div>
      )}
    </div>
  );
};