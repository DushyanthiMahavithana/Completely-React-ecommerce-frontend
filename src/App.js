import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Footer/>
      </Router>
      

      
    </div>
  );
}

export default App;
