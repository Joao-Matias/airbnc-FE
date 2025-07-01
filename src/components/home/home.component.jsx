import style from './home.module.css';
import { Link } from 'react-router-dom';
import { CiUser, CiSearch, CiRollingSuitcase, CiRoute, CiHome } from 'react-icons/ci';

import axios from 'axios';
import { useEffect, useState } from 'react';

const apiKey = process.env.API_KEY;

const Home = () => {
  const [activeUser, setActiveUser] = useState('1');

  // useEffect(() => {
  //   axios
  //     .get('https://irmeohnkzcyspiqkwyjb.supabase.co/rest/v1/users/1', {
  //       headers: {
  //         apikey: apiKey,
  //       },
  //     })
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [activeUser]);

  return (
    <div className={style.homeContainer}>
      <nav className={style.homeNav}>
        <ul className={style.navList}>
          <li>
            <Link>
              <CiUser className={style.navIcon} />
            </Link>
          </li>
          <li>
            <Link>
              <CiSearch className={style.navIcon} />
            </Link>
          </li>
          <li>
            <Link>
              <CiRollingSuitcase className={style.navIcon} />
            </Link>
          </li>
          <li>
            <Link>
              <CiRoute className={style.navIcon} />
            </Link>
          </li>
          <li>
            <Link>
              <CiHome className={style.navIcon} />
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={style.logo}>AirBnB</h1>
    </div>
  );
};

export default Home;
