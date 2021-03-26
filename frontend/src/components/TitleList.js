import React, { useEffect, useState } from 'react';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux';
import './TitleList.css';
import {fetchTitlesFromAPI} from '../actions/titlesActions';


const TitleList = () => {
  const titles = useSelector(store => store.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchTitles = async () => {
      await dispatch(fetchTitlesFromAPI());
      setIsLoading(false);
    }

    if (isLoading) fetchTitles();
    
  }, [dispatch, isLoading]);

  if (isLoading) return <b>Loading ..</b>

  return (
    <div className="TitleList">
      {titles.map(title =>
        <Title
          key={title.id}
          id={title.id}
          title={title.title}
          description={title.description}
        />
      )}
    </div>
  )

}

export default TitleList;