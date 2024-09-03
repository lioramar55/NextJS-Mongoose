'use client';
import { useEffect, useState } from 'react';
import TopicList from '@/components/TopicList';

export default function Home() {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    });
    const data = await res.json();
    setTopics(data.topics);
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/topics?id=${id}`, { method: 'DELETE' });
    fetchTopics();
  };

  return (
    <>
      <TopicList topics={topics} onDelete={handleDelete} />
    </>
  );
}
