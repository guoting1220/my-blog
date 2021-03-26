import React from 'react';
import Comment from './Comment';

const CommentList = ({ postId, comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment =>
        <Comment
          key={comment.id}
          postId={postId}
          commentId={comment.id}
          text={comment.text}
        />
      )}

    </div>
  )
}

export default CommentList;