import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
