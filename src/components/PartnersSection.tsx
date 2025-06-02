import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import WaterCarton from './WaterCarton';
import { Building2, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PartnersSection: React.FC = () => {
  const navigate = useNavigate();

  const sampleCartons = [
    {
      brand: 'GrabFood',
      adText: 'Order your favorite meals now! Use code WATER10 for 10% off',
      color: '#00B14F'
    },
    {
      brand: 'Shopee',
      adText: 'Shop the 9.9 Super Shopping Day! Free shipping on all orders',
      color: '#EE4D2D'
    },
    {
      brand: 'DBS Bank',
      adText: 'Open a new account and get $50 cashback. Terms apply.',
      color: '#D50000'
    },
    {
      brand: 'Singtel',
      adText: 'Upgrade to 5G plans starting from $25/month. Fast & reliable.',
      color: '#E60012'
    }
  ];

  const handlePartnerClick = () => {
    navigate('/contact?type=partner');
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powered by Singapore's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {' '}Top Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sustainable water cartons feature advertisements from trusted partners, 
            making free hydration possible for everyone.
          </p>
        </div>

        {/* Sample Cartons */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {sampleCartons.map((carton, index) => (
            <WaterCarton
              key={index}
              brand={carton.brand}
              adText={carton.adText}
              color={carton.color}
              size="md"
            />
          ))}
        </div>

        {/* Partner Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Reach Millions</h3>
            <p className="text-gray-600">Connect with Singapore's active, health-conscious community</p>
          </Card>
          <Card className="p-6 text-center border-2 border-pink-100 hover:border-pink-300 transition-colors">
            <TrendingUp className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Boost Brand Awareness</h3>
            <p className="text-gray-600">High-visibility advertising on premium sustainable packaging</p>
          </Card>
          <Card className="p-6 text-center border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <Building2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Corporate Responsibility</h3>
            <p className="text-gray-600">Support community health and environmental sustainability</p>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4"
            onClick={handlePartnerClick}
          >
            Become a Partner Brand
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;