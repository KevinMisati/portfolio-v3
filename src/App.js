
import './App.css';
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import ProjectDetails from "./Pages/ProjectDetails"
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/:title" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
