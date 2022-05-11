// import { useLocation } from 'react-router-dom';
import VideoFiles from './VideoFiles';

function MoodPage() {
  const itemValue = sessionStorage.getItem('item_key');

  console.log(itemValue);

  return (
    <div>
      <VideoFiles />
    </div>
  );
}

export default MoodPage;
