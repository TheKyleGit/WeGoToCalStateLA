import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Navbar from "./components/MainNav";
import Blog from "./components/Blog";
import Resources from "./components/Resources";
import AboutUs from "./components/AboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Blog />} />
        <Route path="/WeGoToCalStateLA" element={<Blog />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
