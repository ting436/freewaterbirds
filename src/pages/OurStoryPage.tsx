import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Bird, Heart, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurStoryPage: React.FC = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bird className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Free Water Birds</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            How birds became the messengers of sustainable brand storytelling
          </p>
        </div>
      </div>

      {/* Story Content */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-12 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <Bird className="h-12 w-12 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">The Birth of Free Water Birds</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              In a world overwhelmed by digital advertisements, we discovered something beautiful: 
              birds have always been nature's messengers, carrying stories across vast distances 
              without the noise and fatigue of digital screens.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Free Water Birds was born from this simple truth. Just as birds carry seeds to 
              new places, helping forests grow, we carry brand stories and values to people 
              in a meaningful, sustainable way.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is to transform how brands connect with people - not through 
              intrusive digital ads, but through acts of genuine care and sustainability.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <Heart className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Authentic brand storytelling</li>
                <li>• Environmental responsibility</li>
                <li>• Community-first approach</li>
                <li>• Meaningful connections</li>
              </ul>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Zero waste hydration solutions</li>
                <li>• Reduced digital ad fatigue</li>
                <li>• Stronger brand-community bonds</li>
                <li>• Sustainable packaging innovation</li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
              onClick={() => navigate('/contact')}
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </div>

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

export default OurStoryPage;