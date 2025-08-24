"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Home,
  Users,
  Newspaper,
  Settings,
  LogOut,
  Leaf,
  Car,
  Trash2,
  Bell,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Navigation,
  Bus,
  Train,
  Share2,
  Heart,
  AlertTriangle,
  DollarSign,
  Star,
  Plus,
  MessageCircle,
  User,
  Wrench,
  Book,
  Coffee,
  Bike,
  Droplets,
  Zap,
  ShoppingCart,
  TrendingUp,
  Recycle,
  Sun,
  Battery,
  Trophy,
  Cloud,
  Wind,
} from "lucide-react"
import Link from "next/link"

export default function SocietyDashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [travelFrom, setTravelFrom] = useState("")
  const [travelTo, setTravelTo] = useState("")
  const [favoriteRoutes, setFavoriteRoutes] = useState<string[]>([])
  const [showResourceForm, setShowResourceForm] = useState(false)
  const [selectedStation, setSelectedStation] = useState<number | null>(null)
  const [bookingDate, setBookingDate] = useState("")
  const [bookingTime, setBookingTime] = useState("")
  const [userCredits, setUserCredits] = useState(25)
  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    category: "",
    contact: "",
  })
  const [showMarketplaceForm, setShowMarketplaceForm] = useState(false)
  const [newMarketplaceItem, setNewMarketplaceItem] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    contact: "",
  })

  // Mock data
  const societyInfo = {
    name: "Green Valley Apartments",
    location: "Mumbai - Bandra",
    memberSince: "January 2024",
  }

  const zeroNetSurveys = [
    {
      id: 1,
      title: "Energy Consumption Survey",
      description: "Monthly electricity and water usage tracking",
      progress: 75,
      status: "In Progress",
      deadline: "2024-01-30",
      participants: 45,
      totalUnits: 60,
    },
    {
      id: 2,
      title: "Waste Segregation Assessment",
      description: "Evaluating waste management practices",
      progress: 90,
      status: "Nearly Complete",
      deadline: "2024-01-25",
      participants: 54,
      totalUnits: 60,
    },
    {
      id: 3,
      title: "Solar Panel Feasibility",
      description: "Survey for rooftop solar installation",
      progress: 30,
      status: "Starting",
      deadline: "2024-02-15",
      participants: 18,
      totalUnits: 60,
    },
  ]

  const trafficUpdates = [
    {
      id: 1,
      area: "Main Gate",
      status: "Heavy",
      lastUpdated: "5 mins ago",
      description: "Peak hour traffic, expect delays",
    },
    {
      id: 2,
      area: "Parking Area A",
      status: "Moderate",
      lastUpdated: "10 mins ago",
      description: "15 spots available",
    },
    {
      id: 3,
      area: "Internal Roads",
      status: "Clear",
      lastUpdated: "2 mins ago",
      description: "Normal traffic flow",
    },
  ]

  const garbageSchedule = [
    {
      id: 1,
      type: "Wet Waste",
      nextCollection: "Today, 8:00 AM",
      status: "Scheduled",
      collector: "Team A",
    },
    {
      id: 2,
      type: "Dry Waste",
      nextCollection: "Tomorrow, 10:00 AM",
      status: "Scheduled",
      collector: "Team B",
    },
    {
      id: 3,
      type: "E-Waste",
      nextCollection: "Jan 30, 2:00 PM",
      status: "Special Collection",
      collector: "Eco Team",
    },
  ]

  const travelRoutes = [
    {
      id: 1,
      type: "Bus",
      route: "Route 45A",
      duration: "25 mins",
      cost: "₹15",
      status: "On Time",
      nextArrival: "3 mins",
      delays: 0,
    },
    {
      id: 2,
      type: "Train",
      route: "Western Line",
      duration: "18 mins",
      cost: "₹8",
      status: "Delayed",
      nextArrival: "7 mins",
      delays: 2,
    },
    {
      id: 3,
      type: "Rideshare",
      route: "Uber Pool",
      duration: "22 mins",
      cost: "₹85",
      status: "Available",
      nextArrival: "5 mins",
      delays: 0,
    },
    {
      id: 4,
      type: "Carpool",
      route: "Community Carpool",
      duration: "20 mins",
      cost: "₹25",
      status: "Available",
      nextArrival: "10 mins",
      delays: 0,
    },
  ]

  const delayAlerts = [
    {
      id: 1,
      route: "Route 45A",
      message: "5 min delay due to traffic at Bandra Junction",
      severity: "moderate",
      time: "2 mins ago",
    },
    {
      id: 2,
      route: "Western Line",
      message: "Signal failure causing 10 min delays",
      severity: "high",
      time: "5 mins ago",
    },
  ]

  const sharedResources = [
    {
      id: 1,
      title: "Car Pool to Bandra Station",
      description: "Daily carpool leaving at 8:30 AM and 6:30 PM. Share fuel costs.",
      category: "Transportation",
      owner: "Rajesh Kumar (A-301)",
      contact: "+91 98765 43210",
      availability: "Mon-Fri",
      cost: "₹50/day",
      participants: 3,
      maxParticipants: 4,
      status: "Available",
    },
    {
      id: 2,
      title: "Drill Machine & Tool Kit",
      description: "Complete drill set with bits and basic tools for home repairs.",
      category: "Tools",
      owner: "Priya Sharma (B-205)",
      contact: "+91 87654 32109",
      availability: "Weekends",
      cost: "Free",
      participants: 0,
      maxParticipants: 1,
      status: "Available",
    },
    {
      id: 3,
      title: "Study Group - Class 10",
      description: "Mathematics and Science study group for CBSE students.",
      category: "Education",
      owner: "Dr. Mehta (C-102)",
      contact: "+91 76543 21098",
      availability: "Tue, Thu, Sat 4-6 PM",
      cost: "₹500/month",
      participants: 6,
      maxParticipants: 8,
      status: "Available",
    },
    {
      id: 4,
      title: "Bike Sharing",
      description: "Mountain bike available for short trips within the locality.",
      category: "Transportation",
      owner: "Amit Patel (A-405)",
      contact: "+91 65432 10987",
      availability: "Evenings & Weekends",
      cost: "₹20/hour",
      participants: 0,
      maxParticipants: 1,
      status: "Available",
    },
    {
      id: 5,
      title: "Coffee Machine",
      description: "Professional espresso machine for events and gatherings.",
      category: "Appliances",
      owner: "Sneha Joshi (B-308)",
      contact: "+91 54321 09876",
      availability: "By appointment",
      cost: "₹200/day",
      participants: 0,
      maxParticipants: 1,
      status: "Booked",
    },
  ]

  const resourceCategories = ["Transportation", "Tools", "Appliances", "Education", "Sports", "Books", "Other"]

  const waterConservationTips = [
    {
      id: 1,
      title: "Rainwater Harvesting",
      description: "Install rainwater collection systems on rooftops",
      impact: "Save 30% on water bills",
      difficulty: "Medium",
      status: "Recommended",
    },
    {
      id: 2,
      title: "Drip Irrigation",
      description: "Use drip irrigation for garden watering",
      impact: "Reduce water usage by 50%",
      difficulty: "Easy",
      status: "Active",
    },
    {
      id: 3,
      title: "Greywater Recycling",
      description: "Reuse water from washing machines for gardens",
      impact: "Save 25% water consumption",
      difficulty: "Hard",
      status: "Planning",
    },
  ]

  const compostingPrograms = [
    {
      id: 1,
      title: "Kitchen Waste Composting",
      description: "Convert kitchen scraps into organic fertilizer",
      participants: 35,
      totalUnits: 60,
      monthlyWasteReduced: "450 kg",
      status: "Active",
    },
    {
      id: 2,
      title: "Garden Waste Composting",
      description: "Compost leaves and garden trimmings",
      participants: 28,
      totalUnits: 60,
      monthlyWasteReduced: "320 kg",
      status: "Active",
    },
  ]

  const evChargingStations = [
    {
      id: 1,
      location: "Parking Area A",
      type: "Fast Charging",
      status: "Available",
      slotsTotal: 4,
      slotsAvailable: 2,
      chargingRate: "₹8/kWh",
      estimatedTime: "45 mins",
      powerOutput: "50kW",
      currentUsers: ["Flat 101", "Flat 205"],
      waitTime: "0 mins",
      solarPowered: true,
      peakHours: "9AM-11AM, 6PM-8PM",
      nextAvailable: "2:30 PM",
    },
    {
      id: 2,
      location: "Parking Area B",
      type: "Standard Charging",
      status: "Available",
      slotsTotal: 6,
      slotsAvailable: 4,
      chargingRate: "₹6/kWh",
      estimatedTime: "2 hours",
      powerOutput: "22kW",
      currentUsers: ["Flat 302", "Flat 408"],
      waitTime: "0 mins",
      solarPowered: false,
      peakHours: "8AM-10AM, 7PM-9PM",
      nextAvailable: "Available now",
    },
    {
      id: 3,
      location: "Visitor Parking",
      type: "Fast Charging",
      status: "Maintenance",
      slotsTotal: 2,
      slotsAvailable: 0,
      chargingRate: "₹8/kWh",
      estimatedTime: "N/A",
      powerOutput: "50kW",
      currentUsers: [],
      waitTime: "N/A",
      solarPowered: true,
      peakHours: "N/A",
      nextAvailable: "Jan 30, 2024",
    },
  ]

  const userBookings = [
    {
      id: 1,
      stationId: 1,
      date: "2024-01-25",
      time: "3:00 PM",
      duration: "1 hour",
      status: "Confirmed",
      cost: "₹240",
    },
    {
      id: 2,
      stationId: 2,
      date: "2024-01-27",
      time: "10:00 AM",
      duration: "2 hours",
      status: "Pending",
      cost: "₹360",
    },
  ]

  const evNotifications = [
    {
      id: 1,
      type: "urgent",
      message: "Your charging session at Parking Area A is complete. Please move your vehicle.",
      time: "5 mins ago",
    },
    {
      id: 2,
      type: "info",
      message: "Solar charging available at 30% discount from 12 PM - 3 PM today.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "warning",
      message: "Your reserved slot starts in 15 minutes at Parking Area B.",
      time: "2 hours ago",
    },
  ]

  const energyOptimization = {
    currentLoad: 65,
    solarGeneration: 40,
    gridDemand: 25,
    optimalChargingTime: "1:00 PM - 4:00 PM",
    carbonSaved: "45 kg CO2",
    costSavings: "₹1,250",
  }

  const greenAreaMaintenance = [
    {
      id: 1,
      area: "Central Garden",
      lastMaintained: "2 days ago",
      nextScheduled: "Jan 28, 2024",
      status: "Good",
      activities: ["Watering", "Pruning", "Fertilizing"],
      volunteer: "Garden Committee",
    },
    {
      id: 2,
      area: "Children's Play Area",
      lastMaintained: "1 week ago",
      nextScheduled: "Jan 30, 2024",
      status: "Needs Attention",
      activities: ["Grass Cutting", "Tree Trimming"],
      volunteer: "Residents Group A",
    },
    {
      id: 3,
      area: "Rooftop Garden",
      lastMaintained: "3 days ago",
      nextScheduled: "Feb 2, 2024",
      status: "Excellent",
      activities: ["Organic Farming", "Composting"],
      volunteer: "Eco Warriors",
    },
  ]

  const marketplaceItems = [
    {
      id: 1,
      title: "Dining Table Set",
      description: "6-seater wooden dining table with chairs, excellent condition",
      price: "₹15,000",
      category: "Furniture",
      seller: "Priya Sharma (B-205)",
      contact: "+91 87654 32109",
      postedDate: "2 days ago",
      status: "Available",
      images: 3,
    },
    {
      id: 2,
      title: "Children's Bicycle",
      description: "Red mountain bike for kids aged 8-12, barely used",
      price: "₹3,500",
      category: "Sports",
      seller: "Rajesh Kumar (A-301)",
      contact: "+91 98765 43210",
      postedDate: "1 week ago",
      status: "Available",
      images: 2,
    },
    {
      id: 3,
      title: "Washing Machine",
      description: "Semi-automatic washing machine, 3 years old, working perfectly",
      price: "₹8,000",
      category: "Appliances",
      seller: "Dr. Mehta (C-102)",
      contact: "+91 76543 21098",
      postedDate: "3 days ago",
      status: "Sold",
      images: 4,
    },
  ]

  const greenPointsData = {
    currentPoints: 245,
    monthlyGoal: 300,
    rank: 12,
    totalMembers: 60,
    recentActivities: [
      { activity: "Composting participation", points: 25, date: "Jan 22" },
      { activity: "EV charging usage", points: 15, date: "Jan 20" },
      { activity: "Water conservation report", points: 30, date: "Jan 18" },
      { activity: "Waste segregation", points: 20, date: "Jan 15" },
    ],
    availableRewards: [
      { reward: "Free parking for 1 month", points: 200, available: true },
      { reward: "Society gym membership", points: 300, available: false },
      { reward: "Organic vegetables from garden", points: 150, available: true },
      { reward: "Priority maintenance service", points: 250, available: false },
    ],
  }

  const energyUsageData = {
    monthlyConsumption: 450, // kWh
    lastMonthConsumption: 520,
    averageConsumption: 480,
    solarGeneration: 180, // kWh
    netConsumption: 270,
    carbonFootprint: 315, // kg CO2
    suggestions: [
      {
        title: "Install LED Bulbs",
        description: "Replace remaining incandescent bulbs with LED",
        potentialSaving: "₹200/month",
        difficulty: "Easy",
      },
      {
        title: "Solar Water Heater",
        description: "Install solar water heating system",
        potentialSaving: "₹800/month",
        difficulty: "Medium",
      },
      {
        title: "Smart Thermostat",
        description: "Use programmable thermostat for AC",
        potentialSaving: "₹400/month",
        difficulty: "Easy",
      },
    ],
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "heavy":
        return "bg-red-100 text-red-800"
      case "moderate":
        return "bg-yellow-100 text-yellow-800"
      case "clear":
        return "bg-green-100 text-green-800"
      case "in progress":
        return "bg-blue-100 text-blue-800"
      case "nearly complete":
        return "bg-green-100 text-green-800"
      case "starting":
        return "bg-orange-100 text-orange-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "special collection":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRouteStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "on time":
        return "bg-green-100 text-green-800"
      case "delayed":
        return "bg-red-100 text-red-800"
      case "available":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getAlertSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-50 border-red-200 text-red-800"
      case "moderate":
        return "bg-yellow-50 border-yellow-200 text-yellow-800"
      default:
        return "bg-blue-50 border-blue-200 text-blue-800"
    }
  }

  const getResourceStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
        return "bg-green-100 text-green-800"
      case "booked":
        return "bg-red-100 text-red-800"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "sustainability", label: "Sustainability", icon: Leaf },
    { id: "marketplace", label: "Marketplace", icon: ShoppingCart },
    { id: "news", label: "Society News", icon: Newspaper },
    { id: "services", label: "Services", icon: Settings },
  ]

  const toggleFavorite = (routeId: string) => {
    setFavoriteRoutes((prev) => (prev.includes(routeId) ? prev.filter((id) => id !== routeId) : [...prev, routeId]))
  }

  const handleAddResource = () => {
    if (newResource.title && newResource.description && newResource.category) {
      // In a real app, this would make an API call
      console.log("Adding new resource:", newResource)
      setNewResource({ title: "", description: "", category: "", contact: "" })
      setShowResourceForm(false)
      // Show success message
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "transportation":
        return <Car className="h-4 w-4" />
      case "tools":
        return <Wrench className="h-4 w-4" />
      case "appliances":
        return <Coffee className="h-4 w-4" />
      case "education":
        return <Book className="h-4 w-4" />
      case "sports":
        return <Bike className="h-4 w-4" />
      default:
        return <Share2 className="h-4 w-4" />
    }
  }

  const handleBookSlot = (stationId: number) => {
    if (userCredits >= 5 && bookingDate && bookingTime) {
      setUserCredits((prev) => prev - 5)
      console.log(`Booking slot at station ${stationId} for ${bookingDate} at ${bookingTime}`)
      // Reset form
      setBookingDate("")
      setBookingTime("")
      setSelectedStation(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Housing Hub</span>
            </div>

            <div className="space-y-2 mb-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Society</h3>
              <div className="text-sm">
                <p className="font-medium text-foreground">{societyInfo.name}</p>
                <p className="text-muted-foreground">{societyInfo.location}</p>
                <p className="text-xs text-muted-foreground">Member since {societyInfo.memberSince}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            <Separator className="my-6" />

            <Link href="/">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === "home" && (
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Society Dashboard</h1>
                <p className="text-muted-foreground">Welcome back! Here's what's happening in your community.</p>
              </div>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Active Surveys</p>
                        <p className="text-2xl font-bold text-foreground">3</p>
                      </div>
                      <Leaf className="h-8 w-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Traffic Status</p>
                        <p className="text-2xl font-bold text-foreground">Moderate</p>
                      </div>
                      <Car className="h-8 w-8 text-yellow-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Next Collection</p>
                        <p className="text-2xl font-bold text-foreground">Today</p>
                      </div>
                      <Trash2 className="h-8 w-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Notifications</p>
                        <p className="text-2xl font-bold text-foreground">5</p>
                      </div>
                      <Bell className="h-8 w-8 text-red-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Community Resource Sharing */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Share2 className="h-5 w-5 text-orange-500" />
                      Community Resource Sharing
                    </CardTitle>
                    <Button
                      onClick={() => setShowResourceForm(!showResourceForm)}
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Share Resource
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Add Resource Form */}
                  {showResourceForm && (
                    <div className="border rounded-lg p-4 bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-4">Share a Resource</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Title</label>
                          <Input
                            placeholder="e.g., Car Pool to Airport"
                            value={newResource.title}
                            onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                          <select
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                            value={newResource.category}
                            onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
                          >
                            <option value="">Select category</option>
                            {resourceCategories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
                        <Textarea
                          placeholder="Describe your resource and how others can use it..."
                          value={newResource.description}
                          onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div className="mt-4">
                        <label className="text-sm font-medium text-foreground mb-2 block">Contact Info</label>
                        <Input
                          placeholder="Phone number or email"
                          value={newResource.contact}
                          onChange={(e) => setNewResource({ ...newResource, contact: e.target.value })}
                        />
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Button onClick={handleAddResource} size="sm" className="bg-orange-600 hover:bg-orange-700">
                          Add Resource
                        </Button>
                        <Button onClick={() => setShowResourceForm(false)} size="sm" variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Available Resources */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Available Resources</h4>
                    <div className="grid gap-4">
                      {sharedResources.map((resource) => (
                        <div key={resource.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-orange-100 rounded-lg">{getCategoryIcon(resource.category)}</div>
                              <div>
                                <h5 className="font-semibold text-foreground">{resource.title}</h5>
                                <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {resource.owner}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {resource.availability}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Badge className={getResourceStatusColor(resource.status)}>{resource.status}</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                            <div>
                              <p className="text-muted-foreground">Category</p>
                              <p className="font-medium text-foreground">{resource.category}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Cost</p>
                              <p className="font-medium text-foreground">{resource.cost}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Participants</p>
                              <p className="font-medium text-foreground">
                                {resource.participants}/{resource.maxParticipants}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Contact</p>
                              <p className="font-medium text-foreground text-xs">{resource.contact}</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              disabled={resource.status === "Booked"}
                              className="border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                            >
                              <MessageCircle className="h-3 w-3 mr-1" />
                              Contact
                            </Button>
                            {resource.category === "Transportation" && (
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={resource.status === "Booked"}
                                className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                              >
                                <Car className="h-3 w-3 mr-1" />
                                Join Pool
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-200 text-orange-700 hover:bg-orange-50 bg-transparent"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Get Notifications
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      My Bookings
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Zero-Net Surveys */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-500" />
                    Ongoing Zero-Net Surveys
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {zeroNetSurveys.map((survey) => (
                      <div key={survey.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{survey.title}</h3>
                            <p className="text-sm text-muted-foreground">{survey.description}</p>
                          </div>
                          <Badge className={getStatusColor(survey.status)}>{survey.status}</Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{survey.progress}%</span>
                          </div>
                          <Progress value={survey.progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {survey.participants}/{survey.totalUnits} participated
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Due: {survey.deadline}
                            </span>
                          </div>
                          <Button size="sm" variant="outline">
                            Participate
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Traffic Control Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-blue-500" />
                    Traffic Control Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trafficUpdates.map((update) => (
                      <div key={update.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-foreground">{update.area}</p>
                            <p className="text-sm text-muted-foreground">{update.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(update.status)}>{update.status}</Badge>
                          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {update.lastUpdated}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Garbage Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trash2 className="h-5 w-5 text-green-500" />
                    Locality Garbage Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {garbageSchedule.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Trash2 className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-foreground">{item.type}</p>
                            <p className="text-sm text-muted-foreground">Collector: {item.collector}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-foreground">{item.nextCollection}</p>
                          <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex gap-3">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Request Special Collection
                    </Button>
                    <Button size="sm" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Full Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Multi-Modal Travel App */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-blue-500" />
                    Multi-Modal Travel Planner
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Route Planning */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">From</label>
                      <Input
                        placeholder="Enter starting location"
                        value={travelFrom}
                        onChange={(e) => setTravelFrom(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">To</label>
                      <Input
                        placeholder="Enter destination"
                        value={travelTo}
                        onChange={(e) => setTravelTo(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Navigation className="h-4 w-4 mr-2" />
                    Find Routes
                  </Button>

                  {/* Delay Alerts */}
                  {delayAlerts.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        Live Delay Alerts
                      </h4>
                      {delayAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`p-3 rounded-lg border ${getAlertSeverityColor(alert.severity)}`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium">{alert.route}</p>
                              <p className="text-sm">{alert.message}</p>
                            </div>
                            <span className="text-xs">{alert.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Available Routes */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Available Routes</h4>
                    <div className="grid gap-4">
                      {travelRoutes.map((route) => (
                        <div key={route.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              {route.type === "Bus" && <Bus className="h-5 w-5 text-blue-500" />}
                              {route.type === "Train" && <Train className="h-5 w-5 text-green-500" />}
                              {route.type === "Rideshare" && <Car className="h-5 w-5 text-purple-500" />}
                              {route.type === "Carpool" && <Share2 className="h-5 w-5 text-orange-500" />}
                              <div>
                                <p className="font-medium text-foreground">{route.route}</p>
                                <p className="text-sm text-muted-foreground">{route.type}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleFavorite(route.id.toString())}
                              className="p-1 hover:bg-muted rounded"
                            >
                              <Heart
                                className={`h-4 w-4 ${
                                  favoriteRoutes.includes(route.id.toString())
                                    ? "fill-red-500 text-red-500"
                                    : "text-muted-foreground"
                                }`}
                              />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Duration</p>
                              <p className="font-medium text-foreground">{route.duration}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Cost</p>
                              <p className="font-medium text-foreground flex items-center gap-1">
                                <DollarSign className="h-3 w-3" />
                                {route.cost}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Status</p>
                              <Badge className={getRouteStatusColor(route.status)}>{route.status}</Badge>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Next</p>
                              <p className="font-medium text-foreground">{route.nextArrival}</p>
                            </div>
                          </div>

                          {route.delays > 0 && (
                            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                              <AlertTriangle className="h-4 w-4 inline mr-1" />
                              {route.delays} delay(s) reported on this route
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Favorite Routes */}
                  {favoriteRoutes.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        Favorite Routes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {favoriteRoutes.map((routeId) => {
                          const route = travelRoutes.find((r) => r.id.toString() === routeId)
                          return route ? (
                            <Badge key={routeId} variant="secondary" className="bg-yellow-100 text-yellow-800">
                              {route.route}
                            </Badge>
                          ) : null
                        })}
                      </div>
                    </div>
                  )}

                  <Separator />

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Live Tracking
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Set Alerts
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-yellow-200 text-yellow-700 hover:bg-yellow-50 bg-transparent"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Trip
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "sustainability" && (
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Sustainability Dashboard</h1>
                <p className="text-muted-foreground">
                  Track your environmental impact and contribute to a greener community.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Trophy className="h-6 w-6 text-accent mr-2" />
                    Community Eco Champions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4" role="table" aria-label="Sustainability leaderboard rankings">
                    {/* Table header for screen readers */}
                    <div className="sr-only">
                      <div role="row">
                        <div role="columnheader">Rank</div>
                        <div role="columnheader">Name</div>
                        <div role="columnheader">Points</div>
                        <div role="columnheader">Weather</div>
                        <div role="columnheader">Air Quality</div>
                        <div role="columnheader">Badge</div>
                      </div>
                    </div>

                    {[
                      {
                        id: 1,
                        name: "Sarah Chen",
                        avatar: "/diverse-woman-smiling.png",
                        points: 2850,
                        rank: 1,
                        activities: ["Solar panels installed", "Rainwater harvesting", "Composting"],
                        badge: "Eco Champion",
                        weather: { temp: 28, condition: "Sunny", humidity: 65 },
                        aqi: { value: 45, level: "Good", color: "text-green-600" },
                      },
                      {
                        id: 2,
                        name: "Michael Rodriguez",
                        avatar: "/professional-man.png",
                        points: 2640,
                        rank: 2,
                        activities: ["LED lighting upgrade", "Bike commuting", "Organic garden"],
                        badge: "Green Leader",
                        weather: { temp: 26, condition: "Partly Cloudy", humidity: 70 },
                        aqi: { value: 52, level: "Moderate", color: "text-yellow-600" },
                      },
                      {
                        id: 3,
                        name: "Priya Sharma",
                        avatar: "/professional-woman.png",
                        points: 2420,
                        rank: 3,
                        activities: ["Zero waste lifestyle", "Electric vehicle", "Tree planting"],
                        badge: "Sustainability Star",
                        weather: { temp: 30, condition: "Hot", humidity: 55 },
                        aqi: { value: 68, level: "Moderate", color: "text-yellow-600" },
                      },
                    ].map((user, index) => (
                      <div
                        key={user.id}
                        role="row"
                        tabIndex={0}
                        className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 focus:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                        aria-label={`Rank ${user.rank}: ${user.name} with ${user.points} points`}
                      >
                        <div className="flex items-center space-x-4">
                          {/* Rank */}
                          <div className="flex items-center justify-center w-8 h-8">
                            {index < 3 ? (
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                                  index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-600"
                                }`}
                              >
                                {user.rank}
                              </div>
                            ) : (
                              <span className="text-lg font-semibold text-muted-foreground">{user.rank}</span>
                            )}
                          </div>

                          {/* Avatar and Info */}
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={`${user.name}'s avatar`} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-foreground">{user.name}</h3>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {user.activities.slice(0, 2).map((activity, idx) => (
                                  <span key={idx} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          {/* Weather Column */}
                          <div className="text-center min-w-[80px]">
                            <div className="flex items-center justify-center mb-1">
                              <Cloud className="h-4 w-4 text-blue-500 mr-1" />
                              <span className="text-sm font-semibold text-foreground">{user.weather.temp}°C</span>
                            </div>
                            <div className="text-xs text-muted-foreground">{user.weather.condition}</div>
                            <div className="text-xs text-muted-foreground">{user.weather.humidity}% humidity</div>
                          </div>

                          {/* AQI Column */}
                          <div className="text-center min-w-[80px]">
                            <div className="flex items-center justify-center mb-1">
                              <Wind className="h-4 w-4 text-gray-500 mr-1" />
                              <span className={`text-sm font-semibold ${user.aqi.color}`}>{user.aqi.value}</span>
                            </div>
                            <div className={`text-xs ${user.aqi.color}`}>{user.aqi.level}</div>
                            <div className="text-xs text-muted-foreground">AQI</div>
                          </div>

                          {/* Points and Badge */}
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <div className="text-right">
                                <div className="text-2xl font-bold text-accent">{user.points.toLocaleString()}</div>
                                <div className="text-sm text-muted-foreground">points</div>
                              </div>
                              <Leaf className="h-5 w-5 text-accent" aria-hidden="true" />
                            </div>
                            <Badge variant="secondary" className="mt-2 bg-accent/10 text-accent border-accent/20">
                              {user.badge}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Cloud className="h-5 w-5 text-blue-500 mr-2" />
                      Environmental Conditions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Average Temperature</span>
                        <span className="font-semibold text-foreground">27°C</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Community AQI</span>
                        <span className="font-semibold text-yellow-600">56 (Moderate)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Air Quality Trend</span>
                        <span className="text-sm text-green-600">↓ Improving</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        Data updates every hour from local monitoring stations
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Leaf className="h-5 w-5 text-accent mr-2" />
                      How to Earn Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { icon: Zap, name: "Energy Efficiency", points: "50-200 pts", color: "text-yellow-600" },
                        { icon: Droplets, name: "Water Conservation", points: "30-150 pts", color: "text-blue-600" },
                        { icon: Recycle, name: "Waste Reduction", points: "40-180 pts", color: "text-green-600" },
                        { icon: Leaf, name: "Green Transportation", points: "60-250 pts", color: "text-emerald-600" },
                      ].map((action, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <action.icon className={`h-4 w-4 ${action.color}`} />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{action.name}</h4>
                            <p className="text-sm text-accent font-semibold">{action.points}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl font-bold text-accent">1,240</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Your Points</p>
                        <p className="text-lg font-semibold text-foreground">Rank #12</p>
                      </div>
                      <Button className="w-full" size="sm">
                        <Leaf className="h-4 w-4 mr-2" />
                        Log New Activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "marketplace" && (
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Marketplace</h1>
                <p className="text-muted-foreground">Buy, sell, and share within your community.</p>
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-blue-500" />
                      Community Marketplace
                    </CardTitle>
                    <Button
                      onClick={() => setShowMarketplaceForm(!showMarketplaceForm)}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      List Item
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Add Marketplace Item Form */}
                  {showMarketplaceForm && (
                    <div className="border rounded-lg p-4 bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-4">List a New Item</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Title</label>
                          <Input
                            placeholder="e.g., Dining Table Set"
                            value={newMarketplaceItem.title}
                            onChange={(e) => setNewMarketplaceItem({ ...newMarketplaceItem, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                          <select
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                            value={newMarketplaceItem.category}
                            onChange={(e) => setNewMarketplaceItem({ ...newMarketplaceItem, category: e.target.value })}
                          >
                            <option value="">Select category</option>
                            {["Furniture", "Appliances", "Electronics", "Books", "Sports", "Other"].map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
                        <Textarea
                          placeholder="Describe your item and its condition..."
                          value={newMarketplaceItem.description}
                          onChange={(e) =>
                            setNewMarketplaceItem({ ...newMarketplaceItem, description: e.target.value })
                          }
                          rows={3}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Price</label>
                          <Input
                            placeholder="e.g., ₹15,000"
                            value={newMarketplaceItem.price}
                            onChange={(e) => setNewMarketplaceItem({ ...newMarketplaceItem, price: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Contact Info</label>
                          <Input
                            placeholder="Phone number or email"
                            value={newMarketplaceItem.contact}
                            onChange={(e) => setNewMarketplaceItem({ ...newMarketplaceItem, contact: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <Button
                          onClick={() => {
                            console.log("Adding new marketplace item:", newMarketplaceItem)
                            setNewMarketplaceItem({ title: "", description: "", price: "", category: "", contact: "" })
                            setShowMarketplaceForm(false)
                          }}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          List Item
                        </Button>
                        <Button onClick={() => setShowMarketplaceForm(false)} size="sm" variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Available Marketplace Items */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Available Items</h4>
                    <div className="grid gap-4">
                      {marketplaceItems.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-3">
                              <ShoppingCart className="h-5 w-5 text-blue-500" />
                              <div>
                                <h5 className="font-semibold text-foreground">{item.title}</h5>
                                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {item.seller}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    Posted: {item.postedDate}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Badge className={getResourceStatusColor(item.status)}>{item.status}</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                            <div>
                              <p className="text-muted-foreground">Category</p>
                              <p className="font-medium text-foreground">{item.category}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Price</p>
                              <p className="font-medium text-foreground">{item.price}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Images</p>
                              <p className="font-medium text-foreground">{item.images}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Contact</p>
                              <p className="font-medium text-foreground text-xs">{item.contact}</p>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              disabled={item.status === "Sold"}
                              className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                            >
                              <MessageCircle className="h-3 w-3 mr-1" />
                              Contact Seller
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Get Notifications
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "news" && (
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Society News</h1>
                <p className="text-muted-foreground">Stay updated with the latest happenings in your community.</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5 text-green-500" />
                    Recent News & Announcements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        title: "Annual General Meeting Scheduled",
                        content:
                          "The Annual General Meeting (AGM) is scheduled for February 15, 2024, at 7:00 PM in the community hall. All residents are encouraged to attend.",
                        date: "Jan 24, 2024",
                      },
                      {
                        id: 2,
                        title: "Security Upgrade Implementation",
                        content:
                          "We are implementing a new security system upgrade starting next week. Expect minor disruptions during the installation process.",
                        date: "Jan 22, 2024",
                      },
                      {
                        id: 3,
                        title: "Water Conservation Drive",
                        content:
                          "Join us for a water conservation awareness drive on January 28, 2024, to learn about saving water and reducing your bills.",
                        date: "Jan 20, 2024",
                      },
                    ].map((news) => (
                      <div key={news.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                        <h5 className="font-semibold text-foreground">{news.title}</h5>
                        <p className="text-sm text-muted-foreground mb-2">{news.content}</p>
                        <div className="text-xs text-muted-foreground">Published: {news.date}</div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Get Notifications
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                    >
                      <Newspaper className="h-4 w-4 mr-2" />
                      View All News
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Society Services</h1>
                <p className="text-muted-foreground">Manage and access essential services within your community.</p>
              </div>

              <Tabs defaultValue="maintenance" className="w-full">
                <TabsList>
                  <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                  <TabsTrigger value="evcharging">EV Charging</TabsTrigger>
                  <TabsTrigger value="waterconservation">Water Conservation</TabsTrigger>
                  <TabsTrigger value="energyoptimization">Energy Optimization</TabsTrigger>
                </TabsList>
                <TabsContent value="maintenance" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-orange-500" />
                        Green Area Maintenance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {greenAreaMaintenance.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <Leaf className="h-5 w-5 text-muted-foreground" />
                              <div>
                                <p className="font-medium text-foreground">{item.area}</p>
                                <p className="text-sm text-muted-foreground">Last Maintained: {item.lastMaintained}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-foreground">Next: {item.nextScheduled}</p>
                              <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="flex gap-3">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-2" />
                          Request Maintenance
                        </Button>
                        <Button size="sm" variant="outline">
                          <Users className="h-4 w-4 mr-2" />
                          Volunteer
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="evcharging" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Battery className="h-5 w-5 text-green-500" />
                        EV Charging Stations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {evChargingStations.map((station) => (
                          <div key={station.id} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h5 className="font-semibold text-foreground">{station.location}</h5>
                                <p className="text-sm text-muted-foreground">{station.type}</p>
                              </div>
                              <Badge className={getResourceStatusColor(station.status)}>{station.status}</Badge>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Slots</p>
                                <p className="font-medium text-foreground">
                                  {station.slotsAvailable}/{station.slotsTotal}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Rate</p>
                                <p className="font-medium text-foreground">{station.chargingRate}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Estimated Time</p>
                                <p className="font-medium text-foreground">{station.estimatedTime}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Power Output</p>
                                <p className="font-medium text-foreground">{station.powerOutput}</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {station.currentUsers.length} in use
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  Next Available: {station.nextAvailable}
                                </span>
                              </div>
                            </div>

                            {selectedStation === station.id && (
                              <div className="mt-4">
                                <h4 className="font-semibold text-foreground mb-2">Book a Slot</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">Date</label>
                                    <Input
                                      type="date"
                                      value={bookingDate}
                                      onChange={(e) => setBookingDate(e.target.value)}
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-foreground mb-2 block">Time</label>
                                    <Input
                                      type="time"
                                      value={bookingTime}
                                      onChange={(e) => setBookingTime(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                  <p className="text-sm text-muted-foreground">Credits Required: 5</p>
                                  <Button
                                    size="sm"
                                    onClick={() => handleBookSlot(station.id)}
                                    disabled={userCredits < 5 || !bookingDate || !bookingTime}
                                  >
                                    Book Now
                                  </Button>
                                </div>
                              </div>
                            )}

                            <div className="flex gap-2 mt-3">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                                onClick={() => setSelectedStation(station.id)}
                              >
                                <Calendar className="h-4 w-4 mr-2" />
                                Book Slot
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
                              >
                                <Navigation className="h-4 w-4 mr-2" />
                                Get Directions
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="flex gap-3">
                        <Button size="sm" variant="outline">
                          <Bell className="h-4 w-4 mr-2" />
                          Get Notifications
                        </Button>
                        <Button size="sm" variant="outline">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          View Usage Stats
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="waterconservation" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        Water Conservation Tips
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {waterConservationTips.map((tip) => (
                          <div key={tip.id} className="border rounded-lg p-4">
                            <h5 className="font-semibold text-foreground">{tip.title}</h5>
                            <p className="text-sm text-muted-foreground mb-2">{tip.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Impact</p>
                                <p className="font-medium text-foreground">{tip.impact}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Difficulty</p>
                                <p className="font-medium text-foreground">{tip.difficulty}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Status</p>
                                <Badge className={getStatusColor(tip.status)}>{tip.status}</Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="flex gap-3">
                        <Button size="sm" variant="outline">
                          <Plus className="h-4 w-4 mr-2" />
                          Suggest a Tip
                        </Button>
                        <Button size="sm" variant="outline">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          View Community Stats
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Recycle className="h-5 w-5 text-green-500" />
                        Composting Programs
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {compostingPrograms.map((program) => (
                          <div key={program.id} className="border rounded-lg p-4">
                            <h5 className="font-semibold text-foreground">{program.title}</h5>
                            <p className="text-sm text-muted-foreground mb-2">{program.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Participants</p>
                                <p className="font-medium text-foreground">
                                  {program.participants}/{program.totalUnits}
                                </p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Waste Reduced</p>
                                <p className="font-medium text-foreground">{program.monthlyWasteReduced}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Status</p>
                                <Badge className={getStatusColor(program.status)}>{program.status}</Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator className="my-4" />

                      <div className="flex gap-3">
                        <Button size="sm" variant="outline">
                          <Plus className="h-4 w-4 mr-2" />
                          Join a Program
                        </Button>
                        <Button size="sm" variant="outline">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          View Community Stats
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="energyoptimization" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-yellow-500" />
                        Energy Optimization
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Current Load</p>
                            <p className="font-medium text-foreground">{energyOptimization.currentLoad} kW</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Solar Generation</p>
                            <p className="font-medium text-foreground">{energyOptimization.solarGeneration} kW</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Grid Demand</p>
                            <p className="font-medium text-foreground">{energyOptimization.gridDemand} kW</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Optimal Charging</p>
                            <p className="font-medium text-foreground">{energyOptimization.optimalChargingTime}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Carbon Saved</p>
                            <p className="font-medium text-foreground">{energyOptimization.carbonSaved}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Cost Savings</p>
                            <p className="font-medium text-foreground">{energyOptimization.costSavings}</p>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-4" />

                      <div className="flex gap-3">
                        <Button size="sm" variant="outline">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          View Detailed Stats
                        </Button>
                        <Button size="sm" variant="outline">
                          <Sun className="h-4 w-4 mr-2" />
                          Solar Panel Info
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
