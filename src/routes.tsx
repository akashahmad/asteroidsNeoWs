import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import SignUpPage from './pages/signUpPage/signUppage'
import LogInPage from './pages/logInPage/logInPage'
import PrivateRoutes from './privateRoutes'
import {GlobalContext} from './context/GlobalState';
import CommonLoader from './organisms/loader';
import 'react-notifications/lib/notifications.css';

export default () => {
    const {loader} = useContext(GlobalContext);
    return (
        <>
        <NotificationContainer/>
        <Switch>
            <Route path="/sign-up" component={ SignUpPage }/>
            <Route path="/log-in" component={ LogInPage }/>
            <Route path="/" component={ PrivateRoutes }/>
        </Switch>
        {loader?<CommonLoader/>:<></>}
        </>
    )
}
