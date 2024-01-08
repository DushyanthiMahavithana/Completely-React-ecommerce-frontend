import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        
      </Router>
      

      
    </div>
  );
}

export default App;
