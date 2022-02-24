import { useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';
import ProfileForm from '../components/ProfileForm';
import { useHistory } from 'react-router-dom';

export default function Profile({ isCreatingProfile = false }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        history.replace('/profile/create');
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(profile);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <ProfileForm profile={profile} />
    </div>
  );
}
