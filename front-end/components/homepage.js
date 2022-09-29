import React from "react";
import { Link} from "react-router-dom";
import Search from "./search";
import '../css/homepage.css'

function Homepage(){
        return (
        <div className="homepage">
            <div className="homepage--header">
                <div className="homepage--left">
                    <Link className="homepage--link" to="/about">About</Link>
                    <Link className="homepage--link" to="/store">Store</Link>
                </div>

                <div className="homepage--right">
                    <Link className="homepage--link" to="/gmail">Gmail</Link>
                    <Link className="homepage--link" to="/images">Images</Link>
                </div>
            </div>
            <div className="homepage--body">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
            </div>

            <div className="homepage--searchInput">
                <Search />
            </div>


                  

            
    </div>)   
} 
	
export default Homepage;