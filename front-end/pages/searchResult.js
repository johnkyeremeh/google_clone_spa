import React, {useState} from "react";
import Search from "../components/search"


function SearchResult(){
    const [showButton, setShowButtons] = useState(false)
    
        return (
        <div className="searchResult">
           < Search />

    </div>)   
} 
	
export default SearchResult;