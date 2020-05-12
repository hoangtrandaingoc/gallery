import React, {useState} from 'react';
import axios from 'axios';


//handle API search
export const SearchContext = React.createContext();
export function SearchProvider(props){
    const [photo, setPhoto] = useState("");
    const [clientId, setClientId] = useState("pb-ttGQo0vNFGv8XksU4fLGtamKA_oqDl8zbUTXnur0");
    const [result, setResult] = useState([]);

    function handleOnChange(event){
        setPhoto(event.target.value);
    }

    function handleOnkeyUp(event){
        if (event.keyCode === 13){
            const url = "https://api.unsplash.com/search/photos/?page=1&query=" 
            + photo 
            + "&client_id="
            +clientId;

            axios.get(url).then(response => {
                setResult(response.data.results);
            })
        }
    }
    function handleOnClick(event){
        const url = "https://api.unsplash.com/search/photos/?page=1&query=" 
            + photo 
            + "&client_id="
            +clientId;

            axios.get(url).then(response => {
                setResult(response.data.results);
            })
    }

 return (
    <SearchContext.Provider value={{result, photo, handleOnChange, handleOnkeyUp, handleOnClick}}>
        {props.children}
    </SearchContext.Provider>
 );
}