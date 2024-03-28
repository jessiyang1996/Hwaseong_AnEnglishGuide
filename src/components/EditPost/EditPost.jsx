import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditPost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`/api/recommendations/${postId}`)
      .then((response) => {
        console.log(postId);
        setPost(response.data);
      })
      .catch((error) => {
        console.log('Error in fetching post: ', error);
      });
  }, [postId]);

  return (
    <div>
      <p>this is a test</p>
    </div>
  );
}

export default EditPost;
