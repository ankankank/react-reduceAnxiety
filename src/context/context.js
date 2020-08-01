import React,{Component} from 'react'
import {linkData} from './linkData';

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        sidebarOpen:false,
        achievebarOpen:false,
        achieveITEMS: 0,
        links:linkData,
        achieved:[]
    };
    handleSidebar = () => {
        this.setState({sidebarOpen:!this.state.sidebarOpen});
    };

    handleAchievebar = () => {
        this.setState({achievebarOpen:!this.state.achievebarOpen});
    };

    closeAchievebar = () => {
        this.setState({achievebarOpen: false});
    };

    openAchievebar = () => {
        this.setState({achievebarOpen: true});
    };  



    render(){
        return(
        <ProductContext.Provider value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            handleAchievebar:this.handleAchievebar,
            closeAchievebar: this.closeAchievebar,
            openAchievebar:this.openAchievebar
            }}>
        {  this.props.children }
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;


export{ProductProvider,ProductConsumer};