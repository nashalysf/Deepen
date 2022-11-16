import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { QUERY_POSTS } from '../../utils/queries'
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';

const PostList = (props) => {
  const { id: postsId } = useParams();

  const { loading, data } = useQuery(QUERY_POSTS, {
    variables: { id: postsId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          testing {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.decription}</p>
        </div>
      </div>

      {post.decription > 0 && (
        <Likecount post={post.likecount} />
      )}

      {Auth.loggedIn() && <Likecount post={post._id} />}
    </div>
  );
};


// const postList = ({ posts, title }) => {
//   if (posts != null && !posts.length) {
//     return <h3 className='noPost'>No Posts Yet</h3>;
// }

//   return (
//     <div>
//       <h3>{title}</h3>
//       {posts &&
//         posts.map(post => (
//           <div key={post._id} className="postCard mb-3">
//             <p className="postCard-header post-header">
//               <Link to ={`profile/${post.username}`}>
//               {post.username}
//               </Link>{' '}
//               post on {post.createdAt}
//             </p>
//             <div className="postCard-body post-body">
//               <Link to={`/post/${post._id}`}>
//               <p>{post.title}</p>
//               <p className="mb-0">
//                 likes: {post.likeCount} || Click to{' '}
//                 {post.commentCount ? 'see' : 'start'} the discussion!
//               </p>
//             </Link>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

export default PostList;
