// this component will be for the nearby recommendations page
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material ui imports
import Card from '@mui/material/Card';

// documents created imports:
import './NearbyRecommendations.css';

function NearbyRecommendations() {
  const recommendationsList = useSelector((store) => store.recommendationsList);
  const dispatch = useDispatch();

  //on initial load
  useEffect(() => {
    getElements();
  }, []); // end of useEffect

  console.log(
    'recommendationList from NearbyRecommendations: ',
    recommendationsList
  );

  const getElements = () => {
    dispatch({ type: 'FETCH_RECOMMENDATIONS_LIST' });
  };

  return (
    <div>
      <div className="nearbyRecommendationsHeaderBoxContainer"></div>
      <h1 className="nearybyRecommendationsTitle">Nearby Recommendations</h1>
      {/* map through the array of objects to display the list */}
      {recommendationsList.map((recommendation) => (
        <>
          <Card variant="outlined">
            <div className="nearbyRecommendationsListContainer">
              <img
                src={recommendation.header_image}
                className="nearbyRecommendationsHeaderImage"
              ></img>
              <div className="nearyByRecommendationsDetailContainer">
                <h3>{recommendation.location_name}</h3>
                <div className="NearbyRecommendationsAddressesDiv">
                  Korean Address: <p>{recommendation.korean_address}</p>
                  English Address: <p>{recommendation.address}</p>
                  <p>{recommendation.description}</p>
                </div>
              </div>
            </div>
          </Card>
        </>
      ))}
    </div>
  );
}

export default NearbyRecommendations;
