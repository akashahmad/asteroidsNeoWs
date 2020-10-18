import React from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUpPage from './pages/signUpPage/signUppage'
import LogInPage from './pages/logInPage/logInPage'
import ListOfAsteroids from './pages/asteroidsList/asteroidsList' 

export default () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact component={SignUpPage}/>
                <Route path={"/login"} exact component={LogInPage}/>
                <Route path={"/asteroids"} exact component={ListOfAsteroids}/>
            </Switch>
        </div>
    )
}
