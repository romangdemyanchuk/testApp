import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import './Layout.scss'
import {useDispatch, useSelector} from "react-redux";
import ItemCard from "./ItemCard/ItemCard";
import Button from "../../generic/Button";
import {Link} from "react-router-dom";
import {loader} from "../../utils/helpers/Loader";
import {
    GET_ITEMS_CREATOR,
    GET_MORE_ITEMS_CREATOR,
    LOAD_MORE_ITEMS_BUTTON_IS_DISABLED
} from "../../redux/session/Layout/LayoutConstants";

const {Header, Content, Footer, Sider} = Layout;

const MainLayout = ({match}) => {
    match.path && match.path !== '/' &&
    localStorage.setItem('resource', match.path);

    let localResource = localStorage.getItem('resource');
    !localResource && localStorage.setItem('resource', 'people');

    const isLoading = useSelector(state => state.main.isLoading)
    const items = useSelector(state => state.main.items)
    const loadMoreItemsButtonIsDisabled = useSelector(state => state.main.loadMoreItemsButtonIsDisabled)
    console.log(loadMoreItemsButtonIsDisabled)

    const [resource, setResource] = useState(localResource.slice(1))
    const [collapsed, setCollapsed] = useState(false)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: page === 1 ? GET_ITEMS_CREATOR :
                GET_MORE_ITEMS_CREATOR, payload: {resource, page}
        })
    }, [resource, page])

    const changeResource = value => {
        document.documentElement.scrollTop = 0;
        dispatch({type: LOAD_MORE_ITEMS_BUTTON_IS_DISABLED, payload: false})
        setResource(value)
        setPage(1)
        localStorage.setItem('resource', value);
    }
    const onCollapse = () => setCollapsed(prevState => !prevState)
    const onLoadButtonClick = () => setPage(page + 1)

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu className="menu" theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item className={resource === 'people' ? 'activeTab' : 'noActiveTab'} key="1"
                               onClick={() => changeResource('people')}>
                        <Link to='people'>People</Link>
                    </Menu.Item>
                    <Menu.Item className={resource === 'planets' ? 'activeTab' : 'noActiveTab'} key="2"
                               onClick={() => changeResource('planets')}>
                        <Link to='planets'> Planets</Link>
                    </Menu.Item>


                    <Menu.Item className={resource === 'starships' ? 'activeTab' : 'noActiveTab'} key="3"
                               onClick={() => changeResource('starships')}>
                        <Link to='starships'> Starships</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background"
                        style={{padding: 0, color: '#fff', textAlign: 'center'}}
                >
                    React APP by Roman
                </Header>

                <Content style={{margin: '0 16px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
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
                <Footer style={{textAlign: 'center'}}>Roman Demianchuk, 2021</Footer>
            </Layout>
        </Layout>
    );
}
export default MainLayout;
