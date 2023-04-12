
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './Pages/Profile';
import Following from './Pages/Following';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Profile />}/>
        <Route path='/following' exact element={<Following/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
