'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChefHat, Clock, MapPin, Phone, Star, Calendar, Users, Utensils, FileText } from 'lucide-react';
import Link from 'next/link';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export function RestaurantLandingPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
      price: '$28',
      category: 'mains'
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce, parmesan, croutons, and our signature dressing',
      price: '$12',
      category: 'starters'
    },
    {
      id: 3,
      name: 'Beef Tenderloin',
      description: 'Premium cut beef with red wine reduction and roasted potatoes',
      price: '$42',
      category: 'mains'
    },
    {
      id: 4,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      price: '$9',
      category: 'desserts'
    },
    {
      id: 5,
      name: 'Bruschetta',
      description: 'Toasted bread topped with fresh tomatoes, basil, and garlic',
      price: '$10',
      category: 'starters'
    },
    {
      id: 6,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
      price: '$11',
      category: 'desserts'
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Absolutely incredible dining experience! The salmon was perfectly cooked and the service was exceptional.',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      comment: 'Best restaurant in town! The ambiance is perfect for a romantic dinner. Highly recommend the beef tenderloin.',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Emma Davis',
      rating: 4,
      comment: 'Great food and wonderful atmosphere. The tiramisu was to die for! Will definitely be back.',
      date: '2 weeks ago'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: Utensils },
    { id: 'starters', name: 'Starters', icon: ChefHat },
    { id: 'mains', name: 'Main Courses', icon: Utensils },
    { id: 'desserts', name: 'Desserts', icon: ChefHat }
  ];

  const filteredMenu = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Bella Vista
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience Fine Dining at Its Best
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Indulge in exquisite cuisine crafted by our award-winning chefs, 
            featuring locally sourced ingredients and innovative flavors that will tantalize your taste buds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              <Calendar className="mr-2 h-4 w-4" />
              Reserve a Table
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">Mon-Thu: 11:00 AM - 10:00 PM</p>
              <p className="text-muted-foreground">Fri-Sat: 11:00 AM - 11:00 PM</p>
              <p className="text-muted-foreground">Sunday: 12:00 PM - 9:00 PM</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">123 Gourmet Street</p>
              <p className="text-muted-foreground">Downtown District</p>
              <p className="text-muted-foreground">New York, NY 10001</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground">Phone: (555) 123-4567</p>
              <p className="text-muted-foreground">Email: info@bellavista.com</p>
              <p className="text-muted-foreground">Reservations Recommended</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of dishes, prepared with passion and the finest ingredients
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.date}</CardDescription>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">
                    "{review.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your table today and discover why Bella Vista is the premier dining destination in the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              <Calendar className="mr-2 h-4 w-4" />
              Make a Reservation
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="mr-2 h-4 w-4" />
              Call Now: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bella Vista</h3>
              <p className="text-muted-foreground">
                Experience fine dining at its best with our exquisite cuisine and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-sm text-muted-foreground mb-2">Mon-Thu: 11:00 AM - 10:00 PM</p>
              <p className="text-sm text-muted-foreground mb-2">Fri-Sat: 11:00 AM - 11:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: 12:00 PM - 9:00 PM</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground mb-2">123 Gourmet Street</p>
              <p className="text-sm text-muted-foreground mb-2">New York, NY 10001</p>
              <p className="text-sm text-muted-foreground">(555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-sm text-muted-foreground">
                Stay updated with our latest offerings and events
              </p>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

