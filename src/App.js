import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Card from './Component/Card/Card'
import Carousel from'./Component/Carousel/Carousel'
import Footer from './Component/Footer/Footer'
import Contents from './Component/Content/Contents'
// import Gird from './Component/Gird/Gird';










class App extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
       <body className="head">
    <div className="App">
     
      <>
     
       <Header name="Dimas Anugerah P " name2="About"/>
        <Jumbotron me="Me"/>
       <Card/>
       <Carousel/>
       <Contents/>
       <Footer/>

       
       

      
      
     
       
      </>
      
      </div>
      </body>
     
    )
  }
}


export default App;
