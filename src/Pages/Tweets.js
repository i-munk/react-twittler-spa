import React from 'react';
import { dummyTweets } from '../static/dummyData';
import './Tweets.css';
// ! 위 코드는 수정하지 않습니다.

// ✅ TODO 해결: Footer 컴포넌트를 import하여 불러옴
import Footer from '../Footer';

const Tweets = () => {
  return (
    <div>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__input">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + dummyTweets.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="tweets">
        {dummyTweets.map((tweet) => {
          return (
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
          );
        })}
      </ul>

      {/* ✅ TODO 해결: Footer 컴포넌트를 추가하여 트윗 목록 아래에 배치 */}
      <Footer />
    </div>
  );
};

export default Tweets;