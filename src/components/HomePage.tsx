import { Heart, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FallingPetals } from './FallingPetals';

interface HomePageProps {
  onStartStory: () => void;
}

export const HomePage = ({ onStartStory }: HomePageProps) => {
  return (
    <div className="story-section bg-gradient-sky relative overflow-hidden">
      <FallingPetals />
      
      {/* Sparkles */}
      <div className="absolute top-20 left-20 sparkle" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 sparkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-40 sparkle" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 left-1/2 sparkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-60 right-20 sparkle" style={{ animationDelay: '1.5s' }} />

      <div className="text-center z-20 relative">
        <div className="float mb-8">
          <Heart className="w-20 h-20 text-love-pink heart-beat mx-auto mb-6" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-love bg-clip-text text-transparent">
          Before You, After You
        </h1>
        
        <div className="story-text typewriter mb-8 inline-block">
          July 18, 2021 — the day my world began to change
        </div>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light">
          This is our story... 💖
        </p>
        
        <Button 
          onClick={onStartStory}
          size="lg"
          className="text-xl px-12 py-6 bg-gradient-love hover:scale-105 transition-all duration-300 love-glow font-semibold"
        >
          <Play className="w-6 h-6 mr-3" />
          Start Our Love Story
        </Button>
      </div>

      {/* Floating hearts */}
      <div className="absolute top-1/4 left-1/4 text-love-pink opacity-30 float">
        <Heart className="w-8 h-8" style={{ animationDelay: '0s' }} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-dreamy-purple opacity-30 float">
        <Heart className="w-6 h-6" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-soft-blue opacity-30 float">
        <Heart className="w-10 h-10" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};