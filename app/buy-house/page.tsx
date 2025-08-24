"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Home, MapPin, DollarSign, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { indianStatesAndCities } from "@/lib/indian-locations"

export default function BuyHousePage() {
  const router = useRouter()
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [priceRange, setPriceRange] = useState([100000, 1000000])

  const handleSearch = () => {
    if (!selectedState || !selectedCity) {
      alert("Please select both state and city")
      return
    }

    const searchParams = new URLSearchParams({
      state: selectedState,
      city: selectedCity,
      minPrice: priceRange[0].toString(),
      maxPrice: priceRange[1].toString(),
    })
    router.push(`/houses?${searchParams.toString()}`)
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)}Cr`
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`
    return `₹${price.toLocaleString()}`
  }

  const availableCities = selectedState
    ? indianStatesAndCities.find((state) => state.value === selectedState)?.cities || []
    : []

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Housing Hub</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Search Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-4">Find Your Dream Home</h1>
              <p className="text-xl text-muted-foreground">
                Search through thousands of verified properties across India
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Property Search
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Location Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Location</Label>

                  {/* State Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm">
                      State
                    </Label>
                    <Select
                      value={selectedState}
                      onValueChange={(value) => {
                        setSelectedState(value)
                        setSelectedCity("") // Reset city when state changes
                      }}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianStatesAndCities.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* City Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm">
                      City
                    </Label>
                    <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedState}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={selectedState ? "Select a city" : "Select state first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {availableCities.map((city) => (
                          <SelectItem key={city.value} value={city.value}>
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Price Range</Label>
                  <div className="px-3">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={20000000}
                      min={100000}
                      step={100000}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{formatPrice(priceRange[0])}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{formatPrice(priceRange[1])}</span>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minPrice" className="text-sm">
                        Min Price
                      </Label>
                      <Input
                        id="minPrice"
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxPrice" className="text-sm">
                        Max Price
                      </Label>
                      <Input
                        id="maxPrice"
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 0])}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="w-full h-12 text-lg"
                  disabled={!selectedState || !selectedCity}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Houses
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Illustration/Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="/modern-house-search-illustration-with-family-looki.png"
                alt="House Search Illustration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />

              {/* Floating Cards */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">1000+ Locations</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Verified Properties</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Location Search</h3>
            <p className="text-muted-foreground">
              Find properties in your preferred areas with detailed neighborhood information
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Flexible Pricing</h3>
            <p className="text-muted-foreground">
              Set your budget range and find properties that match your financial goals
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified Listings</h3>
            <p className="text-muted-foreground">
              All properties are verified and come with detailed information and photos
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
