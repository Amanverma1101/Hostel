import './App.css';
import Login from './components/account/Login.jsx';
import Home from "./components/account/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomAllotment from './components/RoomAllotment';
import RoomDetail from './components/RoomDetail';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/roomAllotment' element={<RoomAllotment/>} />
          <Route path='/roomDetail/:roomId' element={<RoomDetail/>} />
          </Routes>
      </Router>
  );
}

export default App;
