import { useEffect, useState } from 'react';
import { Sparkles, Sun } from 'lucide-react';
import angelGirl from '@/assets/angel-girl.jpg';

export const WhenYouCamePage = () => {
  const [showBrightness, setShowBrightness] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const brightnessTimer = setTimeout(() => setShowBrightness(true), 1000);
    const textTimer = setTimeout(() => setShowText(true), 2000);
    
    return () => {
      clearTimeout(brightnessTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className={`story-section relative overflow-hidden min-h-screen transition-all duration-3000 ${
      showBrightness ? '' : 'bg-gray-700'
    }`}>
      {/* Enhanced Love-Expressing Background - Dawn of Love Theme */}
      {showBrightness && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-200 to-pink-300"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-rose-300/60 via-amber-300/40 to-yellow-200/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/50 to-transparent"></div>
          
          {/* Animated love dawn aura overlay */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-radial from-amber-300/70 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-orange-300/60 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-radial from-pink-300/50 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </>
      )}

      {/* Enhanced sparkles with dawn/love colors */}
      {showBrightness && (
        <>
          <div className="absolute top-20 left-20 sparkle text-amber-400" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-32 sparkle text-orange-400" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 left-40 sparkle text-rose-400" style={{ animationDelay: '1s' }} />
          <div className="absolute top-60 left-1/2 sparkle text-yellow-400" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-60 right-20 sparkle text-pink-400" style={{ animationDelay: '2s' }} />
          <div className="absolute top-32 left-1/4 sparkle text-amber-500" style={{ animationDelay: '0.3s' }} />
          <div className="absolute bottom-40 right-1/3 sparkle text-orange-500" style={{ animationDelay: '1.3s' }} />
          <div className="absolute top-80 left-1/8 sparkle text-rose-300" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-20 left-2/3 sparkle text-yellow-300" style={{ animationDelay: '1.8s' }} />
        </>
      )}

      {/* Enhanced Sun with love glow */}
      {showBrightness && (
        <div className="absolute top-10 right-10 text-amber-400">
          <Sun className="w-16 h-16 float animate-spin drop-shadow-lg" style={{ animationDuration: '10s', filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))' }} />
        </div>
      )}

      {/* Enhanced floating sparkle icons with dawn love colors */}
      {showBrightness && (
        <>
          <div className="absolute top-1/4 left-1/6 text-amber-500 opacity-80 float">
            <Sparkles className="w-8 h-8" style={{ animationDelay: '0s' }} />
          </div>
          <div className="absolute top-1/3 right-1/5 text-orange-500 opacity-70 float">
            <Sparkles className="w-6 h-6" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-1/3 left-1/4 text-rose-500 opacity-85 float">
            <Sparkles className="w-10 h-10" style={{ animationDelay: '2s' }} />
          </div>
          <div className="absolute top-2/3 right-1/3 text-yellow-500 opacity-75 float">
            <Sparkles className="w-7 h-7" style={{ animationDelay: '0.7s' }} />
          </div>
          <div className="absolute bottom-1/5 left-1/2 text-pink-500 opacity-70 float">
            <Sparkles className="w-9 h-9" style={{ animationDelay: '1.5s' }} />
          </div>
          <div className="absolute top-1/5 left-2/3 text-amber-400 opacity-65 float">
            <Sparkles className="w-8 h-8" style={{ animationDelay: '2.3s' }} />
          </div>
        </>
      )}

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="character-container mb-8">
          <img 
            src={angelGirl} 
            alt="Angel girl bringing light" 
            className={`w-[250px] h-auto rounded-2xl shadow-2xl transition-all duration-2000 border-4 border-white/40 ${
              showBrightness ? 'love-glow' : 'filter grayscale'
            }`}
          />
        </div>

        {showText && (
          <div className="story-text animate-fade-in text-center max-w-2xl">
            <p className="mb-6 text-xl text-amber-800 font-medium leading-relaxed">
              "Then you appeared — like sunshine after years of rain."
            </p>
            <p className="mb-6 text-lg text-orange-800 font-medium leading-relaxed">
              "You saw me when I couldn't see myself. You believed in me."
            </p>
            <p className="text-lg text-rose-700 font-semibold leading-relaxed">
              "You were my angel in disguise."
            </p>
          </div>
        )}
      </div>
    </div>
  );
};