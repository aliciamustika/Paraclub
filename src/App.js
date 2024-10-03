import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/beranda';
import Berita from './components/berita';
import Event from './components/event';

function App() {
  return (
    <Router>
    <div className="App">
       {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header> */}
     </div>

     <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/berita" element={<Berita />} />
      <Route path="/event" element={<Event />} />
     </Routes>

    </Router>
  );
}

export default App;
