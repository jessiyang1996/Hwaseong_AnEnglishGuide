import { put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecommendationsList() {
  try {
    // code to try running
    // wait for ASYNC event
    const recommendationResponse = yield axios({
      method: 'GET',
      url: '/api/recommendations',
    });
    yield put({
      type: 'SET_RECOMMENDATIONS_LIST',
      payload: elementsResponse.data,
    });
  } catch (error) {
    console.log('ERROR: ', error);
    // yield put({
    //   type: 'ERROR_ELEMENTS',
    //   payload: "Something went wrong, please try again later."
    // })
  }
}

export default fetchRecommendationsList;
