import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// import { Auth } from '../../utils/auth';
// import { QUERY_POSTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../../utils/queries';


const PostList = ({ posts, title }) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {}; 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post.length) {
    return <h3 className='noPost'>No Posts Yet</h3>;
}

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="postCard mb-3">
            <p className="postCard-header post-header">
              <Link to ={`profile/${post.username}`}>
              {post.username}
              </Link>{' '}
              post on {post.createdAt}
            </p>
            <div className="postCard-body post-body">
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