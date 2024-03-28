// this component will be for the nearby recommendations list on the admin dashboard
import './RecommendationsItem.css';

import { useHistory } from 'react-router-dom';

function RecommendationsItem({ recommendation }) {
  const history = useHistory();

  function handleEditButton() {
    // console.log('edit post button was pressed');
    history.push(`/edit-page/${recommendation.id}`);
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
              <button type="button">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RecommendationsItem;
