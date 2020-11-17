import Box from '@material-ui/core/Box';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import React, { useState } from 'react';
import { sendPostToUser } from '../../../../../services/postService';
import { getUserFromStorage } from '../../../../../services/sessionStorageService';
import { ISendPostProps } from '../../../../interfaces/Interface';
import './addPostForm.scss';

const AddPostForm: React.FC<ISendPostProps> = ({ _id }) => {
  const [postValue, setPostValue] = useState<string>('');
  const [isInvalidForm, setInvalidForm] = useState<boolean>(false);
  const [loginedUser] = useState(getUserFromStorage());

  const inputValueHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostValue(event.target.value);
  };

  const hideErrorMessage = () => {
    setInvalidForm(false);
  };

  const sendPost = (event: React.FormEvent) => {
    event.preventDefault();
    if (postValue?.trim()?.length > 0) {
      const request = {
        body: postValue,
        createdBy: loginedUser._id
      };
      sendPostToUser(_id, request);
      setPostValue('');
    } else {
      setInvalidForm(true);
    }
  };

  return (
    <Box boxShadow={2} className="add-post-form">
      {isInvalidForm && <p>The value is missing</p>}
      <form action="" onSubmit={sendPost}>
        <textarea
          rows={5}
          onFocus={hideErrorMessage}
          value={postValue}
          onChange={inputValueHandleChange}
          placeholder="Add post..."
        />
        <div className="save-icon">
          <button type="submit">
            <SendSharpIcon className="send-icon" type="submit" />
          </button>
        </div>
      </form>
    </Box>
  );
};

export default AddPostForm;
