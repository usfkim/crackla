"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Star, Menu, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-50 navbar-transition ${!isNavbarVisible ? 'navbar-hidden' : ''}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">crackla</span>
                </div>
                <Badge className="bg-red-500 text-white text-xs px-2 py-0.5">Uganda</Badge>
              </div>
              <nav className="hidden lg:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-1 hover:text-green-600 dark:hover:text-green-400 cursor-pointer transition-colors">
                  <span>Crackla Pro</span>
                </div>
                <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Explore</span>
                <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">English</span>
                <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Become a Seller</span>
                <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">Sign in</span>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white hidden md:inline-flex">
                Join
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="dark:bg-gray-900">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a href="#" className="text-lg font-medium hover:text-green-600 transition-colors">Crackla Pro</a>
                    <a href="#" className="text-lg font-medium hover:text-green-600 transition-colors">Explore</a>
                    <a href="#" className="text-lg font-medium hover:text-green-600 transition-colors">Become a Seller</a>
                    <hr className="dark:border-gray-700" />
                    <Button variant="ghost" className="justify-start">Sign in</Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Join</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Dark Background */}
      <section className="relative min-h-[500px] md:min-h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 hero-overlay"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop')"
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-white mb-6 leading-tight">
              Our freelancers<br />
              will take it from here
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-md p-1 mb-8 shadow-lg max-w-full">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <Input
                  placeholder="Search for any service..."
                  className="border-0 shadow-none text-base bg-transparent flex-1 dark:text-white dark:placeholder-gray-400"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 w-full sm:w-auto">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                "website development",
                "architecture & interior design",
                "UGC videos",
                "video editing",
                "vibe coding"
              ].map((service, index) => (
                <div key={service} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 text-white text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition-colors">
                  <span className="capitalize whitespace-nowrap">{service}</span>
                  <ChevronRight className="w-4 h-4 ml-2 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators on hero */}
        <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-4">
            <p className="text-white/80 text-sm mb-3">Trusted by:</p>
            <div className="flex items-center gap-4 md:gap-8 opacity-80 overflow-x-auto horizontal-scroll">
              <span className="text-white font-medium whitespace-nowrap">MTN</span>
              <span className="text-white font-medium whitespace-nowrap">Airtel</span>
              <span className="text-white font-medium whitespace-nowrap">Stanbic</span>
              <span className="text-white font-medium whitespace-nowrap">NTV</span>
              <span className="text-white font-medium whitespace-nowrap">Makerere</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="horizontal-scroll">
            <div className="flex space-x-2 md:space-x-4 pb-4 min-w-max">
              {[
                { name: "Programming & Tech", icon: "💻" },
                { name: "Graphics & Design", icon: "🎨" },
                { name: "Digital Marketing", icon: "📢" },
                { name: "Writing & Translation", icon: "✍️" },
                { name: "Video & Animation", icon: "🎬" },
                { name: "AI Services", icon: "🤖" },
                { name: "Music & Audio", icon: "🎵" },
                { name: "Business", icon: "💼" },
                { name: "Consulting", icon: "🎯" }
              ].map((category, index) => (
                <div key={index} className="flex flex-col items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition-colors min-w-[100px] flex-shrink-0">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <span className="text-xs text-center text-gray-700 dark:text-gray-300 leading-tight">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 dark:text-white mb-8 md:mb-12">
            Popular services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "Vibe Coding",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
                bgColor: "bg-pink-500"
              },
              {
                title: "Website Development",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
                bgColor: "bg-green-600"
              },
              {
                title: "Video Editing",
                image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop",
                bgColor: "bg-orange-500"
              },
              {
                title: "Software Development",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
                bgColor: "bg-yellow-500"
              },
              {
                title: "SEO",
                image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop",
                bgColor: "bg-green-700"
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border-0 rounded-lg dark:bg-gray-700 hover:scale-105">
                <div className={`${service.bgColor} text-white p-4 md:p-6 h-24 md:h-32 flex items-end`}>
                  <h3 className="text-lg md:text-xl font-medium">{service.title}</h3>
                </div>
                <div className="relative h-32 md:h-40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-md text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-normal mb-4">Stuck at vibe coding?</h3>
              <p className="text-lg mb-6 text-white/90">Get matched with the right expert to turn your prototype into a real, working product.</p>
              <Button className="bg-white text-gray-900 hover:bg-gray-100">
                Find an expert
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="w-64 h-40 bg-white/20 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Crackla Pro Section */}
      <section className="py-12 md:py-16 bg-green-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900 dark:text-white">
              <span className="font-bold">crackla</span>
              <span className="text-green-600 font-bold"> pro.</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 mb-8 md:mb-12">
              The <span className="text-green-600">premium</span> freelance solution for businesses
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Dedicated hiring experts</h4>
                  <p className="text-gray-600 dark:text-gray-400">Count on an account manager to find you the right talent and see to your project's every need.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Satisfaction guarantee</h4>
                  <p className="text-gray-600 dark:text-gray-400">Order confidently, with guaranteed refunds for less-than-satisfactory deliveries.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Advanced management tools</h4>
                  <p className="text-gray-600 dark:text-gray-400">Seamlessly integrate freelancers into your team and projects.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Flexible payment models</h4>
                  <p className="text-gray-600 dark:text-gray-400">Pay per project or opt for hourly rates to facilitate longer-term collaboration.</p>
                </div>
              </div>
            </div>

            <Button className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-100 px-8">
              Try Now
            </Button>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 dark:text-white mb-4">
            What success on Crackla looks like
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 md:mb-12">Vontelle Eyewear turns to Crackla freelancers to bring their vision to life.</p>

          <div className="relative h-64 md:h-96 bg-gray-900 rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=400&fit=crop"
              alt="Success story"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="w-0 h-0 border-l-[8px] md:border-l-[12px] border-l-gray-900 border-t-[6px] md:border-t-[8px] border-t-transparent border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          <h3 className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8">Vontélle's trusted services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "3D Industrial Design", icon: "📐" },
              { name: "E-commerce Website Development", icon: "🛒" },
              { name: "Email Marketing", icon: "📧" },
              { name: "Press Releases", icon: "📰" },
              { name: "Logo Design", icon: "🎨" }
            ].map((service, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
                <div className="text-2xl md:text-3xl mb-2">{service.icon}</div>
                <p className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Graphics & Design</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Writing & Translation</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Video & Animation</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Music & Audio</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Programming & Tech</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">For Clients</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">How Crackla Works</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Customer Success Stories</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Trust & Safety</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Quality Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Become a Crackla Freelancer</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Become an Agency</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Community Hub</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Forum</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Business Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Crackla Pro</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Project Management Service</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">ClearVoice - Content Marketing</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Working Not Working</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">About Crackla</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Help & Support</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Social Impact</a></li>
                <li><a href="#" className="hover:underline hover:text-gray-900 dark:hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t dark:border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">crackla</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">© Crackla Uganda Ltd. 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>🇺🇬 English</span>
              <span>UGX</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
