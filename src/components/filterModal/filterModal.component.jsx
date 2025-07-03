import style from './filterModal.module.css';
import { CiSearch } from 'react-icons/ci';

const FilterModal = () => {
  return (
    <section className={style.filterContainer}>
      <h1 className={style.logo}>AirBnB</h1>
      <button className={style.filterButton}>
        <CiSearch className={style.searchIcon} />
        Search
      </button>
    </section>
  );
};

export default FilterModal;
