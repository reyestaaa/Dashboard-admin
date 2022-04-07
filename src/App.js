import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Admin/Dashboard"
import Schadule from "./Admin/Schadule/Index"
import Trainer from "./Admin/Trainer/Index"
import Content from "./Admin/Schadule/Content"
import SchaduleAdd from "./Admin/Schadule/IndexAdd"
import Login from "./Admin/Login";
import LoginParticipant from "./Participant/Login";
import Register from "./Participant/Regist";
import UserPage from "./Participant/Training";
import Detail from "./Participant/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/schadule" element={<Schadule />} />
        <Route path="/schadule/add" element={<SchaduleAdd />} />
        <Route path="/schadule/content" element={<Content />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/login/admin" element={<Login/>} />
        <Route path="/regist" element={<Register/>} />        
        <Route path="/login/participant" element={<LoginParticipant/>} />
        <Route path="/userpage" element={<UserPage/>} />
        <Route path="/detailpage" element={<Detail/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
