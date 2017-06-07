// import {Router ,Route,IndexRoute,hashHistory} from 'react-router';
import React ,{Component} from 'react'
import Frame from '../containers/Frame';
import App from '../containers/App';
import Play from '../components/Play';
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
                    <Route path="/" exact component={App} onEnter={()=>{console.log(222222)}}/>
                    <Route path="/main" onEnter={()=>{console.log(222222)}} component={App}/>
                    <Route path="/play" onEnter={()=>{console.log(222222)}} component={Play}></Route>
                </Switch>
                
            </Frame>
            
        // </Router>
    )
}


export default Routes

    
