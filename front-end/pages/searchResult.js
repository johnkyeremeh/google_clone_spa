import React, {useState} from "react";
import Search from "../components/search"
import { connect } from "react-redux";

function SearchResult(props){
    const [showButton, setShowButtons] = useState(false)

        return (
        <div className="searchResult">
           < Search term={props.search.term}/>
           {props.search.term}
           <div className="searchResults--results">

           </div>

        </div>)   
} 
	

const mapStatetoProps = (state) => {
    return {
      search: state.search,
      searchButtons: state.searchButtons
    }
  }

  
export default connect(mapStatetoProps)(SearchResult);