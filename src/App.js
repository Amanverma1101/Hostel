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
import MessMenu from './components/Mess/MessMenu';
import MessMenuEdit from './components/Mess/MessMenuEdit';
import MessComitee from './components/Mess/MessComitee';
import MessComplain from './components/Mess/MessComplain';
import MessComplainForm from './components/Mess/MessComplainForm';
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
          <Route path='/messMenu' element={<MessMenu/>} />
          <Route path='/messMenuEdit' element={<MessMenuEdit/>} />
          <Route path='/messComitee' element={<MessComitee/>}/>
          <Route path='/messComplain' element={<MessComplain/>}/>
          <Route path='/messComplainForm' element={<MessComplainForm/>}/>
          </Routes>
      </Router>
  );
}

export default App;
