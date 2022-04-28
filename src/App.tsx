import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BuildingEdit from "./Pages/Buildings/BuildingEdit";
import BuildingOverview from "./Pages/Buildings/BuildingOverview";
import Layout from "./Pages/Layout";
import PeripheralEdit from "./Pages/Peripherals/PeripheralEdit";
import PeripheralOverview from "./Pages/Peripherals/PeripheralOverview";
import PeripheralTypeEdit from "./Pages/PeripheralTypes/PeripheralTypeEdit";
import PeripheralTypeOverview from "./Pages/PeripheralTypes/PeripheralTypeOverview";
import ReservationEdit from "./Pages/Reservations/ReservationEdit";
import ReservationOverview from "./Pages/Reservations/ReservationOverview";
import Table from "./Pages/Table";
import UserOverview from "./Pages/User/UserOverview";
import UserProfile from "./Pages/User/UserProfile";
import WorkspaceEdit from "./Pages/Workspaces/WorkspaceEdit";
import WorkspaceOverview from "./Pages/Workspaces/WorkspaceOverview";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Layout />

        <Routes>
          <Route path="/buildings" element={<BuildingOverview />} />
          <Route path="/buildings/new" element={<BuildingEdit />} />
          <Route path="/buildings/:id" element={<BuildingEdit />} />

          <Route path="/workspaces" element={<WorkspaceOverview />} />
          <Route path="/workspaces/new" element={<WorkspaceEdit />} />
          <Route path="/workspaces/:id" element={<WorkspaceEdit />} />

          <Route
            path="/peripherals/categories"
            element={<PeripheralTypeOverview />}
          />
          <Route
            path="/peripherals/categories/new"
            element={<PeripheralTypeEdit />}
          />
          <Route
            path="/peripherals/categories/:id"
            element={<PeripheralTypeEdit />}
          />

          <Route path="/peripherals" element={<PeripheralOverview />} />
          <Route path="/peripherals/new" element={<PeripheralEdit />} />
          <Route path="/peripherals/:id" element={<PeripheralEdit />} />

          <Route path="/reservations" element={<ReservationOverview />} />
          <Route path="/reservations/new" element={<ReservationEdit />} />
          <Route path="/reservations/:id" element={<ReservationEdit />} />

          <Route path="/users" element={<UserOverview />} />

          <Route path="/profile" element={<UserProfile />} />

          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
