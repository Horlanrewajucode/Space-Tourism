import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
