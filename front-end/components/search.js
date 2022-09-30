import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import '../css/search.css'
import { setSearchTerm } from "../actions/search";
import { hideSearchBtn } from "../actions/searchButtons";
function Search(props){
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    
    const getSearch = (e) =>{
        e.preventDefault()
        console.log("Search")
        props.setSearchTerm(input)
        navigate("/search");
        props.hideSearchBtn()
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
        {props.searchButtons ? (
            <div className="search--button">
            <Button onClick={getSearch}variant="outlined" type="submit">Google Search</Button>
            <Button variant="outlined" type="submit">I'm Feeling Lucky</Button>
         </div>
        ) : null }
        
    </form>

    )


}

const mapStatetoProps = (state) => {
  return {
    search: state.search,
    searchButtons: state.searchButtons
  }
}

export default connect(mapStatetoProps, {setSearchTerm, hideSearchBtn})(Search)




