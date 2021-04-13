import React from 'react';
import { useDispatch } from 'react-redux';
import './Votes.css';
import { sendVoteToAPI, getPostFromAPI } from '../actions/postsActions';


const Votes = ({ postId, votes }) => {
  const dispatch = useDispatch();

  const vote = async (direction) => {
    await dispatch(getPostFromAPI(postId));
    await dispatch(sendVoteToAPI(postId, direction));
  }

  const voteUp = () => {
    vote("up");
  }

  const voteDown = () => {
    vote("down");
  }

  return (
    <div className="Votes">
      <span className="vote-count">{votes} votes </span>
      <i className="fas fa-thumbs-up add-vote" onClick={voteUp}></i>
      <i className="fas fa-thumbs-down cut-vote" onClick={voteDown}></i>
    </div>
  )
}

export default Votes;