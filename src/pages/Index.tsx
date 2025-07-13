import { useState, useEffect } from 'react';
import { HomePage } from '@/components/HomePage';
import { BeforeYouPage } from '@/components/BeforeYouPage';
import { WhenYouCamePage } from '@/components/WhenYouCamePage';
import { AfterYouPage } from '@/components/AfterYouPage';
import { MemoriesPage } from '@/components/MemoriesPage';
import { AnniversaryPage } from '@/components/AnniversaryPage';
import { Navigation } from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { toast } = useToast();
  const totalPages = 5;

  const pages = [
    <HomePage key="home" onStartStory={() => setCurrentPage(1)} />,
    <BeforeYouPage key="before" />,
    <WhenYouCamePage key="when" />,
    <AfterYouPage key="after" />,
    <MemoriesPage key="memories" />,
    <AnniversaryPage key="anniversary" />
  ];

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleHome = () => {
    setCurrentPage(0);
    toast({
      title: "Welcome back! 💖",
      description: "Ready to experience our love story again?",
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === ' ') {
        event.preventDefault();
        handleNext();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === 'Home' || event.key === 'h') {
        event.preventDefault();
        handleHome();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  // Smooth scroll behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen relative">
      {pages[currentPage]}
      
      <Navigation
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onHome={handleHome}
      />
    </div>
  );
};

export default Index;
