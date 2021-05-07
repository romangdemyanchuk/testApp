import React from "react";
import {Card} from "antd";
import "./ItemCard.scss"
import {spliteUrl} from "../../../utils/helpers/functions";

const ItemCard = ({item, resource}) => {
    const {name, url} = item
    // let id = spliteUrl(url)
    //
    //
    //     if(resource === 'people')
    //         resource = 'characters'


    return  <div className="rootCard">
        <Card
            hoverable
            className="card"
            title={name}
        >
            {/*<img alt="itemImg" className="itemImg" src={`https://starwars-visualguide.com/assets/img/${resource}/${id}.jpg`}/>*/}
        </Card>
    </div>
};
export default ItemCard;
