import { ChevronDown, ChevronUp, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  onHome: () => void;
}

export const Navigation = ({ currentPage, totalPages, onNext, onPrevious, onHome }: NavigationProps) => {
  if (currentPage === 0) return null; // Hide navigation on homepage

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-card/80 backdrop-blur-md rounded-full px-6 py-3 shadow-romantic border border-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={onHome}
          className="rounded-full p-2 hover:bg-love-pink hover:text-primary-foreground"
        >
          <Home className="w-5 h-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          disabled={currentPage <= 1}
          className="rounded-full p-2 hover:bg-love-pink hover:text-primary-foreground disabled:opacity-50"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center gap-2 px-3">
          <Heart className="w-4 h-4 text-love-pink" />
          <span className="text-sm font-medium text-foreground">
            {currentPage} / {totalPages}
          </span>
          <Heart className="w-4 h-4 text-love-pink" />
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentPage >= totalPages}
          className="rounded-full p-2 hover:bg-love-pink hover:text-primary-foreground disabled:opacity-50"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};