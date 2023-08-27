import './App.css';
import Login from './components/account/Login.jsx';
import Home from "./components/account/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Complain from './components/Complain.jsx';
import ComplainForm from './components/ComplainForm.jsx';
import RoomAllotment from './components/RoomAllotment';
import RoomDetail from './components/RoomDetail';
import RoomAllotmentAdmin from './components/AdminRoomAllotment/RoomAllotmentAdmin';
import NoticeBoard from './components/Notice/NoticeBoard';
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/roomAllotment/:id' element={<RoomAllotment/>} />
          <Route path='/complain' element={<Complain/>} />
          <Route path='/complainForm' element={<ComplainForm/>} />
          <Route path='/roomAllotment' element={<RoomAllotment/>} />
          <Route path='/roomDetail/:roomId' element={<RoomDetail/>} />
          <Route path='/roomAllotmentAdmin' element={<RoomAllotmentAdmin/>} />
          <Route path='/noticeBoard' element={<NoticeBoard/>} />
          </Routes>
      </Router>
  );
}

export default App;
