import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main.css'

import ChatPage from './pages/ChatPage/ChatPage';
import HomePage from './pages/HomePage/HomePage';
import SantaPage from './pages/SantaPage/SantaPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/chatgpt' element={<ChatPage/>}/>
          <Route path='/santagpt' element={<SantaPage/>}/> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;
