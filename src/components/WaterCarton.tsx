import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, Recycle } from 'lucide-react';

interface WaterCartonProps {
  brand: string;
  adText: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

const WaterCarton: React.FC<WaterCartonProps> = ({ 
  brand, 
  adText, 
  color, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-32 h-40',
    md: 'w-40 h-52',
    lg: 'w-48 h-64'
  };

  return (
    <Card className={`${sizeClasses[size]} relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300`}>
      {/* Carton Body */}
      <div 
        className="h-full w-full relative"
        style={{ backgroundColor: color }}
      >
        {/* Top Fold */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-black/10 border-b-2 border-black/20" />
        
        {/* Brand Logo Area */}
        <div className="absolute top-12 left-2 right-2">
          <div className="bg-white/90 rounded-lg p-3 text-center">
            <Droplets className="h-6 w-6 text-blue-600 mx-auto mb-1" />
            <p className="text-xs font-bold text-gray-800">{brand}</p>
          </div>
        </div>

        {/* Ad Content */}
        <div className="absolute bottom-16 left-2 right-2">
          <div className="bg-white/95 rounded-lg p-2">
            <p className="text-xs font-medium text-gray-800 text-center">
              {adText}
            </p>
          </div>
        </div>

        {/* Eco Badge */}
        <div className="absolute bottom-2 left-2">
          <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
            <Recycle className="h-3 w-3 mr-1" />
            Eco
          </Badge>
        </div>

        {/* Free Badge */}
        <div className="absolute top-2 right-2">
          <Badge className="text-xs bg-red-500 text-white">
            FREE
          </Badge>
        </div>

        {/* Carton Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-black/20" />
          <div className="absolute right-4 top-0 bottom-0 w-px bg-black/20" />
        </div>
      </div>
    </Card>
  );
};

export default WaterCarton;