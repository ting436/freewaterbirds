import React from 'react';
import Hero from './Hero';
import DigitalFatigueSection from './DigitalFatigueSection';
import LocationsMap from './LocationsMap';
import { useNavigate } from 'react-router-dom';
import { Bird } from 'lucide-react';

const AppLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleFooterClick = (section: string) => {
    if (section === 'contact') {
      navigate('/contact');
    } else if (section === 'our-story') {
      navigate('/our-story');
    } else {
      alert(`${section} section coming soon!`);
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <DigitalFatigueSection />
      <LocationsMap />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bird className="h-6 w-6 text-blue-400" />
                <h4 className="text-lg font-semibold">Free Water Birds</h4>
              </div>
              <p className="text-gray-400">Sustainable hydration through meaningful brand storytelling</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Users</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleFooterClick('locations')} className="hover:text-white">Find Locations</button></li>
                <li><button onClick={() => handleFooterClick('how-it-works')} className="hover:text-white">How It Works</button></li>
                <li><button onClick={() => handleFooterClick('faq')} className="hover:text-white">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Brands</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleFooterClick('partnership')} className="hover:text-white">Partnership</button></li>
                <li><button onClick={() => handleFooterClick('advertising')} className="hover:text-white">Advertising</button></li>
                <li><button onClick={() => handleFooterClick('contact')} className="hover:text-white">Contact Sales</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => handleFooterClick('our-story')} className="hover:text-white">Our Story</button></li>
                <li><button onClick={() => handleFooterClick('mission')} className="hover:text-white">Our Mission</button></li>
                <li><button onClick={() => handleFooterClick('contact')} className="hover:text-white">Contact Us</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Free Water Birds. Making hydration accessible and sustainable.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;