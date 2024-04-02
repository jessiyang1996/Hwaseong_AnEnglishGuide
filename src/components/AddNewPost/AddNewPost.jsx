import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

import './AddNewPost.css';
import AddNewPostForm from '../AddNewPostForm/AddNewPostForm';

function AddNewPost() {
  const history = useHistory();

  function handleBackToDashboard(event) {
    event.preventDefault();
    // console.log('in handleBackToDashboard()');
    history.push('/admin-dashboard');
  }

  //FUNCTION TO SEND NEW POST TO SERVER
  function sendNewPostToServer(event) {
    console.log('in sendNewPostToServer()');
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
      .post('/api/recommendations', {
        location_name: location_title,
        korean_address: location_koreanAddress,
        address: location_address,
        category: location_category,
        description: location_content,
        header_image: location_headerImage,
      })
      .then((response) => {
        console.log('POST was successful!');
        alert('Success! The new post was added.');
      })
      .catch((error) => {
        console.log('Error in POST route: ', error);
        alert('Post was unsuccessful! Please try again');
      });
  }

  return (
    <>
      <div className="newPostHeaderDiv"></div>
      <div className="newPostDiv">
        <div className="topNavigatorButtons">
          <Button
            variant="outlined"
            type="button"
            onClick={handleBackToDashboard}
            sx={{ marginTop: '30px' }}
          >
            Go Back to Dashboard
          </Button>
          <Button
            variant="outlined"
            type="button"
            onClick={sendNewPostToServer}
            sx={{ marginTop: '30px' }}
          >
            Publish
          </Button>
        </div>
        <Paper elevation={12}>
          <Card variant="outlined" sx={{ padding: '60px' }}>
            <div className="newPostFormDiv">
              <h1 className="newPostHeader">Add New Location</h1>
              <AddNewPostForm />
            </div>
          </Card>
        </Paper>
      </div>
    </>
  );
}

export default AddNewPost;
