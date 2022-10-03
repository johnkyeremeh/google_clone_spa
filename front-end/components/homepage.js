import React from "react";
import Search from "./search";
import '../css/homepage.css'

function Homepage(){
        return (
        <div className="homepage">
            <div className="homepage--header">
                <div className="homepage--left">
                    <a  className="homepage--link"  target="_blank" href="https://about.google/?fg=1&utm_source=google-CA&utm_medium=referral&utm_campaign=hp-header">About</a>
                    <a  className="homepage--link"  target="_blank" href="https://store.google.com/CA?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-CA">Store</a>
                   
                </div>

                <div className="homepage--right">
                <a  className="homepage--link"  target="_blank" href="https://mail.google.com/mail/&ogbl">Gmail</a>
                <a  className="homepage--link"  target="_blank" href="https://www.google.ca/imghp?hl=en&ogblA">Images</a>
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