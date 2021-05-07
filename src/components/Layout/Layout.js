import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import './Layout.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    GET_ITEMS_CREATOR,
    GET_MORE_ITEMS_CREATOR,
    LOAD_MORE_ITEMS_BUTTON_IS_DISABLED
} from "../../redux/Layout/LayoutConstants";
import LayoutContent from "./LayoutContent/LayoutContent";
import LayoutMenu from "./LayoutMenu/LayoutMenu";
import {getFromStorage, setToStorage} from "../../utils/helpers/functions";

const {Header, Footer, Sider} = Layout;

const MainLayout = ({match}) => {
    match.path && match.path !== '/' && setToStorage('resource', match.path.slice(1))

    let localResource = getFromStorage('resource');
    !localResource && setToStorage('resource', 'people')

    const {isLoading, items, loadMoreItemsButtonIsDisabled} = useSelector(state => state.main)

    const [resource, setResource] = useState(localResource)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: page === 1 ? GET_ITEMS_CREATOR :
                GET_MORE_ITEMS_CREATOR, payload: {resource, page}
        })
    }, [resource, page])

    const changeResource = value => {
        dispatch({type: LOAD_MORE_ITEMS_BUTTON_IS_DISABLED, payload: false})
        document.documentElement.scrollTop = 0;
        setToStorage('resource', value)
        setResource(value)
        setPage(1)
    }

    const onLoadButtonClick = () => setPage(prevState => prevState + 1)

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider>
                <LayoutMenu changeResource={changeResource} resource={resource}/>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0, color: '#fff', textAlign: 'center'}}>
                    React APP by Roman
                </Header>
                <LayoutContent
                    isLoading={isLoading}
                    items={items}
                    resource={resource}
                    onLoadButtonClick={onLoadButtonClick}
                    loadMoreItemsButtonIsDisabled={loadMoreItemsButtonIsDisabled}
                />
                <Footer style={{textAlign: 'center'}}>Roman Demianchuk, 2021</Footer>
            </Layout>
        </Layout>
    );
}
export default MainLayout;
