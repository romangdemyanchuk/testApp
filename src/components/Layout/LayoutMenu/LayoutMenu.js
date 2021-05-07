import React from "react";
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import {resources} from "../../../utils/helpers/resources";

const LayoutMenu = ({changeResource, resource}) => {
    return <Menu className="menu" style={{position: 'fixed', width: '200px'}} theme="dark" defaultSelectedKeys={['1']}
                 mode="inline">
        {
            resources && resources.map(item => {
                return <Menu.Item style={{backgroundColor: resource === item.resource ? '#1890ff' : '#001529'}}
                                  key={item.key} onClick={() => changeResource(item.resource)}>
                    <Link to={item.resource}>{item.name}</Link>
                </Menu.Item>
            })
        }
    </Menu>
};
export default LayoutMenu;
