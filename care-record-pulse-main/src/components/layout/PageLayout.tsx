
import { Logo } from "@/components/Logo";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface PageLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export const PageLayout = ({ children, showFooter = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-medical-light-bg">
      {children}
      {showFooter && (
        <footer className="mt-auto py-6 border-t">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Logo size="sm" />
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Patient Record Management System. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/contact" className="text-sm text-medical-purple hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
