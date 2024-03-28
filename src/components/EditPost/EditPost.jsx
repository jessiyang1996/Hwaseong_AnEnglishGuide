import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditPost() {
  const { postId } = useParams();

  // useEffect(() => {
  //   // console.log('postId: ', postId);
  //   // on initial load
  //   axios
  //     .get(`/edit-post/${postId}`)
  //     .then((response) => {})
  //     .catch((error) => {
  //       console.log('Error in fetching post: ', error);
  //     });
  // }, [postId]);

  return (
    <div>
      <p>this is a test</p>
    </div>
  );
}

export default EditPost;
