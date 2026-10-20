"use client";

import { useState } from "react";

import MobileDrawer from "@/components/layout/MobileDrawer/MobileDrawer";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import MobileTopbar from "@/components/mobileTopbar/MobileTopBar";
import ProtectedRoute from "@/components/layout/protectedRoute/ProtectedRoute";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ProtectedRoute>
      <div className="dashboard-layout">
        {/* DESKTOP SIDEBAR */}
        <aside className="dashboard-sidebar">
          <Sidebar />
        </aside>

        {/* MOBILE TOPBAR */}
        <div className="dashboard-mobile-navigation">
          <MobileTopbar
            onMenuClick={() => setDrawerOpen(true)}
          />
        </div>

        {/* MAIN CONTENT */}
        <main
          className="dashboard-main"
          id="dashboard-main"
        >
          {children}
        </main>

        {/* MOBILE DRAWER — OUTSIDE THE TOPBAR WRAPPER */}
        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>
    </ProtectedRoute>
  );
}
