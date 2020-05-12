import React, { useState, useContext} from 'react';

import SearchIcon from '../../../src/image/Search-icon.svg';
import '../SearchHeader/SearchHeader.scss';
import {SearchContext} from '../Contexts/SearchContext';



export default function SearchHeader(){
    const {handleOnChange, handleOnkeyUp, handleOnClick} = useContext(SearchContext);

    return (
        <div className="search-header">
            <img onClick={handleOnClick} src={SearchIcon} width={20}></img>
            <input
                type="search"
                name="photo"
                placeholder="Search free photos"
                onChange={handleOnChange}
                onKeyUp={handleOnkeyUp}
            >
            </input>
        </div>
    );  
}