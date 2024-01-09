import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Shop/>} />

        </Routes>
        
        <Footer/>
      </Router>
      

      
    </div>
  );
}

export default App;
