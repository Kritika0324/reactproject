import React from 'react'
import "./header.css";

const Header = () => {
    return (
        <div className="max-width" header>
            <img src='https://th.bing.com/th/id/OIP.08uEGyULtiAl7llEu3VmgwAAAA?w=181&h=130&c=7&r=0&o=5&dpr=1.25&pid=1.7'
            alt="zomato-logo"
            className="header-logo" />
            <div className="header-right">
                <div className='header-location-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                        <i class="fi fi-rr-marker location-icon"></i>
                        <div>Banglore</div>
                        </div>
                        <i className="fi fi-rr-caret-down"></i>
                    </div>
                    <div className='location-search-separator'></div>
                    <div className='header-searchbar'>
                    <i className="fi fi-rr-search search-icon"></i>
                    <input placeholder="Search for reataurtant, cuisine or a dish"
                     className="search-input"
                      />
                    </div>
                </div>
                <div className="profile-wrapper">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijUsFF_9lkZWtXXSK5npYSueYZjA13sfjnQ&usqp=CAU" alt="Profile"
                    className="header-profile-image" 
                    />
                    <span className="header-username">Kritika</span>
                    <i className="fi fi-ss-angle-down profile-options-icons"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;