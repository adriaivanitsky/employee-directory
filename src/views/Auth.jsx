import { useUser } from '../context/UserContext';
import { useHistory, Link } from 'react-router-dom';
import { signInUser, signUpUser } from '../services/users';
import AuthForm from '../components/AuthForm';

export default function Auth({ isSigningUp = false }) {
  const { setUser } = useUser();
  const history = useHistory();

  const handleAuth = async (email, password) => {
    try {
      if (isSigningUp) {
        await signUpUser(email, password);
        history.replace('/profile');
      } else {
        const resp = await signInUser(email, password);
        setUser({ id: resp.id, email: resp.email });
        history.replace('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <AuthForm handleAuth={handleAuth} />
      {isSigningUp ? (
        <>
          <p>already have an account? sign in</p>
          <Link to="/login">login</Link>
        </>
      ) : (
        <>
          <p>dont have an account? sign up</p>
          <Link to="/register">register</Link>
        </>
      )}
    </div>
  );
}
