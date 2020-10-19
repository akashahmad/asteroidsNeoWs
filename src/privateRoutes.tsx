import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import {GlobalContext} from './context/GlobalState';
import ListOfAsteroids from './pages/asteroidsList/asteroidsList'
import Loader from './organisms/loader'

const Routes = () => {
    const {loggedIn}:any = useContext(GlobalContext);
    return (
        <Switch>
            <Route path="/" exact component={ loggedIn ? ListOfAsteroids : Loader }/>
        </Switch>
    )
}
export default Routes;

