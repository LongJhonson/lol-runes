import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';

export default function Header(props) {
    const { test } = props;

    const clickMenu = (e) => {
        console.log("menu clicked");
    }

    return (
        <div className="header">
            <IconButton onClick={clickMenu}>
                <MenuIcon className="header__icon" />
            </IconButton>

            <img className="header__icon" src="https://preview.redd.it/itq8rpld8va51.png?width=256&format=png&auto=webp&s=9701ba6228c29bf2d7e3dfffd45b9a3562507289"/>
            <IconButton>
                <PersonIcon className="header__icon" />
            </IconButton>
        </div>
    )
}
