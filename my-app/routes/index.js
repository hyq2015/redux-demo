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
  browserHistory
} from 'react-router-dom'
const Routes=()=>{
    return(
        <Router history={browserHistory}>
            <Frame>
                <Route path="/main"  component={App}/>
                <Route path="/play" component={Play}></Route>
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

    
