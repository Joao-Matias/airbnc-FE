import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import style from './singleProperty.module.css';
import axios from 'axios';
import { CiUndo, CiHeart } from 'react-icons/ci';

const SingleProperty = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    axios.get(`https://nc-airbnb-jm.onrender.com/api/properties/${id}`).then(({ data }) => {
      setSelectedProperty(data.property);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) return <h1 className={style.loading}>LOADING PROPERTY {id}...</h1>;

  return (
    <section className={style.container}>
      <nav className={style.nav}>
        <Link className={style.link} to={'/'}>
          <button className={style.iconButton}>
            <CiUndo className={style.icon} />
          </button>
        </Link>
        <button className={style.iconButton}>
          <CiHeart className={style.heartIcon} />
        </button>
      </nav>
      <div className={style.propertyContainer}>
        <ul className={style.imgCaroussel}>
          {selectedProperty.images.map((image, i) => {
            return (
              <li key={i} className={style.imageContainer}>
                <img src={image} className={style.image} />
              </li>
            );
          })}
        </ul>
        <h1>Amenities</h1>
        <h1>Reviews</h1>
        <h1>Calender</h1>
        <h1>Host</h1>
        <h1>Other host properties</h1>
      </div>
      <footer className={style.footerContainer}>FOOTER</footer>
    </section>
  );
};

export default SingleProperty;
