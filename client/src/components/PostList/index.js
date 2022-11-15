import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3 className='noPost'>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header post-header">
              <Link to ={`profile/${post.username}`}>
              {post.username}
              </Link>{' '}
              post on {post.createdAt}
            </p>
            <div className="card-body post-body">
              <Link to={`/post/${post._id}`}>
              <p>{post.title}</p>
              <p className="mb-0">
                likes: {post.likeCount} || Click to{' '}
                {post.commentCount ? 'see' : 'start'} the discussion!
              </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;