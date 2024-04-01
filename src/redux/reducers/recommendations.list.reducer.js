//reducer used to store Nearby Recommendations list returned from the server

const recommendationsList = (state = [], action) => {
  // set recommendationsList with data from server
  if (action.type === 'SET_RECOMMENDATIONS_LIST') {
    return action.payload;
  }
  return state;

  // switch (action.type) {
  //   case 'SET_RECOMMENDATIONS_LIST':
  //     return action.payload;
  //   default:
  //     return state;
  // }
};

export default recommendationsList;
