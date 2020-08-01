import React,{Component} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/homePage.js";
import About from "./Pages/AboutPage.js";
import Contact from "./Pages/contactPage.js";
import Achieved from "./Pages/Achieved.js";
import drinkWater from "./Pages/drinkWaterPage.js";
import Mindfulness from "./Pages/mindfulnessPage.js";
import todo from "./Pages/todoPage.js";
import singletodo from "./Pages/singleTODOPage.js";
import Default from "./Pages/defaultPage.js";

import{Route,Switch} from 'react-router-dom';

import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import SideAchieved from "./components/SideAchieved.js";  
import Footer from "./components/Footer.js";

class App extends Component{
  render(){
    return (
      <>
            {}
      <Navbar />
      <Sidebar /> 
      <SideAchieved />
      <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/achieved" component={Achieved}/>
        <Route path="/drinkWater"component={drinkWater}/>
        <Route path="/mindfulness"component={Mindfulness}/>
        <Route path="/todo" exact component={todo}/>
        <Route path="/todo/:id" component={singletodo}/>
        <Route component={Default}/>
      </Switch>
      <Footer />
      </>
    );
  }
}

export default App;
