// Imports:
import axios from 'axios'; // This is how we will make our server calls
import { useSelector, useDispatch } from 'react-redux'; // This will allow us to access things in the store
import { useEffect } from 'react'; // this will allow us to load things on initial page load
import { useHistory } from 'react-router-dom';

//Material UI imports
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import './AdminDashboard.css';
import AdminDashboardRecommendationsItem from '../AdminDashboardRecommendationsItem/AdminDashboardRecommendationsItem';

function AdminDashboard() {
  const recommendationsList = useSelector((store) => store.recommendationsList);
  const dispatch = useDispatch();
  const history = useHistory();

  const adminDashAddButton = function () {
    // console.log('adminDashAddButton clicked');
    history.push('/new-post');
  };

  function adminDashGoButton() {
    // This button will go to the nearby recommendations page
    // console.log('adminDashGoButton clicked');
    history.push('/nearby-recommendations');
  }

  const fetchRecommendationsList = () => {
    axios
      .get('/api/recommendations')
      .then((response) => {
        //send data to redux
        dispatch({
          type: 'FETCH_RECOMMENDATIONS_LIST',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('error in GET nearby recommendations: ', error);
      });
  };

  //on initial load
  useEffect(() => {
    fetchRecommendationsList();
  }, []); // end of useEffect

  return (
    <div>
      <div className="headerBox"></div>
      <div className="adminDashboardDiv">
        <h1 className="adminDashboardHeader">Admin Dashboard</h1>
        <div className="adminDashContainer">
          <h2>Posts</h2>
          <div className="adminDashHeaderTitle">
            <Button
              variant="outlined"
              type="button"
              className="adminDashSeePostsButton"
              onClick={adminDashGoButton}
              sx={{ marginRight: '9px' }}
            >
              Go to Posts
            </Button>
            <Button
              variant="contained"
              type="button"
              className="adminDashAddButton"
              onClick={adminDashAddButton}
            >
              Add New Location
            </Button>
          </div>
        </div>
        {/* div for the post container */}
        <Paper elevation={10}>
          <Card variant="outlined" sx={{ padding: '10px' }}>
            <div className="postContainer"></div>
            <div className="adminDashListContainer">
              <ul>
                {/* .map will go here showing: title --> edit button -->delete button */}
                {recommendationsList.map((recommendation) => (
                  // recommendations item
                  <AdminDashboardRecommendationsItem
                    key={recommendationsList.id}
                    recommendation={recommendation}
                  ></AdminDashboardRecommendationsItem>
                ))}
              </ul>
            </div>
          </Card>
        </Paper>
      </div>
    </div>
  );
}

export default AdminDashboard;
