import React from 'react';
import './App.css';
// ✅ TODO 해결: react-router-dom을 설치 후, import 구문을 이용하여 BrowserRouter, Routes, Route 컴포넌트를 불러옴.
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
// ✅ TODO 해결: import문을 이용하여 MyPage, About 컴포넌트를 불러옴.
import MyPage from './Pages/MyPage';
import About from './Pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            {/* ✅ TODO 해결: Routes로 감싸고, Route를 개별적으로 작성하여 오류 해결 */}
            <Routes>
              <Route path="/" element={<Tweets />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;