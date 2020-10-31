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
    // console.log(props.data.slots);
    const { name, icon, slots } = props.data;
    const image = base_img_url + icon.toLowerCase();
    const [visible, setvisible] = useState(false);

    return (
        <div>
            <ListItem button className="rune_list" onClick={() => { setvisible(!visible) }}>
                <ListItemIcon className="rune_icon">
                    <img src={image} />
                </ListItemIcon>
                <ListItemText primary={name} className="rune_name" />
            </ListItem>
            {slots.map(item => {
                // if (visible) {
                //     return (
                //         <Subrunes data={slots} />
                //     )
                // }
                return (
                    <Collapse in={visible} timeout="auto" unmountOnExit>
                        <Subrunes data={slots} />
                    </Collapse>
                )
            })}
        </div>
    )
}
