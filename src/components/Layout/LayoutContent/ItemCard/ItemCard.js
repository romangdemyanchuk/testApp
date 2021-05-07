import React from "react";
import {Card} from "antd";
import "./ItemCard.scss"

const ItemCard = ({item: {name}}) => {
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
