import { useEffect, useState } from 'react';
import style from './amenities.module.css';
import axios from 'axios';

import { GiHotMeal, GiBarbecue, GiFireplace, GiFlowers, GiWindow } from 'react-icons/gi';
import { TbBeach, TbAirConditioning, TbIroning } from 'react-icons/tb';
import { MdOutlineCoffeeMaker, MdDesk, MdOutlineYard, MdOutlineKitchen } from 'react-icons/md';
import { BiSolidDryer } from 'react-icons/bi';
import { FaElevator } from 'react-icons/fa6';
import { LiaHotTubSolid } from 'react-icons/lia';
import { PiSwimmingPoolLight, PiCookingPot } from 'react-icons/pi';
import { IoLibraryOutline } from 'react-icons/io5';
import { SiBlockbench } from 'react-icons/si';
import { LuCircleParking, LuWashingMachine } from 'react-icons/lu';
import { FaSkiing, FaTv, FaWifi } from 'react-icons/fa';

const Amenities = ({ id }) => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    axios.get(`https://nc-airbnb-jm.onrender.com/api/properties/${id}/amenities`).then(({ data }) => {
      setAmenities(data.amenities);
    });
  }, [id]);

  const checkAmenity = (amenity) => {
    switch (amenity) {
      case 'Fireplace':
        return (
          <li className={style.singleAmenity}>
            <GiFireplace className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'WiFi':
        return (
          <li className={style.singleAmenity}>
            <FaWifi className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );

      case 'Kitchen':
        return (
          <li className={style.singleAmenity}>
            <PiCookingPot className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );

      case 'Ski-in/Ski-out':
        return (
          <li className={style.singleAmenity}>
            <FaSkiing className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Air conditioning':
        return (
          <li className={style.singleAmenity}>
            <TbAirConditioning className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Banquet hall':
        return (
          <li className={style.singleAmenity}>
            <GiHotMeal className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'BBQ':
        return (
          <li className={style.singleAmenity}>
            <GiBarbecue className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Beach access':
        return (
          <li className={style.singleAmenity}>
            <TbBeach className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Coffee maker':
        return (
          <li className={style.singleAmenity}>
            <MdOutlineCoffeeMaker className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Desk':
        return (
          <li className={style.singleAmenity}>
            <MdDesk className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Dryer':
        return (
          <li className={style.singleAmenity}>
            <BiSolidDryer className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Elevator':
        return (
          <li className={style.singleAmenity}>
            <FaElevator className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Garden':
        return (
          <li className={style.singleAmenity}>
            <MdOutlineYard className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Gardens':
        return (
          <li className={style.singleAmenity}>
            <GiFlowers className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Hot tub':
        return (
          <li className={style.singleAmenity}>
            <LiaHotTubSolid className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Infinity pool':
        return (
          <li className={style.singleAmenity}>
            <PiSwimmingPoolLight className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Iron':
        return (
          <li className={style.singleAmenity}>
            <TbIroning className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Lake view':
        return (
          <li className={style.singleAmenity}>
            <GiWindow className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Mini fridge':
        return (
          <li className={style.singleAmenity}>
            <MdOutlineKitchen className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Outdoor seating':
        return (
          <li className={style.singleAmenity}>
            <SiBlockbench className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Parking':
        return (
          <li className={style.singleAmenity}>
            <LuCircleParking className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Library':
        return (
          <li className={style.singleAmenity}>
            <IoLibraryOutline className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'TV':
        return (
          <li className={style.singleAmenity}>
            <FaTv className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Washing Machine':
        return (
          <li className={style.singleAmenity}>
            <LuWashingMachine className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
      case 'Work desk':
        return (
          <li className={style.singleAmenity}>
            <MdDesk className={style.amenityIcon} />
            <h3 className={style.amenityText}>{amenity}</h3>
          </li>
        );
    }
  };

  return (
    <div className={style.propertyDetails}>
      <h2 className={style.propertySubTitle}>Amenities</h2>
      <ul className={style.amenityContainer}>{amenities.map(checkAmenity)}</ul>
    </div>
  );
};

export default Amenities;
