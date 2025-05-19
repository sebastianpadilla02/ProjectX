import TweetList from './tweetlist/index';
import './index.css';
import { useState, useEffect} from 'react';

const MainContent = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(localStorage.getItem('name') || '');
  }, []);

  return (
    <main className="main-content">
      {/* Header simple */}
      <header className="main-header">
        <h2 id="hello-message">For you {name}</h2>
      </header>

      <TweetList />

    </main>
  );
};

export default MainContent;