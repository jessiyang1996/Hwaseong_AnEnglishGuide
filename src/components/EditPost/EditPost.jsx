import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function EditPost() {
  const { postId } = useParams();
  const recommendationsList = useSelector((store) => store.recommendationsList);

  useEffect(() => {
    console.log('recommendationsList data: ', recommendationsList);
    console.log('postID: ', postId);
  }, [postId]);

  return (
    <div>
      <p>this is a test</p>
      <h1>{recommendationsList[postId].location_name}</h1>
    </div>
  );
}

export default EditPost;
