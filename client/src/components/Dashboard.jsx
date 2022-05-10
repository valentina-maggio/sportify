// import { useLocation } from 'react-router-dom';
import VideoFiles from './VideoFiles';
import './Dashboard.css';

function MoodPage() {
  const itemValue = sessionStorage.getItem("item_key");

  console.log(itemValue);

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
