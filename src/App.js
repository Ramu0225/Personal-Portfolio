import React from 'react';
import {  Route } from 'react-router-dom';
import ProfilePage  from './components/profile-page/profile-page.component';
import Projects from './components/projects/projects.component';
import Header from './components/header/header.component';

import './App.css';
class App extends React.Component{

  render(){
  return (
    <div className="App">
        <Header />
        <Route exact path= '/' component={ProfilePage}/>
        
        <Route path= '/Projects' component={Projects}/>
        
                  
     </div>
    
   
  
    );
};
}

export default App;
