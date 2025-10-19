import searchIcon from '../../assets/img/search.png';
import clearIcon from '../../assets/img/clear.png';

import styles from './search.module.css';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} alt="Search" />

      <input
        type="text"
        value={searchValue}
        placeholder="Поиск пиццы..."
        className={styles.input}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {searchValue && (
        <img
          className={styles.clearIcon}
          onClick={() => setSearchValue('')}
          src={clearIcon}
          alt="Clear"
        />
      )}
    </div>
  );
};

export default Search;
