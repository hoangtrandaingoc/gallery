import React, { useState, useEffect, useContext } from 'react';

import '../Gallery/Gallery.scss';
import axios from 'axios';
import {SearchContext} from '../Contexts/SearchContext';
import Header from '../Header/Header';
import Masonry from 'react-masonry-css';

import ModalImage from "react-modal-image";

export default function Gallery(){
    const [pictures, setPictures] = useState([]);
    const {result, photo} = useContext(SearchContext);
    useEffect(() => {
        axios.get("https://api.unsplash.com/photos?client_id=pb-ttGQo0vNFGv8XksU4fLGtamKA_oqDl8zbUTXnur0")
            .then(response => setPictures(response.data));
    },[]);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 1
    };

    if (result.length){
        return(
            <div className="main">
                <h1>{photo}</h1>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        result.map(picture => (
                            <div className="img" key={picture.id}>
                                <ModalImage
                                    small={picture.urls.small}
                                    large={picture.urls.regular}
                                    alt={picture.id}
                                />
                            </div>
                        ))
                    }
                </Masonry>
            </div>
        );
    }else{
        return(
            <div className="main">
                <Header/>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        pictures.map(picture => (
                            <div className="img" key={picture.id}>
                                <ModalImage
                                    small={picture.urls.small}
                                    large={picture.urls.regular}
                                    alt={picture.id}
                                />
                                {/* <img src={picture.urls.small}/> */}
                            </div>
                        ))
                    }
                </Masonry>
            </div>
        );
    }
}