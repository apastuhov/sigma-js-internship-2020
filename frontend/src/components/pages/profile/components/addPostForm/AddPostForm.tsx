import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import './addPostForm.scss';

const AddPostForm: React.FC = () => {
  const [postValue, setPostValue] = useState<string>('');
  const [isInvalidForm, setInvalidForm] = useState<boolean>(false);

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
        userId: 11,
        photoUrl: 'photoUrl',
        firtName: 'firstName',
        lastName: 'lastName',
        postBody: postValue,
        date: '21.10.97'
      };
      console.log(JSON.stringify(request));
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
