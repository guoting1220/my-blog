import React from 'react';
import {Link} from 'react-router-dom';
import './Title.css';

const Title = ({ id, title, description }) => {
  return (
    <div className="Title">
      <Link exact to={`/${id}`}>
        <h5 className="Title-title">{title}</h5>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export default Title;