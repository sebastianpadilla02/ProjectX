import TweetComposer from './tweetcomposer/index';
import TweetList from './tweetlist/index';
import './index.css';

const MainContent = () => {
  return (
    <main className="main-content">
      {/* Header simple */}
      <header className="main-header">
        <h2>For you</h2>
      </header>

      <TweetComposer />
      <TweetList />

    </main>
  );
};

export default MainContent;