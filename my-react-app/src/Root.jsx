import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import App from "./App";

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
