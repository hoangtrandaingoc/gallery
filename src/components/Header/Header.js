import React from 'react';
import '../Header/Header.scss'
import SearchHeader from '../SearchHeader/SearchHeader';
import Typed from '../Typed/Typed';
import { Container, Row, Col } from 'reactstrap';

export default function Header(){
    return (
        <Container-fluid> 
            <div className="header">
                <div className="content">
                    <h2>Photo</h2>
                    <SearchHeader/>
                    <Typed/> 
                </div>
            </div>
        </Container-fluid>
    );
}