import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function EditPost() {
  const { postId } = useParams();
  const recommendationsList = useSelector((store) => store.recommendationsList);

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

  return (
    <div>
      <p>this is a test</p>
      <h1>{recommendation.location_name}</h1>
    </div>
  );
}

export default EditPost;
