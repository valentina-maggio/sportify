import VideoFiles from './VideoFiles';
import './MoodPage.css';

function MoodPage() {
  return (
    <div className='mood-container'>
      <h2>Not sure what workout to do?</h2>
      <h2>We have some ideas here for you!</h2>
      <div className='mood-links'>
        <VideoFiles />
      </div>
    </div>
  );
}

export default MoodPage;
