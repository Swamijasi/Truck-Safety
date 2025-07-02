import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import TruckDetails from "./pages/TruckDetails";
import FleetSafety from "./pages/FleetSafety";
import AuditPerformance from "./pages/AuditPerformance";
import TruckPerformance from "./pages/TruckPerformance";
import CommonDefect from "./pages/CommonDefect";
import VendorPerformance from "./pages/VendorPerformance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 👇 Default route to FleetSafety */}
          <Route index element={<FleetSafety />} />

          {/* Other routes */}
          <Route path="fleet-safety" element={<FleetSafety />} />
          <Route path="audit-performance" element={<AuditPerformance />} />
          <Route path="truck-performance" element={<TruckPerformance />} />
          <Route path="common-defects" element={<CommonDefect />} />
          <Route path="vendor-performance" element={<VendorPerformance />} />
          <Route path="trucks" element={<TruckDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
