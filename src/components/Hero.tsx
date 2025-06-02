import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bird, Leaf, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleFindWaterStations = () => {
    navigate('/contact?type=water-stations');
  };

  const handleBecomePartner = () => {
    navigate('/contact?type=partner');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bird className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Free Water Birds</span>
          </div>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/contact')}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Free Water for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              {' '}Singapore
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Where birds carry brand stories and values to communities through 
            sustainable hydration - completely free!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
              onClick={handleFindWaterStations}
            >
              Find Water Stations
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4"
              onClick={handleBecomePartner}
            >
              Become a Partner
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="p-8 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <Bird className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">100% Free</h3>
              <p className="text-gray-600">Premium water at zero cost, where brands share their stories meaningfully</p>
            </Card>
            <Card className="p-8 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable carton packaging that carries values, not just water</p>
            </Card>
            <Card className="p-8 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-gray-600">Supporting Singapore's health through authentic brand connections</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;