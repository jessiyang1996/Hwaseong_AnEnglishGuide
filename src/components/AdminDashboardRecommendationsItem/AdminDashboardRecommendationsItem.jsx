// this component will be for the nearby recommendations list on the admin dashboard
import './AdminDashboardRecommendationsItem.css';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function RecommendationsItem({ recommendation }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleEditButton() {
    // console.log('edit post button was pressed');
    // console.log(
    //   'recommendation ID rom the handleEditButton: ',
    //   recommendation.id
    // ); // confirmed that the id was being passed correctly
    history.push(`/edit-post/${recommendation.id}`);
    //TODO send the item we clicked to the store
  } // end of handleEditButton()

  //TODO: CREATE HANDLE DELETE
  function handleDeleteButton() {
    console.log('in handleDeleteButton()');
    axios
      .delete(`/api/recommendations/${recommendation.id}`)
      .then((response) => {
        // TODO: get data from server (refresh the list)
        axios
          .get('/api/recommendations')
          .then((response) => {
            dispatch({
              type: 'SET_RECOMMENDATIONS_LIST',
              payload: response.data,
            });
          })
          .catch((error) => {
            console.log('error in refetching data after deleting post', error);
          });
      })
      .catch((error) => {
        console.log('Error in DELETE route: ', error);
        alert('Something went wrong! Look at the console');
      });
  }

  return (
    <div className="recommendationsItemDiv">
      <ul>
        <li>
          <div className="recommendationsItemContainer">
            {recommendation.location_name}
            <div className="editDeleteButtons">
              <button
                type="button"
                onClick={handleEditButton}
                className="adminEditButton"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={handleDeleteButton}
                className="adminDeleteButton"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RecommendationsItem;
