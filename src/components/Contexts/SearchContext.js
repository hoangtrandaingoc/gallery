import React, {useState, useEffect} from 'react';
import axios from 'axios';


//handle API search
export const SearchContext = React.createContext();
export function SearchProvider(props){
    const [photo, setPhoto] = useState("");
    const [result, setResult] = useState([]);

    // result next page show more
    let [numberPage, setNumberPage] = useState(1)



    function handleOnChange(event){
        setPhoto(event.target.value);
    }
    
    const clientId = "pb-ttGQo0vNFGv8XksU4fLGtamKA_oqDl8zbUTXnur0";
    const url1 = "https://api.unsplash.com/search/photos/?page=1&query=" 
            + photo 
            + "&client_id="
            +clientId;

    function handleOnkeyUp(event){
        if (event.keyCode === 13){
            axios.get(url1).then(response => {
                setResult(response.data.results);
            })
        }
    }

    function handleOnClick(event){
        axios.get(url1).then(response => {
            setResult(response.data.results);
        })
    }
    
    console.log(result);

    //handle showmore api
    async function fetchAPI() {
        let newPage = numberPage +1;
        let url = "https://api.unsplash.com/search/photos/?query=" + photo + "&client_id=" + clientId + "&page=" + newPage;
        let res = await axios.get(url);
        result.push(...res.data.results);
        console.log(result);
        setResult(result);
        setNumberPage(newPage);
    }

    function handleShowMoreSearch(event){
        fetchAPI();
    }

 return (
    <SearchContext.Provider value={{result, photo, handleOnChange, handleOnkeyUp, handleOnClick, handleShowMoreSearch}}>
        {props.children}
    </SearchContext.Provider>
 );
}