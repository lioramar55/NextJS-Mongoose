import React from 'react';
import TopicItem from './TopicItem';

function TopicList({ topics, onDelete }) {
  return <>{topics && topics.map((topic) => <TopicItem topic={topic} onDelete={onDelete} key={topic._id} />)}</>;
}

export default TopicList;
