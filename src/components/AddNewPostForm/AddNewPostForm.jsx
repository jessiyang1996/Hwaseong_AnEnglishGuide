import { useState, useEffect } from 'react';
import axios from 'axios';

import './AddNewPostForm.css';

function AddNewPostForm() {
  // let [imageList, setImageList] = useState([]);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [koreanAddress, setKoreanAddress] = useState('');
  const [address, setAddress] = useState('');

  const onFileChange = async (event) => {
    //access the selected file
    const fileToUpload = event.target.files[0];
    // Limit user to specific file types
    const acceptedImageTypes = [
      'image/gif',
      'image/jpeg',
      'image/jpg',
      'image/png',
    ];

    // Check if the file is one of the allowed types:
    if (acceptedImageTypes.includes(fileToUpload.type)) {
      const formData = new FormData();
      formData.append('file', fileToUpload);
      console.log('process.env: ', process.env.REACT_APP_CLOUD_NAME);
      formData.append('upload_preset', process.env.REACT_APP_PRESET);
      let postUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
      axios
        .post(postUrl, formData)
        .then((response) => {
          console.log('Success!', response);
          setImage(response.data.url);
        })
        .catch((error) => {
          console.log('error', error);
          alert('Something went wrong');
        });
    } else {
      alert('Please select an image');
    }
  };

  return (
    <>
      <form className="newPostForm">
        {/* Div for title and description of location */}
        <div className="titleAndDescription">
          <div className="addPostTitleDiv">
            <label htmlFor="title">Title: </label>
            <textarea
              id="title"
              name="title"
              rows="1"
              cols="73"
              required
              placeholder="Location Name"
              onChange={(event) => setTitle(event.target.value)}
            ></textarea>
          </div>
          <label htmlFor="content"></label>
          <textarea
            id="content"
            name="content"
            rows="15"
            cols="73"
            placeholder="Location Description"
            required
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        {/* Div for post details */}
        <div className="postDetails">
          <div className="newPostAddPhotoDiv">
            <p>Please select an image:</p>
            <input
              type="file"
              accept="image/*"
              onChange={onFileChange}
              className="headerImageInput"
            ></input>
          </div>
          <div className="newPostCategoryDiv">
            <label htmlFor="category">Category: </label>
            <select
              id="category"
              name="category"
              required
              onChange={(event) => setCategory(event.target.value)}
            >
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
              onChange={(event) => setKoreanAddress(event.target.value)}
            ></textarea>
            <label htmlFor="address">English Address: </label>
            <textarea
              id="address"
              name="address"
              required
              onChange={(event) => setAddress(event.target.value)}
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddNewPostForm;
