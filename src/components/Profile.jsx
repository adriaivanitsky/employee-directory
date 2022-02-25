import { useEffect, useState } from 'react';
import { createProfile, getProfile } from '../services/profiles';
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
        console.log(data);
        setProfile(data);
      } catch (error) {
        history.replace('/profile/create');
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleCreate = async (name, email, bio, birthday) => {
    try {
      const data = await createProfile({ name, email, bio, birthday });
      setProfile(data);
      history.replace('/profile');
    } catch (error) {
      throw new Error('something went wrong');
    }
  };

  const handleEdit = () => {
    try {
    } catch (error) {}
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <ProfileForm
        profile={profile}
        setProfile={setProfile}
        handleCreate={handleCreate}
      />
    </div>
  );
}
