import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Dashboard, Inventory } from "./components";
import Configuration from "./components/configuration/Configuration";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<p>Index</p>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="configuration" element={<Configuration />} />
      </Routes>
    </Layout>
  );
}

export default App;
