import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Dashboard, Inventory } from "./components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<p>Index</p>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
      </Routes>
    </Layout>
  );
}

export default App;
