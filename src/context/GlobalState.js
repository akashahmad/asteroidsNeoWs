import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    id: null,
    user: null,
    loader: false,
    loggedIn: false,
    favouriteIds: [],
    favouriteAsteroids: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const setUser = (user) => {
        dispatch({
            type: 'SET_USER',
            payload: user
        });
    };

    const setId = (id) => {
        dispatch({
            type: 'SET_ID',
            payload: id
        });
    };

    const setLoader = (status) => {
        dispatch({
            type: 'SET_LOADER',
            payload: status
        });
    };

    const setLoggedIn = (status) => {
        dispatch({
            type: 'SET_LOGGEDIN',
            payload: status
        });
    };

    const setFavouriteIds = (ids) => {
        dispatch({
            type: 'SET_FAVOURITE_IDS',
            payload: ids
        });
    };

    const setFavouriteAsteroids = (favourites) => {
        dispatch({
            type: 'SET_FAVOURITE_ASTEROIDS',
            payload: favourites
        });
    };

    return (<GlobalContext.Provider value={{
        id: state.id,
        user: state.user,
        loader: state.loader,
        loggedIn: state.loggedIn,
        favouriteIds: state.favouriteIds,
        favouriteAsteroids: state.favouriteAsteroids,
        setFavouriteIds,
        setFavouriteAsteroids,
        setUser,
        setId,
        setLoader,
        setLoggedIn,
    }}>
        {children}
    </GlobalContext.Provider>);
}