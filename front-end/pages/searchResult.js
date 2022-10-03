import React, {useState} from "react";
import Search from "../components/search"
import { getSearchResults, setShowPrevious,setShowNext  } from "../actions/search";
import Button from '@mui/material/Button';
import { connect } from "react-redux";
import '../css/searchResults.css'

function SearchResult(props){
  
    const data = props.search.data
    const term = props.search.term

   const showPrevious = () => {
    console.log("show prev click")

    props.getSearchResults(props.search)
    props.setShowPrevious()

   }

   const showNext = () => {
    console.log("show prev click")
    props.getSearchResults(props.search)
    props.setShowNext()
   }

        return (
        <div className="searchResult">
           < Search />
           {term && (
           <div className="searchResults--results">
                <div id="searchresultsarea">
                    <p id="searchresultsnumber">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) seconds </p>
                    {data?.items.map((item, index) => {
                        return (
                            <div key={index} className="searchresult">
                                <a href={item.link}>{item.link}<br></br><h2>{item.title}</h2></a> 
                                <p>{item.snippet}</p>
                            </div>
                        )})
                    }
                    
                </div>
                <div className="Pagination--button">
                    <Button  variant="outlined" onClick={showPrevious}type="submit">Previous</Button>
                    <Button variant="outlined" onClick={showNext} type="submit">Next</Button>
                </div>
            </div>)}
        </div>  )
}
           

        
                

	

const mapStatetoProps = (state) => {
    return {
      search: state.search,
      searchButtons: state.searchButtons
    }
  }

  
export default connect(mapStatetoProps, {getSearchResults, setShowPrevious, setShowNext})(SearchResult);