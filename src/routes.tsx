import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUpPage from './pages/signUpPage/signUppage'
import LogInPage from './pages/logInPage/logInPage'
export default () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact component={SignUpPage}/>
                <Route path={"/login"} exact component={LogInPage}/>
            </Switch>
        </div>
    )
}
