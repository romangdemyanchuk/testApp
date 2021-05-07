import React from "react";
import {Layout} from 'antd';
import {loader} from "../../../utils/helpers/loader";
import Button from "../../../generic/Button";
import ItemCard from "./ItemCard/ItemCard";
import './LayoutContent.scss'

const {Content} = Layout;

const LayoutContent = ({isLoading, items, resource, onLoadButtonClick, loadMoreItemsButtonIsDisabled}) => {


    return  <Content style={{margin: '0 16px'}}>
        <div className="site-layout-background" >
            {isLoading && loader()}
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
        {isLoading ? loader() :
            <Button
                IsDisabled={loadMoreItemsButtonIsDisabled}
                text="Load more"
                funk={onLoadButtonClick}/>
        }
    </Content>
};
export default LayoutContent;
