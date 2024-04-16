import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RentalResults from "./Pages/RentalResults";
import RentalOptions from "./Pages/Options";
import RentalInfos from "./Pages/RentalInfos";

function App() {
  return (
    <div className="App font-poppins">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search-results" element={<RentalResults />} />
          <Route exact path="/options" element={<RentalOptions />} />
          <Route exact path="/order-infos" element={<RentalInfos />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
