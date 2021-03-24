import React from 'react';
import Comment from './Comment';

const CommentList = ({ postId, comments }) => {
  return (
    <div className="CommentList">
      {Object.keys(comments).map(id =>
        <Comment
          key={id}
          id={id}
          postId={postId}
          commentContent={comments[id]}
        />
      )}

    </div>
  )
}

export default CommentList;