import React from 'react';
import Comment from './Comment';

const Comments = [
  {
    name: '김영환',
    comment: '안녕하세요, 융소입니다',
  },
  {
    name: '유진',
    comment: '안녕하세요, 유진입니다',
  },
];

function CommentList(props) {
  return (
    <div>
      {Comments.map(comment => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
