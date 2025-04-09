
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { Calendar, Clock, FileText, Plus, Search, User, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DoctorDashboard = () => {
  const [doctorName] = useState("Dr. Michael Stevens");
  const [searchQuery, setSearchQuery] = useState("");
  
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      condition: "Seasonal Allergies",
      lastVisit: "2025-03-15",
      contact: "sarah.j@example.com",
      age: 34
    },
    {
      id: 2,
      name: "Robert Davis",
      condition: "Hypertension",
      lastVisit: "2025-03-10",
      contact: "robert.d@example.com",
      age: 58
    },
    {
      id: 3,
      name: "Emily Wilson",
      condition: "Diabetes Type 2",
      lastVisit: "2025-03-05",
      contact: "emily.w@example.com",
      age: 45
    },
    {
      id: 4,
      name: "James Taylor",
      condition: "Asthma",
      lastVisit: "2025-02-28",
      contact: "james.t@example.com",
      age: 27
    },
    {
      id: 5,
      name: "Maria Garcia",
      condition: "Pregnancy",
      lastVisit: "2025-03-12",
      contact: "maria.g@example.com",
      age: 32
    }
  ];

  const appointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      date: "2025-04-10",
      time: "9:00 AM",
      type: "Follow-up",
      status: "confirmed"
    },
    {
      id: 2,
      patient: "James Taylor",
      date: "2025-04-10",
      time: "10:30 AM",
      type: "Checkup",
      status: "confirmed"
    },
    {
      id: 3,
      patient: "Maria Garcia",
      date: "2025-04-10",
      time: "11:45 AM",
      type: "Prenatal Visit",
      status: "confirmed"
    },
    {
      id: 4,
      patient: "Robert Davis",
      date: "2025-04-11",
      time: "2:15 PM",
      type: "Blood Pressure Check",
      status: "pending"
    }
  ];

  // Filter patients based on search query
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get today's appointments
  const todaysDate = new Date().toISOString().split('T')[0];
  const todaysAppointments = appointments.filter(
    (appointment) => appointment.date === "2025-04-10" // Using a fixed date for demo purposes
  );

  return (
    <div className="flex h-screen">
      <SidebarNav role="doctor" />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {doctorName}</h1>
            <p className="text-gray-600">Manage your patients and appointments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Total Patients</CardTitle>
                  <Users className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{patients.length}</div>
                <p className="text-sm text-gray-500">Assigned to you</p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Today's Appointments</CardTitle>
                  <Calendar className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{todaysAppointments.length}</div>
                <p className="text-sm text-gray-500">Scheduled for today</p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Medical Records</CardTitle>
                  <FileText className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">154</div>
                <p className="text-sm text-gray-500">Created this month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="dashboard-section">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Patients</CardTitle>
                    <CardDescription>Manage your assigned patients</CardDescription>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a href="/doctor/patients">View All</a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      placeholder="Search patients..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredPatients.slice(0, 3).map((patient) => (
                    <div key={patient.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{patient.name}</h3>
                        <Badge className="badge-soft-blue">{patient.age} years</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Condition: {patient.condition}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                        <Button variant="ghost" size="sm" className="text-medical-purple p-0 h-auto">
                          View Records
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredPatients.length === 0 && (
                  <div className="text-center py-6">
                    <p className="text-gray-500">No patients found</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="dashboard-section">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Today's Appointments</CardTitle>
                    <CardDescription>Your schedule for today</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Plus size={16} />
                    <span>Add</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {todaysAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {todaysAppointments.map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{appointment.patient}</h3>
                          <Badge 
                            className={appointment.status === "confirmed" 
                              ? "badge-soft-green" 
                              : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{appointment.type}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-500">No appointments for today</p>
                    <Button variant="default" size="sm" className="mt-2">
                      Schedule Appointment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="dashboard-section xl:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Add Medical Record</CardTitle>
                    <CardDescription>Create a new patient record</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="patient" className="form-label">Patient</label>
                      <select id="patient" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-medical-purple focus:ring focus:ring-medical-purple/20 p-2.5 border">
                        <option value="">Select patient</option>
                        {patients.map(patient => (
                          <option key={patient.id} value={patient.id}>{patient.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="date" className="form-label">Date</label>
                      <Input type="date" id="date" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="diagnosis" className="form-label">Diagnosis</label>
                    <Input type="text" id="diagnosis" placeholder="Enter diagnosis" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes" className="form-label">Notes</label>
                    <textarea 
                      id="notes" 
                      rows={4} 
                      placeholder="Enter detailed notes" 
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-medical-purple focus:ring focus:ring-medical-purple/20 p-2.5 border resize-none"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="btn-primary">
                      Save Record
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
