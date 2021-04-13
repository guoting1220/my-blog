import React from 'react';
import { Link } from 'react-router-dom';
import Votes from './Votes';
import './Title.css';

const Title = ({ id, title, description, votes }) => {
  return (
    <div className="Title">
      <Link exact to={`/${id}`}>
        <h5 className="Title-title">{title}</h5>
        <p>{description}</p>
      </Link>
      <div className="Title-votes">
        <Votes postId={id} votes={votes} />
      </div>
    </div>
  )
}

export default Title;