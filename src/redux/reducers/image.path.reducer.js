//reducer used to store image path URL

const imagePathReducer = (state = '', action) => {
  // set recommendationsList with data from server
  if (action.type === 'SET_IMAGE_PATH') {
    return action.payload;
  }
  return state;
};

export default imagePathReducer;
