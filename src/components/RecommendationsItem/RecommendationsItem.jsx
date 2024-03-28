// this component will be for the nearby recommendations list on the admin dashboard
import './RecommendationsItem.css';

import { useHistory } from 'react-router-dom';

function RecommendationsItem({ recommendation }) {
  const history = useHistory();

  function handleEditButton() {
    // console.log('edit post button was pressed');
    // console.log(
    //   'recommendation ID rom the handleEditButton: ',
    //   recommendation.id
    // ); // confirmed that the id was being passed correctly
    history.push(`/edit-post/${recommendation.id}`);
  }

  //TODO: CREATE HANDLE DELETE
  function handleDeleteButton() {
    console.log('in handleDeleteButton()');
    axios
      .delete(`/api/recommendations/${recommendation.id}`)
      .then(() => {
        // get data from server (refresh the list)
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
              <button type="button" onClick={handleEditButton}>
                Edit
              </button>
              <button type="button" onClick={handleDeleteButton}>
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
