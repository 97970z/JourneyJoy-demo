// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </LoadScript>
  );
}

export default App;
