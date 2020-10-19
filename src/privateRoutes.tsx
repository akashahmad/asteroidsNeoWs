import React, {useEffect, useContext} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {GlobalContext} from './context/GlobalState';
import ListOfAsteroids from './pages/asteroidsList/asteroidsList'
import Loader from './organisms/loader'
import firebase from "./config/firebase";

const Routes = (props: any) => {
    let {history, location} = props;
    const {setLoader, setUser, setId, setLoggedIn, loggedIn}:any = useContext(GlobalContext);
    useEffect(() => {
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
        // eslint-disable-next-line
    }, [location.pathname]);
    return (
        <Switch>
            <Route path="/" exact component={ loggedIn ? ListOfAsteroids : Loader }/>
        </Switch>
    )
}
export default withRouter(Routes);

