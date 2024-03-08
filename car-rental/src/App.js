import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Home/Navbar";
import RentalResults from "./Pages/RentalResults";
import RentalOptions from "./Pages/Options";
import RentalInfos from "./Pages/RentalInfos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search-results" element={<RentalResults />} />
          <Route exact path="/options" element={<RentalOptions />} />
          <Route exact path="/user-infos" element={<RentalInfos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
