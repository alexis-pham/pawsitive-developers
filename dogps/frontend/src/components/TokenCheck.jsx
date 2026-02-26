import { Navigate } from "react-router-dom";

// If the user is logged in display the app contents, otherwise redirect them to the login page
// Essentially prevents an unlogged in user from jumping straight to the main app route
function TokenCheck({contents}) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to='/' replace/>
    }
    return contents;
}

export default TokenCheck;