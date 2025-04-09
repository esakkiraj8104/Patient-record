
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Logo } from "@/components/Logo";
import { Calendar, ClipboardCheck, Lock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Logo size="lg" className="mb-6" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                Patient Record Management System
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Manage healthcare records efficiently and securely with our comprehensive digital solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="btn-primary px-8 py-3 text-lg"
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="btn-outline px-8 py-3 text-lg"
                >
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Medical professionals"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="medical-card flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-medical-soft-blue flex items-center justify-center">
                <ClipboardCheck className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Records</h3>
              <p className="text-gray-600">
                Securely store and access patient medical history, diagnoses, and treatment plans.
              </p>
            </div>

            <div className="medical-card flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-medical-soft-green flex items-center justify-center">
                <Calendar className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Appointments</h3>
              <p className="text-gray-600">
                Schedule, view, and manage appointments with ease and efficiency.
              </p>
            </div>

            <div className="medical-card flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-medical-soft-blue flex items-center justify-center">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
              <p className="text-gray-600">
                Comprehensive tools for doctors to manage their patients effectively.
              </p>
            </div>

            <div className="medical-card flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-medical-soft-green flex items-center justify-center">
                <Lock className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Security</h3>
              <p className="text-gray-600">
                End-to-end encryption and secure authentication to protect sensitive information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals and patients who use our platform for better healthcare management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-medical-purple hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
