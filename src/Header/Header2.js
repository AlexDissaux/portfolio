import React from 'react';
import './Header.css'
import './Photo.css'
import './Title.css'
import '../index.css'


function Header(props) {
    return (
        <div class="flex-container">
            <img id="photo" class="item animated" src="https://media-exp1.licdn.com/dms/image/C4E03AQG0YHLh345PxQ/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=6xfc4EKVSfWRFcdPLWr8XFi3anItc-TRNxNdqfcM59A" alt=""/>
            <div id="title" className="item text">
                <h1>Ceci est un titre de qualité inégalé</h1>
                <h2>Ceci est un sous-titre des plus improbables et incroyable adazdbzkjn zeofh he zof lorem impsum</h2>
            </div>
        </div>
    );
}




export default Header;


