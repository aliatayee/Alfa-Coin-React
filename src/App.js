import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import CoinDetail from './components/CoinDetails/CoinDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<CoinDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
