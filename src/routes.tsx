import React from 'react'
import {Route, Switch} from 'react-router-dom'
// import SignUpPage from './pages/signUpPage/signUppage'
import Header from './pages/asteroidsList/asteroidsList'

export default () => {
    return (
        <div>
            <Switch>
                {/* <Route path={"/"} exact component={SignUpPage}/> */}
                <Route path={"/"} exact component={Header}/>
            </Switch>
        </div>
    )
}