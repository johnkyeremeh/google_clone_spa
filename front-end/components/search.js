import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import '../css/search.css'

function Search(){
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    
    const getSearch = (e) =>{
        e.preventDefault()
        console.log("Search")
        navigate("/search");
    }

    const onChange = (e) =>{
        setInput([e.target.name] = e.target.value)
        console.log("change")
    }

    return(
    <form>
        <div className="search">
            <div className="search--searchInput">
                <input  onChange={onChange}/>
            </div>
        </div>

        <div className="search--button">
            <Button onClick={getSearch}variant="outlined" type="submit">Google Search</Button>
            <Button variant="outlined" type="submit">I'm Feeling Lucky</Button>
        </div>
    </form>

    )


}

export default Search




