import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, Users, MapPin, Phone, Mail, Leaf } from "lucide-react"
import Link from "next/link"

export default function RealEstateLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-slide-in-left">
              <Home className="h-8 w-8 text-primary animate-bounce-gentle" />
              <span className="text-xl font-bold text-foreground">Housing Hub</span>
            </div>
            <div className="hidden md:flex space-x-8 animate-slide-in-right">
              <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                Home
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                About
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                Contact
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                Login
              </a>
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: `url('/modern-cityscape-with-residential-buildings-and-co.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 animate-fade-in" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up animate-stagger-1">
            Welcome to Your Housing Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animate-stagger-2">
            Find your dream home or connect with your society
          </p>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Buy a House Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 hover:border-primary/50 animate-fade-in-up animate-stagger-1 hover:animate-pulse-glow">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Home className="h-10 w-10 text-primary group-hover:animate-bounce-gentle transition-all duration-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Buy a House
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 group-hover:text-foreground transition-colors duration-300">
                    Search houses based on your preferences
                  </p>
                </div>
                <Link href="/buy-house">
                  <Button
                    size="lg"
                    className="w-full text-lg py-6 group-hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    <Home className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                    Buy a House
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Join Your Society Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 hover:border-accent/50 animate-fade-in-up animate-stagger-2 hover:animate-pulse-glow">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Users className="h-10 w-10 text-accent group-hover:animate-bounce-gentle transition-all duration-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    Join Your Society
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 group-hover:text-foreground transition-colors duration-300">
                    Connect with your residential society and access smart services
                  </p>
                </div>
                <Link href="/join-society">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:scale-105 transition-all duration-300 bg-transparent hover:shadow-lg"
                  >
                    <Users className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                    Join Your Society
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-stagger-1">
              Why Choose Housing Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-stagger-2">
              Your one-stop solution for all housing and community needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up animate-stagger-1 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-float">
                <Home className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Verified Properties
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                All properties are verified and authenticated for your peace of mind.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animate-stagger-2 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:animate-float">
                <Users className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Community Connect
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Stay connected with your neighbors and society management.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animate-stagger-3 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-float">
                <MapPin className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Prime Locations
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Properties in the best locations with excellent connectivity.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up animate-stagger-4 hover:transform hover:scale-105 transition-all duration-300">
              <Link href="/society-dashboard">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300 group-hover:animate-float cursor-pointer">
                  <Leaf className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  Smart Society
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Access your society dashboard with sustainability features and community tools.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 animate-slide-in-left">
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-primary animate-rotate-slow" />
                <span className="text-xl font-bold text-foreground">Housing Hub</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted partner for finding the perfect home and connecting with your community.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:scale-105 transition-transform duration-300 bg-transparent"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:scale-105 transition-transform duration-300 bg-transparent"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up animate-stagger-1">
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up animate-stagger-2">
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground animate-fade-in animate-stagger-4">
            <p>&copy; 2024 Housing Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
