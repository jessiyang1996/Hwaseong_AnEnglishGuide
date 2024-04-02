import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import './EditPost.css';

function EditPost() {
  const { postId } = useParams();
  const recommendationsList = useSelector((store) => store.recommendationsList);
  const history = useHistory();

  function handleBackToDashboard(event) {
    event.preventDefault();
    // console.log('in handleBackToDashboard()');
    history.push('/admin-dashboard');
  }

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

  // TODO: Send updated post to server then send an alert letting the client know that it was successful
  function sendUpdatedPostToServer(event) {
    console.log('in sendUpdatedPostToServer()');
    event.preventDefault();

    let location_title = document.querySelector('#title').value;
    let location_koreanAddress = document.querySelector('#koreanAddress').value;
    let location_address = document.querySelector('#address').value;
    let location_category = document.querySelector('#category').value;
    let location_content = document.querySelector('#content').value;
    let location_headerImage =
      document.querySelector('.headerImageInput').value;

    // console.log('location_title', location_title);
    // console.log('location_koreanAddress', location_koreanAddress);
    // console.log('location_address', location_address);
    // console.log('location_category ', location_category);
    // console.log('location_content', location_content);

    axios
      .put(`/api/recommendations/${recommendation.id}`, {
        location_name: location_title,
        korean_address: location_koreanAddress,
        address: location_address,
        category: location_category,
        description: location_content,
        header_image: location_headerImage,
      })
      .then((response) => {
        console.log('POST was successful!');
        alert('Success! The post was edited.');
      })
      .catch((error) => {
        console.log('Error in POST route: ', error);
        alert('Post was unsuccessful! Please try again');
      });
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

  // creating variables for the input fields.
  const [locationName, setLocationName] = useState(
    recommendation.location_name
  );

  const [category, setCategory] = useState(recommendation.category);
  const [koreanAddress, setKoreanAddress] = useState(
    `${recommendation.korean_address}`
  );
  const [address, setAddress] = useState(recommendation.address);
  const [description, setDescription] = useState(recommendation.description);

  // Tests:
  // console.log('locationName: ', locationName);
  // console.log('locationCategory: ', category);

  return (
    <div>
      <img
        className="editPostHeaderImage"
        src={recommendation.header_image}
      ></img>
      {/* Div for top navigation buttons */}
      <div className="editPostTopNavigatorButtons">
        <Button
          variant="outlined"
          sx={{ marginTop: '30px', marginBottom: '10px' }}
          type="button"
          onClick={handleBackToDashboard}
        >
          Go Back to Dashboard
        </Button>
        <Button
          variant="outlined"
          sx={{ marginTop: '30px', marginBottom: '10px' }}
          type="button"
          onClick={sendUpdatedPostToServer}
        >
          Update Post
        </Button>
      </div>
      {/* Div for the recommendation content */}
      <div className="editPostEntireContentDiv">
        <Paper elevation={12}>
          <Card variant="outlined" sx={{ padding: '60px' }}>
            <h1 className="newPostHeader">
              Edit: {recommendation.location_name}
            </h1>
            <div className="newPostFormDiv">
              <form className="editPostForm">
                {/* Div for title and description */}
                <div className="editPostTitleAndDescription">
                  <div className="editPostTitleDiv">
                    <label htmlFor="title" className="editPostTitle">
                      Title:
                    </label>
                    <textarea
                      id="title"
                      name="title"
                      rows="1"
                      cols="111"
                      value={locationName}
                      onChange={(event) => setLocationName(event.target.value)}
                      required
                    ></textarea>
                  </div>
                  <label htmlFor="content"></label>
                  <textarea
                    id="content"
                    name="content"
                    rows="8"
                    cols="55"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                  ></textarea>
                </div>
                {/* Div for post details */}
                <div className="editPostDetails">
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
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      required
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
                      value={koreanAddress}
                      onChange={(event) => setKoreanAddress(event.target.value)}
                      required
                    ></textarea>
                    <label htmlFor="address">Address: </label>
                    <textarea
                      id="address"
                      name="address"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </Card>
        </Paper>
      </div>
    </div>
  );
}

export default EditPost;
