"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Home, MapPin, Bed, Bath, Square, Shield, Trees, Dumbbell, ArrowLeft, Filter, SortAsc } from "lucide-react"
import Link from "next/link"

// Mock data for houses
const mockHouses = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=300&text=Modern+Apartment",
    price: 8500000,
    location: "Mumbai - Bandra",
    bedrooms: 3,
    bathrooms: 2,
    size: 1200,
    amenities: ["Security", "Gym", "Park"],
    pollution: "Low",
    type: "Apartment",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=300&text=Luxury+Villa",
    price: 15000000,
    location: "Mumbai - Powai",
    bedrooms: 4,
    bathrooms: 3,
    size: 2500,
    amenities: ["Security", "Gym", "Park", "Swimming Pool"],
    pollution: "Moderate",
    type: "Villa",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=300&text=Cozy+Home",
    price: 6200000,
    location: "Mumbai - Andheri",
    bedrooms: 2,
    bathrooms: 2,
    size: 950,
    amenities: ["Security", "Park"],
    pollution: "High",
    type: "Apartment",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=300&text=Spacious+Flat",
    price: 12000000,
    location: "Delhi - Gurgaon",
    bedrooms: 3,
    bathrooms: 3,
    size: 1800,
    amenities: ["Security", "Gym", "Swimming Pool"],
    pollution: "Low",
    type: "Apartment",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=300&text=Premium+House",
    price: 18500000,
    location: "Bangalore - Koramangala",
    bedrooms: 4,
    bathrooms: 4,
    size: 2200,
    amenities: ["Security", "Gym", "Park", "Swimming Pool", "Club House"],
    pollution: "Low",
    type: "Villa",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=300&text=Compact+Studio",
    price: 4500000,
    location: "Pune - Hinjewadi",
    bedrooms: 1,
    bathrooms: 1,
    size: 600,
    amenities: ["Security"],
    pollution: "Moderate",
    type: "Studio",
  },
]

function HousesContent() {
  const searchParams = useSearchParams()
  const [houses, setHouses] = useState(mockHouses)
  const [filteredHouses, setFilteredHouses] = useState(mockHouses)
  const [sortBy, setSortBy] = useState("price-low")
  const [filters, setFilters] = useState({
    bedrooms: [] as string[],
    amenities: [] as string[],
    pollution: [] as string[],
    priceRange: [0, 20000000] as [number, number],
  })

  const location = searchParams?.get("location") || ""
  const minPrice = Number.parseInt(searchParams?.get("minPrice") || "0")
  const maxPrice = Number.parseInt(searchParams?.get("maxPrice") || "20000000")

  useEffect(() => {
    // Filter houses based on search params and filters
    const filtered = houses.filter((house) => {
      const matchesLocation = !location || house.location.toLowerCase().includes(location.toLowerCase())
      const matchesPrice = house.price >= minPrice && house.price <= maxPrice
      const matchesBedrooms = filters.bedrooms.length === 0 || filters.bedrooms.includes(house.bedrooms.toString())
      const matchesAmenities =
        filters.amenities.length === 0 || filters.amenities.some((amenity) => house.amenities.includes(amenity))
      const matchesPollution = filters.pollution.length === 0 || filters.pollution.includes(house.pollution)

      return matchesLocation && matchesPrice && matchesBedrooms && matchesAmenities && matchesPollution
    })

    // Sort houses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "size-large":
          return b.size - a.size
        case "size-small":
          return a.size - b.size
        default:
          return 0
      }
    })

    setFilteredHouses(filtered)
  }, [houses, location, minPrice, maxPrice, filters, sortBy])

  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)}Cr`
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`
    return `₹${price.toLocaleString()}`
  }

  const getPollutionColor = (pollution: string) => {
    switch (pollution) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Security":
        return <Shield className="h-4 w-4" />
      case "Gym":
        return <Dumbbell className="h-4 w-4" />
      case "Park":
        return <Trees className="h-4 w-4" />
      case "Swimming Pool":
        return <div className="h-4 w-4 bg-blue-500 rounded-full" />
      case "Club House":
        return <Home className="h-4 w-4" />
      default:
        return <div className="h-4 w-4 bg-gray-400 rounded" />
    }
  }

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: checked
        ? [...(prev[filterType as keyof typeof prev] as string[]), value]
        : (prev[filterType as keyof typeof prev] as string[]).filter((item) => item !== value),
    }))
  }

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
            <div className="flex items-center gap-4">
              <Link href="/buy-house">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Properties {location && `in ${location}`}</h1>
          <p className="text-muted-foreground">Found {filteredHouses.length} properties matching your criteria</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sort */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <SortAsc className="h-4 w-4" />
                    Sort By
                  </h3>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="size-large">Size: Large to Small</SelectItem>
                      <SelectItem value="size-small">Size: Small to Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Bedrooms */}
                <div>
                  <h3 className="font-medium mb-3">Bedrooms</h3>
                  <div className="space-y-2">
                    {["1", "2", "3", "4+"].map((bedroom) => (
                      <div key={bedroom} className="flex items-center space-x-2">
                        <Checkbox
                          id={`bedroom-${bedroom}`}
                          checked={filters.bedrooms.includes(bedroom)}
                          onCheckedChange={(checked) => handleFilterChange("bedrooms", bedroom, checked as boolean)}
                        />
                        <label htmlFor={`bedroom-${bedroom}`} className="text-sm">
                          {bedroom} {bedroom === "1" ? "Bedroom" : "Bedrooms"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Amenities */}
                <div>
                  <h3 className="font-medium mb-3">Amenities</h3>
                  <div className="space-y-2">
                    {["Security", "Gym", "Park", "Swimming Pool", "Club House"].map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={`amenity-${amenity}`}
                          checked={filters.amenities.includes(amenity)}
                          onCheckedChange={(checked) => handleFilterChange("amenities", amenity, checked as boolean)}
                        />
                        <label htmlFor={`amenity-${amenity}`} className="text-sm flex items-center gap-2">
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Pollution Level */}
                <div>
                  <h3 className="font-medium mb-3">Pollution Level</h3>
                  <div className="space-y-2">
                    {["Low", "Moderate", "High"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox
                          id={`pollution-${level}`}
                          checked={filters.pollution.includes(level)}
                          onCheckedChange={(checked) => handleFilterChange("pollution", level, checked as boolean)}
                        />
                        <label htmlFor={`pollution-${level}`} className="text-sm">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Houses Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredHouses.map((house) => (
                <Card key={house.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={house.image || "/placeholder.svg"}
                      alt={`Property in ${house.location}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-3 right-3 ${getPollutionColor(house.pollution)}`}>
                      {house.pollution} Pollution
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">{formatPrice(house.price)}</h3>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {house.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Bed className="h-4 w-4" />
                          {house.bedrooms} Bed
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="h-4 w-4" />
                          {house.bathrooms} Bath
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="h-4 w-4" />
                          {house.size} sqft
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {house.amenities.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {house.amenities.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{house.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <Button className="w-full" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredHouses.length === 0 && (
              <div className="text-center py-12">
                <Home className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No properties found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters or search criteria</p>
                <Link href="/buy-house">
                  <Button>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Search
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HousesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HousesContent />
    </Suspense>
  )
}
