import React from 'react';
import '../Header/Header.scss'
import SearchHeader from '../SearchHeader/SearchHeader';
import Typed from '../Typed/Typed';

export default function Header(){
    return (
        <div className="header">
            <div className="content">
                <h2>Photo</h2>
                <SearchHeader/>
                <Typed/>
            </div>
        </div>
    );
}