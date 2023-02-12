import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<Index />} />
          <Route path="/entries/:id" element={<Show />} />
          <Route path="/entries/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
