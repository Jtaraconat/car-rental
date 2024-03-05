import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import RentalResults from "./Pages/RentalResults";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search-results" element={<RentalResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
