// import {Router ,Route,IndexRoute,hashHistory} from 'react-router';
import React ,{Component} from 'react'
import Frame from '../containers/Frame';
import Welfare from '../containers/Welfare';
import Play from '../containers/Play';
import Mine from '../containers/Mine';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  browserHistory,
  Redirect,
  Switch
} from 'react-router-dom'
const Routes=()=>{
    return(
        // <Router history={browserHistory}>
            <Frame>
                <Switch>
                    <Route path="/" exact component={Play}/>
                    <Route path="/welfare" component={Welfare}/>
                    <Route path="/play" component={Play}></Route>
                    <Route path="/mine" component={Mine}></Route>
                </Switch>
                
            </Frame>
            
        // </Router>
    )
}


export default Routes

    
