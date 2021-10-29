import react, { useState } from "react";
import Employee from "./comp/Employee";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Update from './comp/Update'
import Details from "./comp/Details"
import Newemplo from "./comp/Newemp"


function App() {
  // const[owndata,setowndata]=useState([])
  // const defined=(val)=>{
  //   setowndata([...owndata,val])
  // }



  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Employee}
        //  owndata={owndata} 
         ></Route>
        <Route exact path="/update/:id" component={Update} ></Route>
        <Route exact path="/details" component={Details} ></Route>
        <Route exact path="/new_employee" component={Newemplo} 
        // efined={defined()} 
        ></Route>
      </Switch>
      </BrowserRouter>
  
    
    </div>
  );
}

export default App;
