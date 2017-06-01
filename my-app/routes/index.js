import {Router ,Route,IndexRoute,hashHistory} from 'react-router';
import React ,{Component} from 'react'
import Frame from '../containers/Frame';
import App from '../containers/App';
import Play from '../components/Play';

const Routes=(history)=>{
    return(
        <Router history={hashHistory}>
            <Route path="/" component={Frame}>
                <IndexRoute component={App}/>
                <Route path="play" component={Play}></Route>
            </Route>
        </Router>
    )
}
export default Routes

    
