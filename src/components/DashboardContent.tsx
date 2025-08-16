import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./dashboard/Home";
import Emissions from "./dashboard/Emissions";
import Goals from "./dashboard/Goals";
import Indicators from "./dashboard/Indicators";
import Reports from "./dashboard/Reports";
import Initiatives from "./dashboard/Initiatives";
import Scenarios from "./dashboard/Scenarios";
import Alerts from "./dashboard/Alerts";
import History from "./dashboard/History";
import Users from "./dashboard/Users";

const DashboardContent = () => {
  return (
  <main className="flex-1 overflow-x-hidden overflow-y-auto p-2 xs:p-4 sm:p-6 dashboard-bg min-w-0">
      <Routes>
  <Route path="" element={<Home />} />
  <Route path="emissions" element={<Emissions />} />
  <Route path="goals" element={<Goals />} />
  <Route path="indicators" element={<Indicators />} />
  <Route path="reports" element={<Reports />} />
  <Route path="initiatives" element={<Initiatives />} />
  <Route path="scenarios" element={<Scenarios />} />
  <Route path="alerts" element={<Alerts />} />
  <Route path="history" element={<History />} />
  <Route path="users" element={<Users />} />
      </Routes>
    </main>
  );
};

export default DashboardContent;