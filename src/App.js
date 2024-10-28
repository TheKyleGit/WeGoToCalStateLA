import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Navbar from "./components/MainNav";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="main-container" style={{
      backgroundColor: "#f3f3f3"
      }}>
        <div className='pb-3'>
            <Navbar />
        </div>
            <Blog />
    </div>
  );
}

export default App;
