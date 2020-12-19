import React from 'react';
import Card from './Card';
import  {Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import Error from './Error';
/* get current wheater from free api */
import Wheather from './wheather/Wheather';
import About from './About';

/* learn redux */

function App() {
  return (<>
   <Header />    
  <Switch>
    <Route exact path ="/"> 
      <Card />
      <Card /> 
      <Card />
      <Card /> 
    </Route> 

    <Route path = "/about" component = {About} />
    <Route path="/Wheather"  component={Wheather} />
    <Route component={Error} />
  </Switch>

  {/* <Footer /> */}
   {/* <Header />  
   
    <Card /> 
    <Card />
    <Card /> 
    <Card /> 

  <Footer /> */}
  </>
  )
}


export default App;