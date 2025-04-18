import TweetComposer from './tweetcomposer/index';
import TweetList from './tweetlist/index';
import './index.css';
import { useState, useEffect} from 'react';

const MainContent = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setUsername(localStorage.getItem('username') || '');
    setName(localStorage.getItem('name') || '');
  }, []);

  return (
    <main className="main-content">
      {/* Header simple */}
      <header className="main-header">
        <h2 id="hello-message">Hello {name}</h2>
      </header>

      <TweetComposer />
      <TweetList />

    </main>
  );
};

export default MainContent;