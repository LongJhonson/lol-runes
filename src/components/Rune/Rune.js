import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { base_img_url } from '../../api/api';

import './Rune.css';

export default function Rune(props) {
    const { name, icon } = props.data;
    const image = base_img_url + icon.toLowerCase();
    return (
        <ListItem button className="rune_list">
            <ListItemIcon className="rune_icon">
                <img src={image} />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
}
