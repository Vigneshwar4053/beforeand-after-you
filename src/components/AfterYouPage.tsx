import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { FallingPetals } from './FallingPetals';
import happyCouple from '@/assets/happy-couple.jpg';

export const AfterYouPage = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="story-section relative overflow-hidden min-h-screen">
      {/* Enhanced Love-Expressing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-pink-200 to-red-200"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-400/40 via-rose-300/30 to-red-300/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/50 to-transparent"></div>
      
      {/* Animated love aura overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-pink-300/60 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-rose-400/50 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-radial from-red-200/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <FallingPetals />
      
      {/* Enhanced sparkles with love colors */}
      <div className="absolute top-20 left-20 sparkle text-rose-400" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 sparkle text-pink-500" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-40 sparkle text-red-400" style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 left-1/2 sparkle text-rose-300" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-60 right-20 sparkle text-pink-400" style={{ animationDelay: '2s' }} />
      <div className="absolute top-32 left-1/4 sparkle text-red-300" style={{ animationDelay: '0.3s' }} />
      <div className="absolute bottom-40 right-1/3 sparkle text-rose-500" style={{ animationDelay: '1.3s' }} />
      <div className="absolute top-80 left-1/6 sparkle text-pink-300" style={{ animationDelay: '0.8s' }} />

      {/* Enhanced floating hearts with deeper love colors */}
      <div className="absolute top-1/4 left-1/6 text-rose-500 opacity-80 float">
        <Heart className="w-8 h-8 fill-current" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-1/3 right-1/5 text-pink-600 opacity-70 float">
        <Heart className="w-6 h-6 fill-current" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-red-500 opacity-85 float">
        <Heart className="w-10 h-10 fill-current" style={{ animationDelay: '2s' }} />
      </div>
      <div className="absolute top-2/3 right-1/2 text-rose-400 opacity-60 float">
        <Heart className="w-7 h-7 fill-current" style={{ animationDelay: '0.7s' }} />
      </div>
      <div className="absolute bottom-1/5 left-1/2 text-pink-500 opacity-75 float">
        <Heart className="w-9 h-9 fill-current" style={{ animationDelay: '1.8s' }} />
      </div>

      {/* Enhanced floating sparkle icons with love colors */}
      <div className="absolute top-1/5 right-1/4 text-rose-400 opacity-80 float">
        <Sparkles className="w-8 h-8" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="absolute bottom-1/4 right-1/6 text-pink-500 opacity-70 float">
        <Sparkles className="w-6 h-6" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="absolute top-3/4 left-1/3 text-red-400 opacity-65 float">
        <Sparkles className="w-7 h-7" style={{ animationDelay: '2.2s' }} />
      </div>

      {/* Content container with better contrast */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="character-container mb-8">
          <img 
            src={happyCouple} 
            alt="Happy couple together" 
            className="w-[250px] h-auto rounded-2xl shadow-2xl love-glow border-4 border-white/30"
          />
        </div>

        {showText && (
          <div className="story-text animate-fade-in text-center max-w-2xl">
            <p className="mb-6 text-xl text-rose-800 font-medium leading-relaxed">
              "You gave me strength when I had none."
            </p>
            <p className="mb-6 text-lg text-pink-800 font-medium leading-relaxed">
              "You held my hand and showed me what love truly means."
            </p>
            <p className="text-lg text-red-700 font-semibold leading-relaxed">
              "I'm happy, strong, and alive — because of you."
            </p>
          </div>
        )}
      </div>
    </div>
  );
};