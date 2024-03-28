import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './EditPost.css';

function EditPost() {
  const { postId } = useParams();
  const recommendationsList = useSelector((store) => store.recommendationsList);

  // // creating variables for the input fields.
  // const [locationName, setLocationName] = useState(
  //   `${recommendation.location_Name}`
  // );

  function handleBackToDashboard(event) {
    event.preventDefault();
    // console.log('in handleBackToDashboard()');
    history.push('/admin-dashboard');
  }

  useEffect(() => {
    console.log('recommendationsList data: ', recommendationsList);
    console.log(typeof postId);
  }, [postId]);

  //.find is an array method used to find the first element in an array that satisfies the provided testing function
  // the id is turned into a string then goes through them until it finds the item id that we want
  // recommendation holds the result of the .find
  const recommendation = recommendationsList.find(
    (item) => item.id.toString() === postId
  );

  console.log('recommendation', recommendation);

  return (
    <div>
      <img
        className="editPostHeaderImage"
        src={recommendation.header_image}
      ></img>
      <h1 className="newPostHeader">Edit: {recommendation.location_name}</h1>
      <div className="topNavigatorButtons">
        <button type="button" onClick={handleBackToDashboard}>
          Go Back to Dashboard
        </button>
        <button type="button">Publish</button>
      </div>
      <div className="newPostFormDiv">
        <form className="newPostForm">
          <div className="addPostTitleDiv">
            <label htmlFor="title">Title: </label>
            <input
              id="title"
              name="title"
              value={recommendation.location_name}
              onChange={(event) => setLocationName(event.target.value)}
              required
            ></input>
          </div>
          {/* TODO: INTEGRATE AN API TO SO THE UPLOADING IMAGE */}
          <div className="newPostAddPhotoDiv">
            <button>Upload Image</button>
          </div>
          <div className="newPostCategoryDiv">
            <label htmlFor="category">Category: </label>
            <select id="category" name="category" required>
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Cafe</option>
              <option value="shopping">Shopping</option>
              <option value="Explore">Explore</option>
            </select>
          </div>
          <div className="newPostAddressDiv">
            <label htmlFor="koreanAddress">Korean Address: </label>
            <textarea
              id="koreanAddress"
              name="koreanAddress"
              required
            ></textarea>
            <label htmlFor="address">Address: </label>
            <textarea id="address" name="address" required></textarea>
          </div>
          <label htmlFor="content"></label>
          <textarea
            id="content"
            name="content"
            rows="8"
            cols="205"
            required
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
