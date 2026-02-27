"use client";
import {oauth_config} from '../lib/auth';

// Login page with login button that is hooked up to Google's oauth authentication
function Login() {
  const handleGoogleLogin = () => {
    const params = new URLSearchParams({
      client_id: oauth_config.clientId,
      redirect_uri: oauth_config.redirectUri,
      response_type: oauth_config.responseType,
      scope: oauth_config.scope,
    });

    const authUrl = `${oauth_config.authorizationUrl}?${params.toString()}`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <h1>Welcome to DogPS</h1>
      <p>Please sign in to continue</p>
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;