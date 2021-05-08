import React from "react";
import {Layout} from 'antd';
import ItemCard from "./ItemCard/ItemCard";
import './LayoutContent.scss'
import {Loader} from "../../../generic/Loader";

const {Content} = Layout;

const LayoutContent = ({isLoading, items, resource}) => {


    return <Content>
        <div className="site-layout-background">
            {isLoading && Loader()}
            <div className="content-wrapper">
                {
                    items?.length > 0 && items.map(item => {
                        return <ItemCard
                            item={item}
                            resource={resource}
                            key={item.url}
                        />
                    })
                }
            </div>
        </div>

    </Content>
};
export default LayoutContent;
