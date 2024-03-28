import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditPost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const history = useHistory();

  useEffect(() => {
    console.log('postId: ', postId);
    axios
      .get(`/edit-post/${postId}`)
      .then((response) => {
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
