import React, { Component, createContext } from 'react';
import { Layout, Spin } from 'antd';

export const ScreenLoadingContext = createContext();

export class ScreenLoadingProvider extends Component{
    timer = null;
    constructor(props){
        super(props);

        this.state = {
            visible: true,

            showScreenLoading: () => {
                this.setState({ visible: true });
            },
            hideScreenLoading: () => {
                this.setState({ visible: false });
            }
        }
    }

    componentDidMount(){
        console.log("Provider state did update --- ", this.state.visible);
        if(this.state.visible){
            this.timer = setTimeout(
                () => {
                    
                    this.setState({ visible: false });
                }
                , 10000);
        }
        
    }

    componentDidUpdate(){
        
        console.log("Provider state did update --- ", this.state.visible);
    }

    componentWillUnmount(){
        
        
        console.log("Provider state will unmount --- ", this.state.visible);
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
    screenLoadingTimer = null;
    static contextType = ScreenLoadingContext;
    componentDidMount(){
        console.log("Load Screen didMount ", this.context );

        this.context.showScreenLoading();

        this.screenLoadingTimer = setTimeout(
            () => {
                this.context.hideScreenLoading();
            }
            , 10000);
    }

    componentDidUpdate(){
        console.log("Load Screen didUpdate ", this.context );
    }

    componentWillUnmount(){
        console.log("Load Screen willUnmount", this.context );
    }


    render(){
        console.log("Context", this.context.visible)
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