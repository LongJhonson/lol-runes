import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { base_img_url } from '../../api/api';

import Subrunes from '../Subrunes';

import './Rune.css';
import { Collapse } from '@material-ui/core';

export default function Rune(props) {
    const { initial, toggleAll } = props;
    const { name, icon, slots } = props.data;
    const image = base_img_url + icon.toLowerCase();
    const [visible, setvisible] = useState(initial);

    const toggle = () => {
        toggleAll(false);
        setvisible(!visible);
        console.log("okok");
    }

    return (
        <div>
            <ListItem button className="rune_list" onClick={() => { toggle() }}>
                <ListItemIcon className="rune_icon">
                    <img src={image} />
                </ListItemIcon>
                <ListItemText primary={name} className="rune_name" />
            </ListItem>
            <Collapse in={visible} timeout="auto" unmountOnExit>
                <Subrunes data={slots} name={name} />
            </Collapse>
        </div>
    )
}
