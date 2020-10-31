import React from 'react'
import { base_img_url } from '../../api/api';

export default function Subrunes(props) {
    console.log(props.data[0].runes);
    const { runes } = props.data[0];
    var parse = require('html-react-parser');

    return (
        <div>
            {runes.map(item => {
                let { icon, name, longDesc } = item;
                icon = item.icon.toLowerCase();
                return (
                    <div>
                        <img src={`${base_img_url}${icon}`} />
                        <h3>{name}</h3>
                        <p>{longDesc ? parse(item.longDesc) : ""}</p>
                    </div>
                )
            })}
        </div>
    )
}
