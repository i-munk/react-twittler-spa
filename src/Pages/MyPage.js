import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './MyPage.css';
// ! 위 코드는 수정하지 않습니다.

// ✅ TODO 해결: Footer 컴포넌트 import 추가
import Footer from '../Footer';

const MyPage = () => {
  // ✅ TODO 해결: filter 메소드를 이용하여 username이 Alice인 요소만 필터링
  const filteredTweets = dummyTweets.filter(tweet => tweet.username === "Alice");

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0]?.picture} alt="profile" />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0]?.username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {/* ✅ TODO 해결: Alice가 작성한 트윗만 렌더링 */}
        {filteredTweets.map(tweet => (
          <li className="tweet" id={tweet.id} key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture} alt="profile" />
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className="tweet__username">{tweet.username}</span>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* ✅ TODO 해결: Footer 컴포넌트 추가 */}
      <Footer />
    </section>
  );
};

export default MyPage;