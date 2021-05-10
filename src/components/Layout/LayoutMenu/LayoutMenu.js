import React from 'react';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom';
import {resources} from '../../../utils/helpers/resources';

const LayoutMenu = ({changeResource, resource}) => {
    return <Menu className="menu" style={{position: 'fixed', width: '200px'}} theme="dark"
        mode="inline">
        {
            resources && resources.map(item => {
                return (
                    <Menu.Item
                        key={item.key}
                        onClick={() => changeResource(item.resource)}
                        className={resource === item.resource && 'ant-menu-item-selected'}
                    >
                        <NavLink to={item.resource}>
                            {item.name}
                        </NavLink>
                    </Menu.Item>
                )
            })
        }
    </Menu>
};
export default LayoutMenu;
