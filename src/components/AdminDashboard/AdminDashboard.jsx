import './AdminDashboard.css';
import RecommendationsItem from '../RecommendationsItem/RecommendationsItem';

import axios from 'axios'; // This is how we will make our server calls
import { useSelector, useDispatch } from 'react-redux'; // This will allow us to access things in the store
import { useEffect } from 'react'; // this will allow us to load things on initial page load
import { useHistory } from 'react-router-dom';

function AdminDashboard() {
  const recommendationsList = useSelector((store) => store.recommendationsList);
  const dispatch = useDispatch();
  const history = useHistory();

  const adminDashAddButton = function () {
    // TODO: Redirects to form for making a new post
    // console.log('adminDashAddButton clicked');
    history.push('/new-post');
  };

  function adminDashGoButton() {
    // This button will go to the nearby recommendations page
    // console.log('adminDashGoButton clicked');
    history.push('/nearby-recommendations');
  }

  //on initial load
  useEffect(() => {
    axios
      .get('/api/recommendations')
      .then((response) => {
        //send data to redux
        dispatch({
          type: 'SET_RECOMMENDATIONS_LIST',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('error in GET nearby recommendations: ', error);
      });
  }, []); // end of useEffect

  return (
    <div className="adminDashboardDiv">
      <h1 className="adminDashboardHeader">Admin Dashboard</h1>
      <div className="adminDashContainer">
        <h2>Posts</h2>
        <div className="adminDashHeaderTitle">
          <button
            type="button"
            className="adminDashAddButton"
            onClick={adminDashAddButton}
          >
            Add New Location
          </button>
          <button
            type="button"
            className="adminDashSeePostsButton"
            onClick={adminDashGoButton}
          >
            Go to Posts
          </button>
        </div>
      </div>
      {/* div for the post container */}
      <div className="postContainer"></div>
      <div className="adminDashListContainer">
        <ul>
          {/* .map will go here showing: title --> edit button -->delete button */}
          {recommendationsList.map((recommendation) => (
            // recommendations item
            <RecommendationsItem
              key={recommendationsList.id}
              recommendation={recommendation}
            ></RecommendationsItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
