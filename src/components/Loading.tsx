import ReactLoading from 'react-loading';
import '../css/Loading.css';

export default function Loading() {
  return (
    <div className="loading-container">
      <ReactLoading type="spinningBubbles" color="#d2d1d6" height={'10%'} width={'10%'} />
    </div>
  );
}
