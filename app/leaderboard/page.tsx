import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Trophy, Leaf, Recycle, Zap, Droplets, ArrowLeft, Cloud, Wind } from "lucide-react"
import Link from "next/link"

// Mock data for the leaderboard
const leaderboardData = [
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
  {
    id: 4,
    name: "David Kim",
    avatar: "/casual-man.png",
    points: 2180,
    rank: 4,
    activities: ["Energy monitoring", "Recycling program", "Green roof"],
    badge: "Eco Warrior",
    weather: { temp: 25, condition: "Cloudy", humidity: 75 },
    aqi: { value: 38, level: "Good", color: "text-green-600" },
  },
  {
    id: 5,
    name: "Emma Thompson",
    avatar: "/casual-woman.png",
    points: 1950,
    rank: 5,
    activities: ["Water conservation", "Local sourcing", "Carpooling"],
    badge: "Green Advocate",
    weather: { temp: 27, condition: "Sunny", humidity: 60 },
    aqi: { value: 85, level: "Unhealthy", color: "text-red-600" },
  },
]

const sustainabilityActions = [
  { icon: Zap, name: "Energy Efficiency", points: "50-200 pts", color: "text-yellow-600" },
  { icon: Droplets, name: "Water Conservation", points: "30-150 pts", color: "text-blue-600" },
  { icon: Recycle, name: "Waste Reduction", points: "40-180 pts", color: "text-green-600" },
  { icon: Leaf, name: "Green Transportation", points: "60-250 pts", color: "text-emerald-600" },
]

export default function SustainabilityLeaderboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Housing Hub</span>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mr-4">
              <Trophy className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Sustainability Leaderboard</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating our community's commitment to environmental responsibility and sustainable living
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Trophy className="h-6 w-6 text-accent mr-2" />
                  Top Eco Champions
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

                  {leaderboardData.map((user, index) => (
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather & AQI Info Card */}
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

            {/* Points System */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Leaf className="h-5 w-5 text-accent mr-2" />
                  How to Earn Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sustainabilityActions.map((action, index) => (
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

            {/* Your Progress */}
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

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Community Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Sarah installed solar panels</span>
                    <span className="text-accent font-semibold">+200 pts</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Michael started composting</span>
                    <span className="text-accent font-semibold">+150 pts</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Priya planted 5 trees</span>
                    <span className="text-accent font-semibold">+100 pts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
