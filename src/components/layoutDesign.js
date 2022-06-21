import React from 'react';
import { Layout } from "antd"
import NavigationMenu from './layoutParts/Menu';

export const withTopMenu = (WrappedComponent) => {
    return class extends React.Component{
        
        render(){
            const { Content, Footer } = Layout;
            const MenuItems = [
                {
                    key: 1,
                    label: 'Home'
                },
                {
                    key: 2,
                    label: 'About'
                }
            ]

            return (
                <Layout className="layout">
                    <NavigationMenu theme="light" 
                                    mode="horizontal"
                                    defaultSelectedKeys={ ["1"] }
                                    items={ MenuItems } />
                    <Content>
                        <WrappedComponent />
                    </Content>
                    <Footer></Footer>
                </Layout>
            );
        }
    }
}