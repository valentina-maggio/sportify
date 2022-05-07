import VideoFiles from './VideoFiles';
import './MoodPage.css';

function MoodPage() {
  return (
    <div className='mood-container'>
      <h2>How do you feel today?</h2>
      <div className='mood-links'>
        <VideoFiles />
      </div>
    </div>
  );
}

export default MoodPage;
