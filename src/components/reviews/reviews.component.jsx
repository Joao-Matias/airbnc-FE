import { useEffect, useState } from 'react';
import style from './reviews.module.css';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsLength, setReviewsLength] = useState(0);
  const [reviewRating, setReviewRating] = useState(0);

  useEffect(() => {
    axios.get(`https://nc-airbnb-jm.onrender.com/api/properties/${id}/reviews`).then(({ data }) => {
      setReviews(data.reviews);
      setReviewsLength(data.reviews.length);
      setReviewRating(data.average_rating);
    });
  }, [id]);

  console.log(reviews);

  return (
    <div className={style.propertyDetails}>
      <h2 className={style.propertySubTitle}>Reviews</h2>
      <p className={style.reviewNumber}>{`(${reviewsLength})`}</p>
      <div className={style.ratingCont}>
        <FaStar className={style.ratingStar} />
        <h3 className={style.rating}>{reviewRating}</h3>
      </div>
      <div>
        <ul>
          {reviews.map((review) => {
            console.log(review);
          })}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
