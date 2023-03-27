import React from 'react'
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss'
import { useDispatch } from 'react-redux';

const Search = () => {
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();

    const onClickClear = () => {
        dispatch(setSearchValue(''))
        setValue('')
        inputRef.current.focus();
    };

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 250),
        [],
    );
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>.</style></defs>
                <path className="cls-1" d="M22.41,22.41a1.974,1.974,0,0,1-2.82,0l-3.35-3.35a11.116,11.116,0,0,0,2.82-2.82l3.35,3.35A1.974,1.974,0,0,1,22.41,22.41Z" /><path className="cls-1" d="M10,1a9,9,0,1,0,9,9A9,9,0,0,0,10,1Zm0,5a4,4,0,0,0-4,4,1,1,0,0,1-2,0,6.006,6.006,0,0,1,6-6,1,1,0,0,1,0,2Z" />
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder='Поиск...' />
            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.clearIcon} height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m7.5 7.5 6 6" /><path d="m13.5 7.5-6 6" /></g>
                </svg>
            )}
        </div>
    )
}

export default Search
