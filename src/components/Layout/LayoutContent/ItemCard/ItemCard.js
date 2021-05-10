import React from 'react';
import {Card} from 'antd';
import {spliteUrl} from '../../../../utils/helpers/functions';
import './ItemCard.scss';

const ItemCard = ({item: {url, name}, resource}) => {
    if(resource === 'people')
        resource = 'characters'
    const id = spliteUrl(url)
    return <div className="rootCard">
        <Card
            hoverable
            title={name}
        >
            <img alt={`${name}Img`} className="itemImg" src={`https://starwars-visualguide.com/assets/img/${resource}/${id}.jpg`}/>
        </Card>
    </div>
};
export default ItemCard;
