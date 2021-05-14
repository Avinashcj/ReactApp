import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CandidateProcess from '../CandidateProcess/CandidateProcess';
import Dashboard from '../Dashboard/Dashboard';
import Help from '../Help/Help';
import Step1 from '../CandidateProcess/Step1.js';
import Step2 from '../CandidateProcess/Step2.js';
import Step3 from '../CandidateProcess/Step3.js';
import Step4 from '../CandidateProcess/Step4.js';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
     {/* <Switch>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/CandidateProcess' component={CandidateProcess}/>
      <Route exact path='/Help' component={Help}/> 
    </Switch> */}


     {/* <Switch>
     <Route exact path='/Step1'  component={Step1}/>
     <Route exact path='/Step2' component={Step2}/>
     <Route exact path='/Step3'  component={Step3}/>
     <Route exact path='/Step4' component={Step4}/>
   </Switch>  */}


  </main>
)

export default Main;
