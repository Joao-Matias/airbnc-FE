import style from './home.module.css';
import { Link } from 'react-router';
import { CiSearch, CiRollingSuitcase, CiRoute, CiHome } from 'react-icons/ci';

import axios from 'axios';
import { useEffect, useState } from 'react';
import AllProperties from '../allProperties';
import FilterModal from '../filterModal';

const Home = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    axios.get(`https://nc-airbnb-jm.onrender.com/api/users/2`).then(({ data }) => {
      setActiveUser(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p className={style.loading}>loading...</p>;

  return (
    <div className={style.homeContainer}>
      <nav className={style.homeNav}>
        <ul className={style.navList}>
          <li>
            <img className={style.userIcon} src={activeUser.user.avatar} />
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
      <AllProperties />
      <section className={style.filterContainer}>
        <h1 className={style.logo}>AirBnB</h1>
        <button
          onClick={() => {
            setModalActive(true);
          }}
          className={style.filterButton}
        >
          <CiSearch className={style.searchIcon} />
          Search
        </button>
      </section>
      {modalActive && <FilterModal />}
    </div>
  );
};

export default Home;
