import { useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import { SearchContext } from '@src/App';

import searchIcon from '@assets/img/search.png';
import clearIcon from '@assets/img/clear.png';

import styles from './search.module.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((value) => setSearchValue(value), 400),
    [setSearchValue],
  );

  const onChangeInput = (value) => {
    setValue(value);
    updateSearchValue(value);
  };

  const onClickClear = () => {
    setValue('');
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <img className={styles.searchIcon} src={searchIcon} alt="Search" />

      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Поиск пиццы..."
        className={styles.input}
        onChange={(event) => onChangeInput(event.target.value)}
      />

      {searchValue && (
        <img className={styles.clearIcon} onClick={onClickClear} src={clearIcon} alt="Clear" />
      )}
    </div>
  );
};

export default Search;
