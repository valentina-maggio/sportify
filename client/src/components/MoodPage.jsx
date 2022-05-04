import { Link } from 'react-router-dom';
import './MoodPage.css';

function MoodPage() {
  return (
    <div className='mood-container'>
      <h2>How do you feel today?</h2>
      <div className='mood-links'>
        <a href={Link}>
          <img src='/images/low-impact.jpg' alt='low-impact' />
        </a>
        <a href={Link}>
          <img src='/images/mid-impact.jpg' alt='mid-impact' />
        </a>
        <a href={Link}>
          <img src='/images/high-impact.jpg' alt='high-impact' />
        </a>
      </div>
    </div>
  );
}

export default MoodPage;
