import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import WeatherPage from './Components/WeatherPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/WatherPage' element={<WeatherPage/>}/>
      </Routes>
    </Router>
    );
}

export default App;
