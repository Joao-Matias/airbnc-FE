import { useEffect, useState } from 'react';
import style from './allProperties.module.css';
import axios from 'axios';

const AllProperties = () => {
  const [activeProperties, setActiveProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://nc-airbnb-jm.onrender.com/api/properties`).then(({ data }) => {
      setActiveProperties(data);
      setIsLoading(false);
    });
  }, []);

  console.log(activeProperties);

  if (isLoading) return <p className={style.loading}>Loading...</p>;

  return (
    <ul className={style.propertiesList}>
      {activeProperties.properties.map((property) => {
        return (
          <li key={property.id} className={style.propertyCard}>
            <img className={style.propertyImg} src={property.image} />
            <h3 className={style.propertyTitle}>
              <strong>{property.property_name}</strong>
            </h3>
            <div className={style.propertyCardDiv}>
              <p className={style.l}>{property.location}</p>
              <p className={style.l}>£{property.price_per_night}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AllProperties;
