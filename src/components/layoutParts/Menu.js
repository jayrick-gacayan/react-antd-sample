import React from 'react';
import { Menu, Layout } from 'antd';

class NavigationMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme: props.theme || "dark",
            mode: props.mode || "horizontal",
            defaultSelectedKeys: props.defaultSelectedKeys || ['2'],
            items: props.items || []
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <Layout.Header className="header">
                <div className="logo" />
                <Menu theme={ this.state.theme } 
                    mode={ this.state.mode } 
                    defaultSelectedKeys={ this.state.defaultSelectedKeys } 
                    items={ this.state.items } />
            </Layout.Header>
        )
    }
}

export default NavigationMenu;