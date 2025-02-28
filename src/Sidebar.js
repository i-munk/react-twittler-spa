import React from 'react';
// ✅ TODO 해결: react-router-dom의 Link 컴포넌트 import
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <ul>
        {/* ✅ TODO 해결: Tweets 메뉴 아이콘과 Link 추가 */}
        <li>
          <Link to="/">
            <i className="far fa-comment-dots"></i>
          </Link>
        </li>

        {/* ✅ TODO 해결: About 메뉴 아이콘과 Link 추가 */}
        <li>
          <Link to="/about">
            <i className="far fa-question-circle"></i>
          </Link>
        </li>

        {/* ✅ TODO 해결: MyPage 메뉴 아이콘과 Link 추가 */}
        <li>
          <Link to="/mypage">
            <i className="far fa-user"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;