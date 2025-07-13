import { useState } from 'react';
import { Heart, Camera, MapPin, Calendar, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Memory {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}

const memories: Memory[] = [
  {
    id: 1,
    title: "Our First Date",
    description: "That nervous excitement when we first met... your smile made everything perfect.",
    imageUrl: "/src/assets/2.jpg",
    color: "text-love-pink"
  },
  {
    id: 2,
    title: "That Crazy Rain Walk",
    description: "Dancing in the rain together, laughing until our sides hurt. Pure magic.",
    imageUrl: "/src/assets/1.jpg",
    color: "text-soft-blue"
  },
  {
    id: 3,
    title: "Your Smile That Day",
    description: "The moment I knew I was completely, hopelessly in love with you.",
    imageUrl: "/src/assets/3.jpg",
    color: "text-sunset-orange"
  },
];

export const MemoriesPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden py-20">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-rose-400 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-red-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-60 right-20 w-6 h-6 bg-rose-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Heart Shapes */}
        <div className="absolute top-32 left-1/4 text-pink-300 opacity-30 animate-float">
          <Heart className="w-8 h-8" fill="currentColor" />
        </div>
        <div className="absolute bottom-40 right-1/4 text-rose-400 opacity-40 animate-float" style={{ animationDelay: '1.5s' }}>
          <Heart className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute top-1/2 left-10 text-red-300 opacity-25 animate-float" style={{ animationDelay: '3s' }}>
          <Heart className="w-10 h-10" fill="currentColor" />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-red-500 animate-pulse" fill="currentColor" />
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
            Our Love Story
          </h1>
          <Heart className="w-8 h-8 text-red-500 animate-pulse" fill="currentColor" />
        </div>
        <p className="text-2xl text-rose-600 font-medium italic">
          Every picture tells our story ❤️
        </p>
      </div>

      {/* Memory Grid */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`group relative transform transition-all duration-500 ${
                hoveredCard === memory.id ? 'scale-110 z-20' : 'hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(memory.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 ${
                hoveredCard === memory.id 
                  ? 'shadow-pink-500/50 shadow-2xl' 
                  : 'shadow-rose-500/20'
              }`}>
                
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={memory.imageUrl} 
                    alt={memory.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCard === memory.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Romantic Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredCard === memory.id ? 'opacity-70' : 'opacity-40'
                  }`}></div>
                  
                  {/* Heart Overlay on Hover */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredCard === memory.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Heart className="w-16 h-16 text-white animate-pulse" fill="currentColor" />
                  </div>
                </div>
                
                {/* Romantic Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-4 transition-all duration-500 ${
                  hoveredCard === memory.id 
                    ? 'border-pink-400 animate-pulse' 
                    : 'border-transparent'
                }`}></div>
                
                {/* Corner Hearts */}
                <div className="absolute top-3 left-3">
                  <Heart className="w-5 h-5 text-white/80 animate-pulse" fill="currentColor" />
                </div>
                <div className="absolute top-3 right-3">
                  <Heart className="w-5 h-5 text-white/80 animate-pulse" fill="currentColor" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <Heart className="w-5 h-5 text-white/80 animate-pulse" fill="currentColor" />
                </div>
                <div className="absolute bottom-3 right-3">
                  <Heart className="w-5 h-5 text-white/80 animate-pulse" fill="currentColor" />
                </div>
              </div>
              
              {/* Floating Hearts on Hover */}
              <div className={`absolute -top-2 -right-2 transition-all duration-500 ${
                hoveredCard === memory.id ? 'opacity-100 animate-bounce' : 'opacity-0'
              }`}>
                <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
              </div>
              <div className={`absolute -bottom-2 -left-2 transition-all duration-500 ${
                hoveredCard === memory.id ? 'opacity-100 animate-bounce' : 'opacity-0'
              }`} style={{ animationDelay: '0.2s' }}>
                <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center mt-20 relative z-10">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/70 backdrop-blur-sm rounded-full shadow-lg">
          <Heart className="w-8 h-8 text-red-500 animate-pulse" fill="currentColor" />
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
            Forever & Always
          </span>
          <Heart className="w-8 h-8 text-red-500 animate-pulse" fill="currentColor" />
        </div>
      </div>

      {/* Custom Styles */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
          from { opacity: 0; transform: translateY(20px); }
        }
      `}</style>
    </div>
  );
};
