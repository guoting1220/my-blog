import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { savePost } from '../actions/postsActions';
import { saveTitle } from '../actions/titlesActions';
import './PostForm.css';

const PostForm = ({ initialFormData, id = null, reDirect }) => {
  const [formData, setFormData] = useState({...initialFormData});
  const dispatch = useDispatch();
  const addOrUpdatePost = (post) => dispatch(savePost(post));
  const addOrUpdateTitle = (title) => dispatch(saveTitle(title));


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPostData = {
      ...formData,
      id: id || uuid()
    }

    const { body, ...newTitleData } = newPostData;

    addOrUpdatePost(newPostData);
    addOrUpdateTitle(newTitleData);
    reDirect();
    // setFormData(INITIAL_STATE); 
  }

  return (
    <div className="PostForm">
      {/* <h2>New Post</h2> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={FormData.title}
            onChange={handleChange}
          >
          </input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={FormData.description}
            onChange={handleChange}
          >
          </input>
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            name="body"
            value={FormData.body}
            rows={10}
            onChange={handleChange}
          >
          </textarea>
        </div>
        <button id="submitBtn" type="submit">Save</button>
        <button id="cancelBtn" onClick={reDirect}>Cancel</button>
      </form>
    </div>
  )
}

PostForm.defaultProps = {
  initialFormData: { title: "", description: "", body: "" },
};

export default PostForm;