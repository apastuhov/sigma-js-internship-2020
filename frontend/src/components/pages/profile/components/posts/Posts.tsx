import React from 'react';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import UserPhoto from '../../../../mocks/user.png';
import { Link } from 'react-router-dom';
import './posts.scss';
import { PostsList } from '../../../../interfaces/Interface';

const Posts: React.FC<PostsList> = ({ posts }) => {
  const editPost = (postId: number) => {
    console.log(postId);
  };

  const deletePost = (postId: number) => {
    console.log(postId);
  };

  return (
    <div className="posts">
      {posts.map((postInfo, id) => {
        return (
          <Box boxShadow={2} className="post" key={id}>
            <div className="user-post">
              <Link to={`/${postInfo.user.id}`} className="user">
                <img src={UserPhoto} alt="" />
                <h3>
                  {postInfo.user.firstName} {postInfo.user.lastName}
                </h3>
                <p>
                  {postInfo.date} at {postInfo.time}
                </p>
              </Link>
              <div className="post-actions">
                <EditIcon className="action-icons" onClick={() => editPost(postInfo.user.id)} />
                <CloseIcon className="action-icons" onClick={() => deletePost(postInfo.user.id)} />
              </div>
            </div>
            <p>{postInfo.body}</p>
          </Box>
        );
      })}
    </div>
  );
};

export default Posts;
