import './AddNewPostForm.css';

function AddNewPostForm() {
  return (
    <>
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
          <textarea id="koreanAddress" name="koreanAddress" required></textarea>
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
    </>
  );
}

export default AddNewPostForm;
