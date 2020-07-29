import React,{Component} from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        sidebarOpen:false,
        achievebarOpen:false,
        achieveITEMS: 0
    };
    handleSidebar = () => {
        this.setState({sidebarOpen:!this.state.sidebarOpen});
    };

    handleAchievebar = () => {
        this.setState({AchievebarOpen:!this.state.AchievebarOpen});
    };

    closeAchievebar = () => {
        this.setState({AchievebarOpen: false});
    };

    openAchievebar = () => {
        this.setState({AchievebarOpen: true});
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