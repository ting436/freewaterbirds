import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bird, Smartphone, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DigitalFatigueSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Breaking Free from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              {' '}Digital Ad Fatigue
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In a world bombarded by 5,000+ digital ads daily, Free Water Birds offers 
            a refreshing alternative - meaningful brand connections through sustainable action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-red-100">
              <Smartphone className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Problem</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Average person sees 5,000+ ads per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>96% of ads are ignored or blocked</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Digital fatigue reduces brand trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>Consumers crave authentic connections</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div>
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-blue-100">
              <Bird className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Solution</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Brands provide real value first</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Sustainable packaging tells stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Community benefit over interruption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Birds as natural messengers</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Just as birds carry seeds to help forests grow, Free Water Birds carries 
            brand values to communities through meaningful, sustainable actions.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-4"
            onClick={() => navigate('/our-story')}
          >
            Discover Our Mission
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DigitalFatigueSection;