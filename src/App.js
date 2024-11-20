import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from './pages/mypage/MyPage';
import Profile from './pages/userprofile/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/userprofile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;