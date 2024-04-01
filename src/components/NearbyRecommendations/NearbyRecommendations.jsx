// this component will be for the nearby recommendations page
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
      {/* map through the array of objects to display the list */}
      {recommendationsList.map((recommendation) => (
        <div className="">
          <img
            src={recommendation.header_image}
            className="NearbyRecommendationsHeaderImage"
          ></img>
          <h3>{recommendation.location_name}</h3>
          <div className="NearbyRecommendationsAddressesDiv">
            <p>{recommendation.korean_address}</p>
            <p>{recommendation.address}</p>
            <p>{recommendation.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NearbyRecommendations;
