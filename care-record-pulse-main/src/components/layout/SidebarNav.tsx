
import { cn } from "@/lib/utils";
import {
  Activity,
  Calendar,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  Settings,
  User,
  Users
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../Logo";
import { useState } from "react";

interface SidebarNavProps {
  role: "patient" | "doctor" | "admin";
}

export const SidebarNav = ({ role }: SidebarNavProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Define navigation items based on role
  const patientNavItems = [
    { icon: Home, label: "Dashboard", to: "/patient" },
    { icon: FileText, label: "Medical Records", to: "/patient/records" },
    { icon: Calendar, label: "Appointments", to: "/patient/appointments" },
    { icon: Settings, label: "Settings", to: "/patient/settings" },
  ];

  const doctorNavItems = [
    { icon: Home, label: "Dashboard", to: "/doctor" },
    { icon: Users, label: "Patients", to: "/doctor/patients" },
    { icon: ClipboardList, label: "Medical Records", to: "/doctor/records" },
    { icon: Calendar, label: "Appointments", to: "/doctor/appointments" },
    { icon: Settings, label: "Settings", to: "/doctor/settings" },
  ];

  const adminNavItems = [
    { icon: Home, label: "Dashboard", to: "/admin" },
    { icon: Users, label: "Users", to: "/admin/users" },
    { icon: Activity, label: "System Logs", to: "/admin/logs" },
    { icon: Calendar, label: "Appointments", to: "/admin/appointments" },
    { icon: Settings, label: "Settings", to: "/admin/settings" },
  ];

  const navItems = role === "patient" 
    ? patientNavItems 
    : role === "doctor" 
      ? doctorNavItems
      : adminNavItems;

  return (
    <div
      className={cn(
        "h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 flex justify-between items-center border-b">
        {!collapsed ? (
          <Logo size="sm" />
        ) : (
          <Activity className="text-medical-purple mx-auto" size={24} />
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "flex items-center py-2 px-4 rounded-lg transition-colors",
                  isActive(item.to)
                    ? "bg-medical-purple text-white"
                    : "hover:bg-gray-100"
                )}
              >
                <item.icon size={20} />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t mt-auto">
        <Link
          to="/login"
          className={cn(
            "flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 text-red-500 transition-colors"
          )}
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Link>
      </div>
    </div>
  );
};
