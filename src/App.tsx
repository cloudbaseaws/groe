
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState } from 'react';
import { Schema, Model, Enum } from '@aws-amplify/datastore';
import { generateClient } from 'aws-amplify/data';
import UserStoryList from './components/UserStoryList';

// Define the UserStory model
const UserStory = new Schema('UserStory', {
  // ... your UserStory model fields
});

const client = generateClient<typeof UserStory>();

function App() {
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    const fetchUserStories = async () => {
      const stories = await client.models.UserStory.list();
      setUserStories(stories);
    };
    fetchUserStories();
  }, []);

  return (
    <Authenticator>
      {({ signOut }) => (
        <main>
          <h1>Product Backlog</h1>
          <UserStoryList userStories={userStories} />
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;