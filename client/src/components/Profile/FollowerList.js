import React from 'react';
import { Link } from 'react-router-dom';

const FollowerList = ({ followerCount, username, followers }) => {

  if (followers == null || followers.length === 0) {
    return <p className="bg-dark text-light p-3">No followers yet</p>;
  }
  if (!followers || !followers.length) {
    return <p className="bg-light text-dark p-2 followers">{username}, make some followers!</p>;
  }
 
  return (
    <div>
      <h5>
        {username}'s {followers.length} {followers.length === 1 ? 'follower' : 'followers'}
      </h5>
      {followers.map(follower => (
        <button className="btn w-100 display-block mb-2" key={follower._id}>
          <Link to={`/profile/${follower.username}`}>{follower.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FollowerList;
