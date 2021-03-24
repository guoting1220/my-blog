import React from 'react';
import Title from './Title';
import { useSelector } from 'react-redux';
import './TitleList.css';


const TitleList = () => {
  const titles = useSelector(store => store.titles);

  return (
    <div className="TitleList">
      {Object.keys(titles).map(id =>
        <Title
          key={id}
          id={id}
          title={titles[id].title}
          description={titles[id].description}
        />
      )}
    </div>
  )

}

export default TitleList;