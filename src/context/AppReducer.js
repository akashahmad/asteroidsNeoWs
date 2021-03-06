export default (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_ID':
            return {
                ...state,
                id: action.payload
            };
        case "SET_LOADER":
            return { ...state, loader: action.payload };
        case "SET_LOGGEDIN":
            return { ...state, loggedIn: action.payload };
        case "SET_FAVOURITE_IDS":
            return { ...state, favouriteIds: action.payload };
        case "SET_FAVOURITE_ASTEROIDS":
            return { ...state, favouriteAsteroids: action.payload };
        default:
            return state;
    }
}