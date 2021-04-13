import React from 'react';
import TitleList from './TitleList';
import './Home.css';


const Home = () => {
  return (
    <div className="Home">
      <p>Welcome to <b>Microblog</b>, our inovative site for communicating on the information superhighway.</p>
      <TitleList />
    </div>
  )
}

export default Home;