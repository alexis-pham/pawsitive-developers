import { useNavigate } from "react-router-dom";

// Sign out button that removes the authentication token and redirects to login
function SignOutButton() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/', { replace: true });
    };

    return (
        <button onClick={handleSignOut}> Sign Out </button>
    );
}

export default SignOutButton;
