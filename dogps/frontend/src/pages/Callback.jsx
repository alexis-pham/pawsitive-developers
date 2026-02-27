import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      // Send code to backend to exchange for user info
      fetch('http://localhost:3001/auth/callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then(response => response.json())
        .then(data => {
          // Save user info to localStorage
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);

          // Redirect to main app
          navigate('/app');
        })
        .catch(error => {
          console.error('Authentication failed:', error);
          navigate('/');
        });
    } else {
      // No code in URL, redirect back to login
      navigate('/');
    }
  }, [searchParams, navigate]);

  
  return (
    <div>
      <h2>Logging you in...</h2>
    </div>
  );
}

export default Callback;
