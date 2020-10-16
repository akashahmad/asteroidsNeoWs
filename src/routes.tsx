import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUpPage from './pages/signUpPage/signUppage'
export default () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact component={SignUpPage}/>
            </Switch>
        </div>
    )
}