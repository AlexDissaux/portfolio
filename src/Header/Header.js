import React from 'react';
import './Header.css'

class Header extends React.Component {


    Photo () {
    return (<div id="photo"> Photo </div>)
    }


    Title () {
    return (<div id="title"> Title </div>)
    }

    render () {
       return  (<div class="flex-container"> {this.Title()} {this.Photo()} </div>)
    }

}

export default Header;


