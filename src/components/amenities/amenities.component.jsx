import { useEffect, useState } from 'react';
import style from './amenities.module.css';
import axios from 'axios';

import { getIcons } from '../../helpers/getIcons';

const Amenities = ({ id }) => {
  const [amenities, setAmenities] = useState(null);

  useEffect(() => {
    axios.get(`https://nc-airbnb-jm.onrender.com/api/properties/${id}/amenities`).then(({ data }) => {
      setAmenities(data.amenities);
    });
  }, [id]);

  getIcons(amenities);

  return (
    <div className={style.propertyDetails}>
      <h2 className={style.propertySubTitle}>Amenities</h2>
    </div>
  );
};

export default Amenities;
