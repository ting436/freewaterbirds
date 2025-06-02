import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LocationsMap: React.FC = () => {
  const navigate = useNavigate();

  const locations = [
    {
      name: 'Marina Bay Sands',
      address: '10 Bayfront Ave',
      status: 'Available',
      distance: '0.5km',
      hours: '24/7'
    },
    {
      name: 'Orchard Road Hub',
      address: '238 Orchard Road',
      status: 'Available', 
      distance: '1.2km',
      hours: '6AM - 11PM'
    },
    {
      name: 'Raffles Place MRT',
      address: 'Raffles Place MRT Station',
      status: 'Low Stock',
      distance: '0.8km', 
      hours: '5AM - 12AM'
    },
    {
      name: 'Sentosa Gateway',
      address: '8 Sentosa Gateway',
      status: 'Available',
      distance: '3.2km',
      hours: '8AM - 10PM'
    }
  ];

  const handleViewAllLocations = () => {
    navigate('/contact?type=water-stations');
  };

  const handleGetDirections = () => {
    // Placeholder for directions functionality
    alert('Directions feature coming soon!');
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Water Stations
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {' '}Near You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located across Singapore's busiest areas. 
            Always fresh, always free, always sustainable.
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-12 p-8 bg-gradient-to-br from-gray-100 to-gray-200 border-0">
          <div className="aspect-video bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-400">Real-time station locations & availability</p>
            </div>
          </div>
        </Card>

        {/* Location List */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
                  <p className="text-gray-600">{location.address}</p>
                </div>
                <Badge 
                  variant={location.status === 'Available' ? 'default' : 'secondary'}
                  className={location.status === 'Available' ? 'bg-green-500' : 'bg-yellow-500'}
                >
                  {location.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Navigation className="h-4 w-4" />
                  {location.distance}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {location.hours}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={handleGetDirections}
              >
                Get Directions
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
            onClick={handleViewAllLocations}
          >
            View All Locations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationsMap;