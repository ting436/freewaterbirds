import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Bird, Heart, Leaf } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'general';

    const handleFooterClick = (section: string) => {
    if (section === 'contact') {
      navigate('/contact');
    } else if (section === 'our-story') {
      navigate('/our-story');
    } else {
      alert(`${section} section coming soon!`);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  const getTitle = () => {
    switch (type) {
      case 'partner':
        return 'Partner With Us';
      default:
        return 'Contact Us';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'partner':
        return 'Join our mission to provide free, sustainable water across Singapore. Let\'s discuss partnership opportunities.';
      default:
        return 'Get in touch with our team for any questions or inquiries.';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
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

      {/* Contact Form */}
      <div className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{getTitle()}</h1>
              <p className="text-gray-600">{getDescription()}</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                {type === 'partner' && (
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                )}
              </div>

              {type === 'water-stations' && (
                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central">Central Singapore</SelectItem>
                      <SelectItem value="north">North Singapore</SelectItem>
                      <SelectItem value="south">South Singapore</SelectItem>
                      <SelectItem value="east">East Singapore</SelectItem>
                      <SelectItem value="west">West Singapore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5}
                  required 
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>

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

export default ContactPage;