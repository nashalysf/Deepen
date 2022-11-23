import React from 'react';
import { Link } from 'react-router-dom';
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const FollowerList = ({ followerCount, username, followers }) => {
 
  if (followers == null || followers.length === 0) {
    return <p className="bg-dark text-light p-3">No followers yet</p>;
  }
  console.log(followers[0]._id);
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
          <Link to={`/profile/${followers.username}`}>{followers.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FollowerList;
