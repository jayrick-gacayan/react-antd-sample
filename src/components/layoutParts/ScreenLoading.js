import React, { Component, createContext } from 'react';
import { Layout, Spin } from 'antd';

export const ScreenLoadingContext = createContext({
    visible : true,
    showScreenLoading: () => {},
    hideScreenLoading: () => {}
});

export class ScreenLoadingProvider extends Component{
    timer = null;
    constructor(props){
        super(props);

        this.state = {
            visible: true,
            showScreenLoading: ()
        }
    }

    componentDidMount(){
        
        if(this.state.visible){
            this.timer = setTimeout(
                () => {
                    this.setState({ visible: false });
                }
                , 5000);
        }
        
    }

    componentWillUnmount(){
        this.setState({ visible: true });
        clearTimeout(this.timer);
    }

    render(){
        return (
            <ScreenLoadingContext.Provider value={ this.state }>
                { this.props.children }        
            </ScreenLoadingContext.Provider>
        );
    }
}

class ScreenLoading extends React.Component{
    
    render(){
        return (
            <ScreenLoadingContext.Consumer>
                {
                    ({ visible }) => {
                        return (
                                visible && 
                                <Layout style={{
                                        width: "100%",
                                        height: "100vh",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#f2f3f8"
                                    }}>
                                    <Spin tip="loading"/>
                                </Layout>
                            );
                    }
                }
            </ScreenLoadingContext.Consumer>
        );
    }
}

export default ScreenLoading;