import './AddNewPost.css';

import react from 'react';
import { useHistory } from 'react-router-dom';

function AddNewPost() {
  const history = useHistory();

  function handleBackToDashboard(event) {
    event.preventDefault();
    console.log('in handleBackToDashboard()');
    history.push('/admin-dashboard');
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevents the page from refreshing

    console.log('submit button was pressed');
  };
  return (
    <div className="newPostDiv">
      <h1 className="newPostHeader">Add New Post</h1>
      <div className="topNavigatorButtons">
        <button type="button" onClick={handleBackToDashboard}>
          Go Back to Dashboard
        </button>
        <button type="button" onClick={handleSubmit}>
          Publish
        </button>
      </div>
      <div className="newPostFormDiv">
        <form className="newPostForm">
          <div className="addPostTitleDiv">
            <label htmlFor="title">Title: </label>
            <input id="title" name="title" required></input>
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

export default AddNewPost;
