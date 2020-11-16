import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import PostAddIcon from '@material-ui/icons/PostAdd';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IPostsProps } from '../../../../interfaces/Interface';
import './posts.scss';

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const sortedPosts = useMemo(() => {
    return [...posts].reverse();
  }, [posts]);

  const editPost = (postId: string) => {
    console.log(postId);
  };

  const deletePost = (postId: string) => {
    console.log(postId);
  };

  return (
    <>
      {sortedPosts.length === 0 ? (
        <div className="empty-posts">
          <PostAddIcon className="posts-icon" />
          <h3>
            This user has no posts yet
            <br />
            You can be the first)
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
                  <div className="post-actions">
                    <EditIcon className="action-icons" onClick={() => editPost(postInfo.createdBy._id)} />
                    <CloseIcon className="action-icons" onClick={() => deletePost(postInfo.createdBy._id)} />
                  </div>
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
