import { useUser } from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../services/users';

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
    </div>
  );
}
