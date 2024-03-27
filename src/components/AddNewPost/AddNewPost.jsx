import './AddNewPost.css';

import react from 'react';

const AddNewPost = function () {
  return (
    <div className="newPostDiv">
      <h1 className="newPostHeader">Add New Post</h1>
      <div className="topNavigatorButtons">
        <button type="button">Go Back to Dashboard</button>
        <button type="button">Publish</button>
      </div>
      <div className="newPostFormDiv">
        <form className="newPostForm">
          <div className="addPostTitleDiv">
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" required></input>
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
          <label htmlFor="koreanAddress">Korean Address: </label>
          <input
            type="text"
            id="koreanAddress"
            name="koreanAddress"
            required
          ></input>
          <label htmlFor="address">Address: </label>
          <input type="text" id="address" name="address" required></input>

          <label htmlFor="content"></label>
          <input type="text" id="content" name="content" required></input>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
