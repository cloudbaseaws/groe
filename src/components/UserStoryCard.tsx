import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { UserStory } from './models'; // Import your UserStory model

const UserStoryCard = ({ userStory }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await DataStore.save(userStory);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user story:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await DataStore.delete(userStory);
    } catch (error) {
      console.error('Error deleting user story:', error);
    }
  };

  return (
    <div className="user-story-card">
      {isEditing ? (
        <form onSubmit={handleSaveClick}>
          {/* Input fields for editing */}
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <h2>{userStory.title}</h2>
          <p>{userStory.description}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </div>
  );
};

export default UserStoryCard;