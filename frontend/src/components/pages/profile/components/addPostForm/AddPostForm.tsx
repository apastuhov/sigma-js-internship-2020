import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import './addPostForm.scss';

const AddPostForm: React.FC = () => {
  const [postValue, setPostValue] = useState<string>('');

  const inputValueHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostValue(event.target.value);
  };

  const sendPost = (event: React.FormEvent) => {
    event.preventDefault();
    if (postValue === '' || postValue === ' ') {
      alert('Please write something');
    } else {
      console.log(postValue);
      setPostValue('');
    }
  };

  return (
    <Box boxShadow={2} className="add-post-form">
      <form action="" onSubmit={sendPost}>
        <textarea value={postValue} onChange={inputValueHandleChange} placeholder="Add post..." />
        <div className="save-icon">
          <input type="submit" />
          <SendSharpIcon className="send-icon" type="submit" />
        </div>
      </form>
    </Box>
  );
};

export default AddPostForm;
