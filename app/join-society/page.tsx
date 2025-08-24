"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Home, Users, Key, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Mock society data
const mockSocieties = [
  { id: 1, name: "Green Valley Apartments", location: "Mumbai - Bandra", code: "GVA2024" },
  { id: 2, name: "Sunrise Heights", location: "Mumbai - Andheri", code: "SH2024" },
  { id: 3, name: "Royal Gardens", location: "Mumbai - Powai", code: "RG2024" },
  { id: 4, name: "Paradise Towers", location: "Delhi - Gurgaon", code: "PT2024" },
  { id: 5, name: "Crystal Palace", location: "Delhi - Noida", code: "CP2024" },
  { id: 6, name: "Tech Park Residency", location: "Bangalore - Koramangala", code: "TPR2024" },
  { id: 7, name: "Whitefield Gardens", location: "Bangalore - Whitefield", code: "WG2024" },
  { id: 8, name: "IT Hub Apartments", location: "Pune - Hinjewadi", code: "IHA2024" },
  { id: 9, name: "Baner Heights", location: "Pune - Baner", code: "BH2024" },
  { id: 10, name: "Cyber City Homes", location: "Hyderabad - Hi-Tech City", code: "CCH2024" },
]

export default function JoinSocietyPage() {
  const router = useRouter()
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedSociety, setSelectedSociety] = useState("")
  const [accessCode, setAccessCode] = useState("")
  const [customSociety, setCustomSociety] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const filteredSocieties = mockSocieties.filter(
    (society) => !selectedLocation || society.location === selectedLocation,
  )

  const handleJoinSociety = async () => {
    setError("")
    setIsLoading(true)

    // Validation
    if (!selectedSociety && !customSociety) {
      setError("Please select or enter a society name")
      setIsLoading(false)
      return
    }

    if (!accessCode) {
      setError("Please enter the society access code")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      if (accessCode === "1234") {
        setSuccess(true)
        setTimeout(() => {
          router.push("/society-dashboard")
        }, 2000)
      } else {
        setError("Invalid access code. Please check with your society admin.")
      }
      setIsLoading(false)
    }, 1500)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Welcome to Your Society!</h2>
            <p className="text-muted-foreground mb-4">
              You have successfully joined your residential society. Redirecting to dashboard...
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    )
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
          {/* Join Society Form */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-4">Join Your Society</h1>
              <p className="text-xl text-muted-foreground">
                Connect with your residential community and access society services
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Society Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Location Selection */}
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-base font-medium">
                    Select Your Location
                  </Label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Choose your area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mumbai - Bandra">Mumbai - Bandra</SelectItem>
                      <SelectItem value="Mumbai - Andheri">Mumbai - Andheri</SelectItem>
                      <SelectItem value="Mumbai - Powai">Mumbai - Powai</SelectItem>
                      <SelectItem value="Delhi - Gurgaon">Delhi - Gurgaon</SelectItem>
                      <SelectItem value="Delhi - Noida">Delhi - Noida</SelectItem>
                      <SelectItem value="Bangalore - Koramangala">Bangalore - Koramangala</SelectItem>
                      <SelectItem value="Bangalore - Whitefield">Bangalore - Whitefield</SelectItem>
                      <SelectItem value="Pune - Hinjewadi">Pune - Hinjewadi</SelectItem>
                      <SelectItem value="Pune - Baner">Pune - Baner</SelectItem>
                      <SelectItem value="Hyderabad - Hi-Tech City">Hyderabad - Hi-Tech City</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Society Selection */}
                <div className="space-y-3">
                  <Label htmlFor="society" className="text-base font-medium">
                    Select Your Society
                  </Label>
                  <Select value={selectedSociety} onValueChange={setSelectedSociety} disabled={!selectedLocation}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder={selectedLocation ? "Choose your society" : "Select location first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredSocieties.map((society) => (
                        <SelectItem key={society.id} value={society.id.toString()}>
                          {society.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="text-sm text-muted-foreground text-center">or</div>

                  <Input
                    placeholder="Enter society name manually"
                    value={customSociety}
                    onChange={(e) => setCustomSociety(e.target.value)}
                    className="h-12"
                  />
                </div>

                {/* Access Code */}
                <div className="space-y-3">
                  <Label htmlFor="accessCode" className="text-base font-medium">
                    Society Access Code
                  </Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="accessCode"
                      type="password"
                      placeholder="Enter access code from society admin"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      className="h-12 pl-10"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Contact your society admin or management office to get the access code
                  </p>
                </div>

                {/* Error Alert */}
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Join Button */}
                <Button
                  onClick={handleJoinSociety}
                  size="lg"
                  className="w-full h-12 text-lg"
                  disabled={isLoading || (!selectedSociety && !customSociety) || !accessCode}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Joining Society...
                    </>
                  ) : (
                    <>
                      <Users className="mr-2 h-5 w-5" />
                      Join Society
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="bg-secondary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Need Help?</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Contact your society management office for the access code</p>
                  <p>• If your society is not listed, enter the name manually</p>
                  <p>• Access codes are typically 6-8 characters long</p>
                  <p>• For technical support, contact our help desk</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Illustration/Benefits */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500&text=Community+Connection"
                alt="Society Community Illustration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg" />

              {/* Benefits Cards */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Community Events</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Society Services</span>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Society Benefits</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Community Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Event Notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Service Requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Neighbor Connect</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Energy Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Maintenance Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Society Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access smart community services once you join your society
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
