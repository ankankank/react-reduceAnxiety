import React,{Component} from 'react';
import {linkData} from './linkData';
import {socialData} from './socialData';
import {item} from './todoData';


const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        sidebarOpen:false,
        achievebarOpen:false,
        achieveITEMS: 0,
        links:linkData,
        socialIcons: socialData,
        achieved:[],
        todoItems:0,
        todoTotal:0,
        generalTODO:[],
        filteredProducts:[],
        singleTODO:{},
        loading:false
    };

    componentDidMount(){

        this.setTodo(item);
    }

    setTodo = todos =>{
        let generalTODO = todos.map(it =>{
            const {id} = it.sys;
            const image = it.fields.image.fields.file.url;
            const pro = {id,...it.fields,image };
            return pro;
        });

    this.setState({
        generalTODO,
        filteredProducts:generalTODO,
        achieved:this.getStorageAchieved(),
        singleTODO:this.getStorageTodo(),
        loading:false
    });
};
    getStorageAchieved = () =>{
        return [];
    };

    getStorageTodo = () =>{
        return [];
    };

    getTotals = () =>{ };

    syncStorage = () => {

    };

    addToAchieved = (id) =>{
        console.log(`add here ${id} `);
    };

    setSingleTodo = (id) => {
        console.log(`set single ${id} `);
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
            openAchievebar:this.openAchievebar,
            addToAchieved:this.addToAchieved,
            setSingleTodo:this.setSingleTodo
            }}>
        {  this.props.children }
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;


export{ProductProvider,ProductConsumer};