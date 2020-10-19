import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom'
import SignUpPage from './pages/signUpPage/signUppage'
import LogInPage from './pages/logInPage/logInPage'
import PrivateRoutes from './privateRoutes'
import {GlobalContext} from './context/GlobalState';
import CommonLoader from './organisms/loader';

export default () => {
    const {loader} = useContext(GlobalContext);
    return (
        <>
        <Switch>
            <Route path="/sign-up" component={ SignUpPage }/>
            <Route path="/log-in" component={ LogInPage }/>
            <Route path="/" component={ PrivateRoutes }/>
        </Switch>
        {loader?<CommonLoader/>:<></>}
        </>
    )
}
