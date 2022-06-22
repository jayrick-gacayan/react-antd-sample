import React from 'react';
import { Link } from 'react-router-dom'
import { Layout } from "antd";

import NavigationMenu from './layoutParts/Menu';

export const withTopMenu = (WrappedComponent) => {
    return class extends React.Component{
        
        render(){
            const { Content, Footer } = Layout;
            const MenuItems = [
                {
                    key: 1,
                    label: (<Link to="/">Home</Link>)
                },
                {
                    key: 2,
                    label: (<Link to="/about">About</Link>)
                },
                {
                    key: 3,
                    label: (<Link to="/contact">Contact Us</Link>)
                }
            ]

            return (
                <Layout >
                    <NavigationMenu theme="dark" 
                                    mode="horizontal"
                                    defaultSelectedKeys={ ["1"] }
                                    items={ MenuItems } />
                    <Content>
                        <WrappedComponent />
                    </Content>
                    <Footer style={{
                        textAlign: "center"
                    }}>©2022 Created by Jayrick Gacayan</Footer>
                </Layout>
            );
        }
    }
}