import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import anniversarySky from '@/assets/anniversary-sky.jpg';

export const AnniversaryPage = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fireworksTimer = setTimeout(() => setShowFireworks(true), 1000);
    const heartTimer = setTimeout(() => setShowHeart(true), 2000);
    const messageTimer = setTimeout(() => setShowMessage(true), 3000);
    
    return () => {
      clearTimeout(fireworksTimer);
      clearTimeout(heartTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="story-section relative overflow-hidden" style={{
      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${anniversarySky})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Fireworks effect */}
      {showFireworks && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gentle-yellow rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 40}%`,
                animation: `sparkle 2s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute w-3 h-3 bg-love-pink rounded-full"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: `${10 + Math.random() * 30}%`,
                animation: `sparkle 1.5s ease-in-out infinite`,
                animationDelay: `${0.5 + Math.random() * 1.5}s`
              }}
            />
          ))}
        </>
      )}

      {/* Stars */}
      {showFireworks && (
        <>
          <div className="absolute top-10 left-10 text-gentle-yellow opacity-80">
            <Sparkles className="w-6 h-6 float" />
          </div>
          <div className="absolute top-20 right-20 text-cloud-white opacity-90">
            <Sparkles className="w-8 h-8 float" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute top-32 left-1/4 text-dreamy-purple opacity-70">
            <Sparkles className="w-5 h-5 float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="absolute top-16 right-1/3 text-soft-blue opacity-80">
            <Sparkles className="w-7 h-7 float" style={{ animationDelay: '0.5s' }} />
          </div>
        </>
      )}

      {/* Big heart animation */}
      {showHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Heart className="w-32 h-32 text-love-pink heart-beat animate-scale-in opacity-80" />
        </div>
      )}

      <div className="text-center z-20 relative">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-cloud-white drop-shadow-lg">
          Happy 4th Anniversary
        </h2>

        {showMessage && (
          <div className="story-text animate-fade-in bg-cloud-white/90 text-foreground">
            <p className="mb-6 text-2xl font-semibold text-love-pink">
              "Four years with you, and forever to go."
            </p>
            <p className="mb-6 text-lg">
              "I may never be perfect, but with you, I'll always try to be better."
            </p>
            <p className="mb-6 text-lg">
              "Happy Anniversary, my love. Thank you for changing my life."
            </p>
            <p className="text-xl font-bold text-love-pink">
              "I love you more than words could ever say."
            </p>
            <div className="mt-8 text-lg font-medium text-muted-foreground">
              — Yours Nani 💗
            </div>
          </div>
        )}

        {/* Floating hearts around the message */}
        {showMessage && (
          <>
            <div className="absolute top-0 left-1/4 text-love-pink opacity-60 float">
              <Heart className="w-6 h-6" style={{ animationDelay: '0s' }} />
            </div>
            <div className="absolute top-10 right-1/4 text-dreamy-purple opacity-50 float">
              <Heart className="w-4 h-4" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-10 left-1/3 text-soft-blue opacity-70 float">
              <Heart className="w-8 h-8" style={{ animationDelay: '2s' }} />
            </div>
            <div className="absolute bottom-0 right-1/3 text-sunset-orange opacity-60 float">
              <Heart className="w-5 h-5" style={{ animationDelay: '1.5s' }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};