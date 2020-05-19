import React, { useState, useEffect, useContext } from 'react';

import '../Gallery/Gallery.scss';
import axios from 'axios';
import {SearchContext} from '../Contexts/SearchContext';
import Header from '../Header/Header';
import Masonry from 'react-masonry-css';

import ModalImage from "react-modal-image";
// import SearchEmpty from '../SearchEmpty/SearchEmpty';

export default function Gallery(){
    let [pictures, setPictures] = useState([]);
    let [numberPage, setNumberPage] = useState(1)

    const {result, photo, handleShowMoreSearch} = useContext(SearchContext);
    
    useEffect(() => {
        const url = "https://api.unsplash.com/photos?client_id=pb-ttGQo0vNFGv8XksU4fLGtamKA_oqDl8zbUTXnur0";
        axios.get(url)
            .then(response => {
                setPictures(response.data)
            });
    },[]);


      async function fetchAPI() {
        let newPage = numberPage +1;
        let url = "https://api.unsplash.com/photos?client_id=pb-ttGQo0vNFGv8XksU4fLGtamKA_oqDl8zbUTXnur0&page=" + newPage;
        let res = await axios.get(url);
        pictures.push(...res.data);
        console.log(pictures);
        setPictures(pictures);
        setNumberPage(newPage);
    }

    function handleShowMore(){ 
        fetchAPI()
    }


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
                <div className="show-more">
                    <a onClick={handleShowMoreSearch}>Show More</a>
                </div>
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
                            </div>
                        ))
                    }
                </Masonry>
                <div className="show-more">
                    <a onClick={handleShowMore}>Show More</a>
                </div>
            </div>
        );
    }
}