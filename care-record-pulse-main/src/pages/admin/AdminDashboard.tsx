
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { Activity, Calendar, FileText, Plus, Settings, Trash2, User, UserPlus, Users } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AdminDashboard = () => {
  const [adminName] = useState("Alex Chen");
  
  const userStats = {
    totalUsers: 157,
    doctors: 35,
    patients: 120,
    admins: 2
  };

  const recentActivities = [
    {
      id: 1,
      user: "Dr. Michael Stevens",
      action: "Created a new medical record",
      timestamp: "2025-04-09T10:30:00Z"
    },
    {
      id: 2,
      user: "Sarah Johnson",
      action: "Scheduled a new appointment",
      timestamp: "2025-04-09T09:15:00Z"
    },
    {
      id: 3,
      user: "Dr. Emily Chen",
      action: "Updated patient information",
      timestamp: "2025-04-08T16:45:00Z"
    },
    {
      id: 4,
      user: "Admin: Alex Chen",
      action: "Added a new doctor account",
      timestamp: "2025-04-08T14:20:00Z"
    },
    {
      id: 5,
      user: "Robert Davis",
      action: "Canceled an appointment",
      timestamp: "2025-04-08T11:05:00Z"
    }
  ];

  const appointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      doctor: "Dr. Michael Stevens",
      date: "2025-04-10",
      time: "9:00 AM",
      status: "confirmed"
    },
    {
      id: 2,
      patient: "James Taylor",
      doctor: "Dr. Emily Chen",
      date: "2025-04-10",
      time: "10:30 AM",
      status: "confirmed"
    },
    {
      id: 3,
      patient: "Maria Garcia",
      doctor: "Dr. Michael Stevens",
      date: "2025-04-10",
      time: "11:45 AM",
      status: "confirmed"
    },
    {
      id: 4,
      patient: "Robert Davis",
      doctor: "Dr. Emily Chen",
      date: "2025-04-11",
      time: "2:15 PM",
      status: "pending"
    }
  ];

  // State for dialogs
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    role: "patient"
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle add user logic here
    setIsAddUserDialogOpen(false);
    // Reset form
    setNewUserData({
      name: "",
      email: "",
      role: "patient"
    });
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="flex h-screen">
      <SidebarNav role="admin" />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {adminName}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Total Users</CardTitle>
                  <Users className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userStats.totalUsers}</div>
                <p className="text-sm text-gray-500">Registered users</p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Doctors</CardTitle>
                  <User className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userStats.doctors}</div>
                <p className="text-sm text-gray-500">Registered doctors</p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Patients</CardTitle>
                  <User className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{userStats.patients}</div>
                <p className="text-sm text-gray-500">Registered patients</p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Appointments</CardTitle>
                  <Calendar className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{appointments.length}</div>
                <p className="text-sm text-gray-500">Scheduled this week</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="dashboard-section">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Add, edit or remove users</CardDescription>
                  </div>
                  <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <UserPlus size={16} />
                        <span>Add User</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>
                          Create a new user account in the system.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleAddUser} className="space-y-4 py-4">
                        <div className="form-group">
                          <Label htmlFor="name" className="form-label">Full Name</Label>
                          <Input 
                            id="name" 
                            value={newUserData.name}
                            onChange={(e) => setNewUserData({...newUserData, name: e.target.value})}
                            placeholder="Enter user's full name"
                          />
                        </div>
                        <div className="form-group">
                          <Label htmlFor="email" className="form-label">Email</Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={newUserData.email}
                            onChange={(e) => setNewUserData({...newUserData, email: e.target.value})}
                            placeholder="Enter user's email address"
                          />
                        </div>
                        <div className="form-group">
                          <Label htmlFor="role" className="form-label">Role</Label>
                          <Select 
                            value={newUserData.role}
                            onValueChange={(value) => setNewUserData({...newUserData, role: value})}
                          >
                            <SelectTrigger id="role">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="patient">Patient</SelectItem>
                              <SelectItem value="doctor">Doctor</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="btn-primary">Add User</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <User className="text-medical-purple mr-2" size={16} />
                        <h3 className="font-medium">Dr. Michael Stevens</h3>
                      </div>
                      <Badge className="badge-soft-blue">Doctor</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">michael.s@example.com</p>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Settings size={16} className="text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <User className="text-medical-purple mr-2" size={16} />
                        <h3 className="font-medium">Sarah Johnson</h3>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Patient</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">sarah.j@example.com</p>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Settings size={16} className="text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <User className="text-medical-purple mr-2" size={16} />
                        <h3 className="font-medium">Dr. Emily Chen</h3>
                      </div>
                      <Badge className="badge-soft-blue">Doctor</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">emily.c@example.com</p>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Settings size={16} className="text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <User className="text-medical-purple mr-2" size={16} />
                        <h3 className="font-medium">Alex Chen</h3>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">Admin</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">alex.c@example.com</p>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Settings size={16} className="text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/admin/users">View All Users</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="dashboard-section">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>System Activity</CardTitle>
                    <CardDescription>Recent activity logs</CardDescription>
                  </div>
                  <Activity className="text-medical-purple" size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="border rounded-lg p-3 hover:shadow-sm transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-sm">{activity.user}</p>
                          <p className="text-sm text-gray-600">{activity.action}</p>
                        </div>
                        <p className="text-xs text-gray-500">{formatTimestamp(activity.timestamp)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/admin/logs">View All Logs</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="dashboard-section xl:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Manage system-wide appointments</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Plus size={16} />
                    <span>Add</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Patient</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Doctor</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Date</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Time</th>
                        <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
                        <th className="px-4 py-3 text-right font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3">{appointment.patient}</td>
                          <td className="px-4 py-3">{appointment.doctor}</td>
                          <td className="px-4 py-3">{new Date(appointment.date).toLocaleDateString()}</td>
                          <td className="px-4 py-3">{appointment.time}</td>
                          <td className="px-4 py-3">
                            <Badge 
                              className={appointment.status === "confirmed" 
                                ? "badge-soft-green" 
                                : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm" className="p-1 h-auto">
                                <Settings size={16} className="text-gray-500" />
                              </Button>
                              <Button variant="ghost" size="sm" className="p-1 h-auto">
                                <Trash2 size={16} className="text-red-500" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/admin/appointments">Manage All Appointments</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
