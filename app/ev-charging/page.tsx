"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Home, Zap, Clock, Bell, Leaf, Battery, MapPin, AlertTriangle, CheckCircle, Settings } from "lucide-react"
import Link from "next/link"

export default function EVChargingManagement() {
  const [selectedStation, setSelectedStation] = useState<number | null>(null)

  const chargingStations = [
    {
      id: 1,
      name: "Station A-1",
      location: "Block A Parking",
      status: "available",
      type: "Fast Charging",
      power: "22kW",
      estimatedTime: "2-3 hours",
      currentUser: null,
      nextSlot: "14:00",
      coordinates: { x: 20, y: 30 },
    },
    {
      id: 2,
      name: "Station A-2",
      location: "Block A Parking",
      status: "occupied",
      type: "Fast Charging",
      power: "22kW",
      estimatedTime: "45 mins remaining",
      currentUser: "Apt 204",
      nextSlot: "15:30",
      coordinates: { x: 25, y: 30 },
    },
    {
      id: 3,
      name: "Station B-1",
      location: "Block B Parking",
      status: "maintenance",
      type: "Standard Charging",
      power: "7kW",
      estimatedTime: "Under maintenance",
      currentUser: null,
      nextSlot: "Tomorrow 09:00",
      coordinates: { x: 60, y: 50 },
    },
    {
      id: 4,
      name: "Station B-2",
      location: "Block B Parking",
      status: "available",
      type: "Standard Charging",
      power: "7kW",
      estimatedTime: "4-6 hours",
      currentUser: null,
      nextSlot: "Available now",
      coordinates: { x: 65, y: 50 },
    },
  ]

  const upcomingBookings = [
    { id: 1, station: "Station A-1", time: "Today 16:00", duration: "2 hours", status: "confirmed" },
    { id: 2, station: "Station B-2", time: "Tomorrow 09:00", duration: "3 hours", status: "pending" },
  ]

  const notifications = [
    { id: 1, type: "success", message: "Charging completed at Station A-1", time: "5 mins ago" },
    { id: 2, type: "warning", message: "Your reserved slot starts in 15 minutes", time: "10 mins ago" },
    { id: 3, type: "info", message: "Station B-1 back online after maintenance", time: "1 hour ago" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500"
      case "occupied":
        return "bg-blue-500"
      case "maintenance":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>
      case "occupied":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Occupied</Badge>
      case "maintenance":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Maintenance</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Housing Hub</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Zap className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold text-foreground">EV Charging Management</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="booking">Book Slot</TabsTrigger>
            <TabsTrigger value="schedule">My Schedule</TabsTrigger>
            <TabsTrigger value="notifications">Alerts</TabsTrigger>
            <TabsTrigger value="energy">Energy</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">2</p>
                      <p className="text-sm text-muted-foreground">Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Battery className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">1</p>
                      <p className="text-sm text-muted-foreground">In Use</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Settings className="h-8 w-8 text-yellow-500" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">1</p>
                      <p className="text-sm text-muted-foreground">Maintenance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-8 w-8 text-accent" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">45m</p>
                      <p className="text-sm text-muted-foreground">Avg Wait</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Charging Station Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-secondary/20 rounded-lg h-64 overflow-hidden">
                  {/* Simple map representation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
                    {chargingStations.map((station) => (
                      <div
                        key={station.id}
                        className={`absolute w-4 h-4 rounded-full cursor-pointer transform -translate-x-2 -translate-y-2 ${getStatusColor(station.status)} hover:scale-125 transition-transform`}
                        style={{ left: `${station.coordinates.x}%`, top: `${station.coordinates.y}%` }}
                        onClick={() => setSelectedStation(station.id)}
                      />
                    ))}

                    {/* Building blocks representation */}
                    <div className="absolute left-[15%] top-[20%] w-16 h-20 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center text-xs font-semibold">
                      Block A
                    </div>
                    <div className="absolute left-[55%] top-[40%] w-16 h-20 bg-gray-200 rounded border-2 border-gray-300 flex items-center justify-center text-xs font-semibold">
                      Block B
                    </div>
                  </div>
                </div>

                {selectedStation && (
                  <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                    {(() => {
                      const station = chargingStations.find((s) => s.id === selectedStation)
                      return station ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{station.name}</h4>
                            {getStatusBadge(station.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">{station.location}</p>
                          <p className="text-sm">
                            <strong>Type:</strong> {station.type} ({station.power})
                          </p>
                          <p className="text-sm">
                            <strong>Next Available:</strong> {station.nextSlot}
                          </p>
                          {station.status === "available" && (
                            <Button size="sm" className="mt-2">
                              Book This Station
                            </Button>
                          )}
                        </div>
                      ) : null
                    })()}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Station Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chargingStations.map((station) => (
                <Card key={station.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{station.name}</CardTitle>
                      {getStatusBadge(station.status)}
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {station.location}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Type: {station.type}</span>
                      <span>Power: {station.power}</span>
                    </div>

                    {station.status === "occupied" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Current User: {station.currentUser}</span>
                          <span className="text-blue-600">{station.estimatedTime}</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Next: {station.nextSlot}</span>
                      {station.status === "available" ? (
                        <Button size="sm">Book Now</Button>
                      ) : station.status === "occupied" ? (
                        <Button size="sm" variant="outline">
                          Join Queue
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" disabled>
                          Unavailable
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Booking Tab */}
          <TabsContent value="booking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Book Charging Slot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Select Station</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>Station A-1 (Available)</option>
                      <option>Station B-2 (Available)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Date & Time</label>
                    <input type="datetime-local" className="w-full mt-1 p-2 border rounded-md" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Duration</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>2 hours</option>
                      <option>3 hours</option>
                      <option>4 hours</option>
                      <option>6 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Vehicle Type</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>Electric Car</option>
                      <option>Electric Scooter</option>
                      <option>Electric Bike</option>
                    </select>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Booking Guidelines</span>
                  </div>
                  <ul className="mt-2 text-sm text-yellow-700 space-y-1">
                    <li>• Maximum 2 bookings per week per resident</li>
                    <li>• Please arrive within 15 minutes of your slot</li>
                    <li>• Remove vehicle promptly after charging</li>
                    <li>• Cancellations allowed up to 2 hours before slot</li>
                  </ul>
                </div>

                <Button className="w-full">Confirm Booking</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Upcoming Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{booking.station}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.time} • {booking.duration}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                          {booking.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Modify
                        </Button>
                        <Button size="sm" variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Charging History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded">
                    <div>
                      <p className="font-medium">Station A-1</p>
                      <p className="text-sm text-muted-foreground">Yesterday 14:00 - 16:30</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹45</p>
                      <p className="text-sm text-muted-foreground">2.5 hours</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-secondary/20 rounded">
                    <div>
                      <p className="font-medium">Station B-2</p>
                      <p className="text-sm text-muted-foreground">Jan 15, 09:00 - 12:00</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹60</p>
                      <p className="text-sm text-muted-foreground">3 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Recent Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border-l-4 ${
                        notification.type === "success"
                          ? "bg-green-50 border-green-400"
                          : notification.type === "warning"
                            ? "bg-yellow-50 border-yellow-400"
                            : "bg-blue-50 border-blue-400"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        {notification.type === "success" && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                        {notification.type === "warning" && (
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        )}
                        {notification.type === "info" && <Bell className="h-5 w-5 text-blue-500 mt-0.5" />}
                        <div className="flex-1">
                          <p className="text-sm font-medium">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Charging completion alerts</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Booking reminders</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Station availability updates</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Maintenance notifications</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Energy Tab */}
          <TabsContent value="energy" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-green-500" />
                    <span>Energy Optimization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Solar Energy Available</span>
                      <span className="text-sm font-medium text-green-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Grid Load</span>
                      <span className="text-sm font-medium text-blue-600">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      <strong>Optimal Charging Time:</strong> 11:00 AM - 3:00 PM
                      <br />
                      <span className="text-xs">Peak solar generation period</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-green-600">2.4 tons</div>
                    <p className="text-sm text-muted-foreground">CO₂ saved this month</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-semibold text-blue-600">156</div>
                      <p className="text-xs text-muted-foreground">Charging sessions</p>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-green-600">89%</div>
                      <p className="text-xs text-muted-foreground">Green energy used</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      Your society ranks <strong>#3</strong> in the city for sustainable EV charging!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Smart Scheduling Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                      <p className="font-medium text-green-800">Schedule for 12:00 PM today</p>
                      <p className="text-sm text-green-600">Peak solar generation + low grid demand</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
                    >
                      Book Now
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div>
                      <p className="font-medium text-yellow-800">Avoid 6:00 PM - 9:00 PM</p>
                      <p className="text-sm text-yellow-600">High grid demand period</p>
                    </div>
                    <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                      Peak Hours
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
