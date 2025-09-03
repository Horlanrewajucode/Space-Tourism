import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
