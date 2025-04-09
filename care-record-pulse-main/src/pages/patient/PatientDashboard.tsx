
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { Calendar, Clock, FileText, Plus, User } from "lucide-react";
import { useState } from "react";

const PatientDashboard = () => {
  const [patientName] = useState("Sarah Johnson");
  
  const medicalRecords = [
    {
      id: 1,
      diagnosis: "Seasonal Allergies",
      date: "2025-03-15",
      doctor: "Dr. Michael Stevens",
      notes: "Patient experiencing nasal congestion and itchy eyes. Prescribed antihistamine."
    },
    {
      id: 2,
      diagnosis: "Annual Physical",
      date: "2025-02-10",
      doctor: "Dr. Emily Chen",
      notes: "All vitals normal. Recommended regular exercise and balanced diet."
    },
    {
      id: 3,
      diagnosis: "Strep Throat",
      date: "2025-01-05",
      doctor: "Dr. Michael Stevens",
      notes: "Throat culture positive for strep. Prescribed antibiotics for 10 days."
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Emily Chen",
      specialty: "Primary Care",
      date: "2025-04-20",
      time: "10:30 AM",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Robert Wilson",
      specialty: "Dermatology",
      date: "2025-05-05",
      time: "2:15 PM",
      status: "pending"
    }
  ];

  return (
    <div className="flex h-screen">
      <SidebarNav role="patient" />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {patientName}</h1>
            <p className="text-gray-600">Here's your health summary and upcoming appointments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Medical Records</CardTitle>
                  <FileText className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{medicalRecords.length}</div>
                <p className="text-sm text-gray-500">Total records in your history</p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Next Appointment</CardTitle>
                  <Calendar className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <>
                    <div className="text-lg font-bold">{new Date(upcomingAppointments[0].date).toLocaleDateString()}</div>
                    <p className="text-sm text-gray-500">With {upcomingAppointments[0].doctor}</p>
                  </>
                ) : (
                  <p className="text-sm text-gray-500">No upcoming appointments</p>
                )}
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Profile Status</CardTitle>
                  <User className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">Complete</div>
                <p className="text-sm text-gray-500">Your profile is up to date</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="dashboard-section">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Medical Records</CardTitle>
                    <CardDescription>Your latest health information</CardDescription>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <a href="/patient/records">View All</a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalRecords.map((record) => (
                    <div key={record.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{record.diagnosis}</h3>
                        <Badge className="badge-soft-blue">{new Date(record.date).toLocaleDateString()}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{record.doctor}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">{record.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="dashboard-section">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Schedule and status of your appointments</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Plus size={16} />
                    <span>Request</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{appointment.doctor}</h3>
                          <Badge 
                            className={appointment.status === "confirmed" 
                              ? "badge-soft-green" 
                              : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{appointment.specialty}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
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
                    <p className="text-gray-500">No upcoming appointments</p>
                    <Button variant="default" size="sm" className="mt-2">
                      Request Appointment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
