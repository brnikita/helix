import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AssetSelection } from "./screens/AssetSelection";
import { Generate } from "./screens/Generate";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/generate" element={<Generate />} />
        <Route path="/assets" element={<AssetSelection />} />
        <Route path="/" element={<Navigate to="/generate" replace />} />
      </Routes>
    </Router>
  </StrictMode>,
); 