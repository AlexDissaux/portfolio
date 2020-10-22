import React from 'react';
import './Header.css'
import './Photo.css'
import './Title.css'
import '../index.css'


function Header(props) {
    return (
        <div class="flex-container">
            <img id="photo" class="item animated" src="https://mdn.mozillademos.org/files/7693/catfront.png" alt="">
            <div id="title" class="item"> Title </div>
        </div>
    );
}



export default Header;


