// this component will be for the nearby recommendations list on the admin dashboard
import './RecommendationsItem.css';

function RecommendationsItem({ recommendation }) {
  return (
    <div className="recommendationsItemDiv">
      <ul>
        <li>
          <div className="recommendationsItemContainer">
            {recommendation.location_name}
            <div className="editDeleteButtons">
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RecommendationsItem;
