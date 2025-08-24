export interface HouseListing {
  id: string
  state: string
  city: string
  area: string
  price: number
  bedrooms: number
  bathrooms: number
  size_sqft: number
  amenities: string[]
  pollution_level: "Low" | "Moderate" | "High"
  image_url: string
  description: string
  features: string[]
}

export const sampleHouseListings: HouseListing[] = [
  {
    id: "1",
    state: "Maharashtra",
    city: "Mumbai",
    area: "Bandra West",
    price: 15000000,
    bedrooms: 3,
    bathrooms: 2,
    size_sqft: 1200,
    amenities: ["Gym", "Swimming Pool", "Security", "Parking", "Garden"],
    pollution_level: "Moderate",
    image_url: "/modern-apartment-building-mumbai.png",
    description: "Luxurious 3BHK apartment in prime Bandra location with sea view",
    features: ["Sea View", "Modular Kitchen", "Wooden Flooring", "24/7 Security"],
  },
  {
    id: "2",
    state: "Karnataka",
    city: "Bangalore",
    area: "Koramangala",
    price: 8500000,
    bedrooms: 2,
    bathrooms: 2,
    size_sqft: 1100,
    amenities: ["Gym", "Park", "Security", "Parking"],
    pollution_level: "Low",
    image_url: "/modern-apartment-bangalore-koramangala.png",
    description: "Contemporary 2BHK in tech hub with excellent connectivity",
    features: ["Tech Hub Location", "Metro Connectivity", "Vastu Compliant", "Ready to Move"],
  },
  {
    id: "3",
    state: "Delhi",
    city: "Gurgaon",
    area: "Cyber City",
    price: 12000000,
    bedrooms: 3,
    bathrooms: 3,
    size_sqft: 1400,
    amenities: ["Gym", "Swimming Pool", "Security", "Parking", "Club House"],
    pollution_level: "High",
    image_url: "/luxury-apartment-gurgaon-cyber-city.png",
    description: "Premium 3BHK apartment in Gurgaon's business district",
    features: ["Business District", "High-Speed Elevators", "Central AC", "Smart Home"],
  },
  {
    id: "4",
    state: "Tamil Nadu",
    city: "Chennai",
    area: "OMR",
    price: 6500000,
    bedrooms: 2,
    bathrooms: 2,
    size_sqft: 950,
    amenities: ["Gym", "Security", "Parking", "Garden"],
    pollution_level: "Low",
    image_url: "/apartment-chennai-omr-it-corridor.png",
    description: "Modern 2BHK apartment on IT Corridor with great amenities",
    features: ["IT Corridor", "Beach Proximity", "Earthquake Resistant", "Rainwater Harvesting"],
  },
  {
    id: "5",
    state: "Telangana",
    city: "Hyderabad",
    area: "Gachibowli",
    price: 7200000,
    bedrooms: 3,
    bathrooms: 2,
    size_sqft: 1300,
    amenities: ["Gym", "Swimming Pool", "Security", "Parking", "School"],
    pollution_level: "Low",
    image_url: "/modern-apartment-hyderabad-gachibowli.png",
    description: "Spacious 3BHK in Hyderabad's IT hub with school nearby",
    features: ["IT Hub", "School Zone", "Gated Community", "Power Backup"],
  },
  {
    id: "6",
    state: "Gujarat",
    city: "Ahmedabad",
    area: "Satellite",
    price: 5500000,
    bedrooms: 2,
    bathrooms: 2,
    size_sqft: 1000,
    amenities: ["Gym", "Security", "Parking", "Garden"],
    pollution_level: "Moderate",
    image_url: "/apartment-ahmedabad-satellite-area.png",
    description: "Well-designed 2BHK apartment in established Satellite area",
    features: ["Established Area", "Shopping Centers", "Good Connectivity", "Vastu Compliant"],
  },
]
