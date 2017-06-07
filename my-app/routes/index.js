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
        <Router history={browserHistory}>
            <Frame>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route path="/main"  component={App}/>
                    <Route path="/play" component={Play}></Route>
                </Switch>
                
            </Frame>
            
        </Router>
    )
}
/*const Routes=(
        <Router history={hashHistory}>
            <Route path="/" component={Frame}>
                <IndexRoute component={App}/>
                <Route path="play" component={Play}></Route>
            </Route>
        </Router>
    )*/

export default Routes

    
