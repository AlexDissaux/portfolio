import React from 'react';
import './Header.css'
import './Photo.css'
import './Title.css'


function Header(props) {
    return (
        <div class="flex-container">
            <div id="photo" class="item"> Photo </div>
            <div id="title" class="item"> Title </div>
        </div>
    );
}

export default Header;


