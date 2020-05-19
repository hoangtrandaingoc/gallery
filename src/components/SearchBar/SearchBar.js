import React, {useContext} from 'react';
// import classNames from 'classnames';

import SearchIcon from '../../../src/image/Search-icon.svg';

import '../SearchBar/SearchBar.scss';
import {SearchContext} from '../Contexts/SearchContext';

export default function SearchBar(){
    const {handleOnChange, handleOnkeyUp, handleOnClick} = useContext(SearchContext);

    return (
        <div className="search-bar">
            <img onClick={handleOnClick} src={SearchIcon} width={15}></img>
            <input
                type="search"
                name="photo"
                placeholder="Search free high-resolution photos"
                onChange={handleOnChange}
                onKeyUp={handleOnkeyUp}
            >
            </input>
            <div className="bgr-search"></div>
        </div>
    );  
}