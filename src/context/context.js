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
        loading:true
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
        let achieved;
        if(localStorage.getItem('achieved')){
            achieved= JSON.parse(localStorage.getItem('achieved'))
        }
        else {
            achieved = []
        }
        return achieved;
    };

    getStorageTodo = () =>{
        return localStorage.getItem('singleTODO') ? JSON.parse(localStorage.getItem('singleTODO')) : {};
    };

    getTotals = () =>{ 
        let achieveITEMS = 0;
        this.state.achieved.forEach(item => {
            achieveITEMS ++;
        });
        return{achieveITEMS};
    };

    syncStorage = () => {
        localStorage.setItem('achieved',JSON.stringify(this.state.achieved));
    };


    addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      achieveITEMS: totals.achieveITEMS
    });
  };



    addToAchieved = id =>{
        let tempAchieved = [...this.state.achieved];
        let tempTodo = [...this.state.generalTODO];
        let tempItem=tempTodo.find(item => item.id === id);
        let achieveITEM = {...tempItem};
        tempAchieved = [...tempAchieved,achieveITEM];
        this.setState(() => {
            return {achieved:tempAchieved};
        },()=>{
            this.addTotals();
            this.syncStorage();            
            this.openAchievebar();
        });     
    };

    setSingleTodo = (id) => {
        let todo = this.state.generalTODO.find(item => item.id === id);
        localStorage.setItem('singleTODO',JSON.stringify(todo))
        this.setState({
            singleTODO:{...todo},
            loading: false
        })

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