import React, {useEffect, useContext} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import SignUpPage from './pages/signUpPage/signUppage'
import LogInPage from './pages/logInPage/logInPage'
import PrivateRoutes from './privateRoutes'
import {GlobalContext} from './context/GlobalState';
import CommonLoader from './organisms/loader';
import 'react-notifications/lib/notifications.css';
import firebase from "./config/firebase";

const Routes = (props: any) => {
    let {history, location} = props;
    const {loader} = useContext(GlobalContext);
    const {setLoader, setUser, setId, setLoggedIn, loggedIn, setFavouriteIds, setFavouriteAsteroids}:any = useContext(GlobalContext);
    useEffect(() => {
        if (loggedIn) {
            if (location.pathname === "/sign-up") {
                history.push("/");
            } else if (location.pathname === "/log-in") {
                history.push("/");
            }
        } else {
            setLoader(true);
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    firebase.firestore().collection('users').doc(user.uid).onSnapshot((snapshot) => {
                        let data = {...snapshot.data()};
                        setUser(data);
                        setId(user.uid);
                        setLoader(false);
                        setLoggedIn(true);
                    });
                    firebase.firestore().collection('usersFavourites').where("userId", "==", user.uid).onSnapshot((snapshot) => {
                        if (snapshot.size) {
                            let ids: any = [];
                            let favourites: any = [];
                            snapshot.forEach(each => {
                                ids.push(each.id);
                                favourites.push(each.data());
                            });
                            setFavouriteIds(ids);
                            setFavouriteAsteroids(favourites);
                        }
                    });
                } else {
                    if (location.pathname === "/sign-up") {
                    }
                    else if (location.pathname === "/log-in") {
                    }
                    else {
                        history.push("/log-in");
                    }
                }
            });
            setLoader(false)
        }
        // eslint-disable-next-line
    }, [location.pathname, loggedIn]);
    return (
        <>
        <NotificationContainer/>
        <Switch>
            <Route path="/sign-up" component={ SignUpPage }/>
            <Route path="/log-in" component={ LogInPage }/>
            <Route path="/" component={ PrivateRoutes }/>
        </Switch>
        {loader ? <CommonLoader/> : <></>}
        </>
    )
};

export default withRouter(Routes);
