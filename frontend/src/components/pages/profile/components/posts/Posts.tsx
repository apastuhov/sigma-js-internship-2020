import Box from '@material-ui/core/Box';
import PostAddIcon from '@material-ui/icons/PostAdd';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IPostsProps } from '../../../../interfaces/Interface';
import './posts.scss';

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const sortedPosts = useMemo(() => {
    return [...posts].reverse();
  }, [posts]);

  return (
    <>
      {sortedPosts.length === 0 ? (
        <div className="empty-posts">
          <PostAddIcon className="posts-icon" />
          <h3>
            This user has no posts yet
            <br />
            You can add one
          </h3>
        </div>
      ) : (
        <div className="posts">
          {sortedPosts.map((postInfo, id) => {
            const parseDate = Date.parse(postInfo.date);
            const date = new Date(parseDate).toLocaleString();
            return (
              <Box boxShadow={2} className="post" key={id}>
                <div className="user-post">
                  <Link to={`/user/${postInfo.createdBy._id}`} className="user">
                    <img src={postInfo.createdBy.avatar} alt="User avatar" />
                    <h3>
                      {postInfo.createdBy.firstName} {postInfo.createdBy.lastName}
                    </h3>
                    <p>{date}</p>
                  </Link>
                </div>
                <p>{postInfo.body}</p>
              </Box>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Posts;
