import React from 'react'
import { base_img_url } from '../../api/api';

export default function Subrunes(props) {
    const runesArray = [];
    for (let i = 0; i < props.data.length; i++) {
        props.data[i].runes.forEach(element => {
            runesArray.push(element);
        });
    }

    const parse = require('html-react-parser');

    return (
        <div>
            {runesArray.map(item => {
                let { name, longDesc } = item;
                const icon = item.icon.toLowerCase();
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
