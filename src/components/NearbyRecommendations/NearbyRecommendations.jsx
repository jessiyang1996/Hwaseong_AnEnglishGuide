// this component will be for the nearby recommendations page
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function NearbyRecommendations() {
  const recommendationsList = useSelector((store) => store.recommendationsList);
  const dispatch = useDispatch();

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

    console.log('recommendationsList: ', recommendationsList);
  }, []); // end of useEffect

  return (
    <div>
      <p> blah blah</p>
    </div>
  );
}

export default NearbyRecommendations;
