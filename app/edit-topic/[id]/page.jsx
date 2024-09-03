'use client';
import TopicForm from '@/components/TopicForm';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
async function getTopicById(id) {
  try {
    const data = await fetch(`/api/topics/${id}`);
    if (!data.ok) throw new Error('Error with getting the topic by id');
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}
async function updateTopic(id, topic) {
  try {
    const data = await fetch(`/api/topics/${id}`, { method: 'PUT', body: JSON.stringify(topic) });
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}

export default function EditTopic({ params }) {
  const [topic, setTopic] = useState(null);
  const router = useRouter();

  const { id } = params;

  useEffect(() => {
    const fetchTopic = async () => {
      const data = await getTopicById(id);
      setTopic(data.topic);
    };

    fetchTopic();
  }, []);

  const handleSubmit = async (title, description) => {
    if (!title || !description) {
      alert('Title and description are required.');
      return;
    }

    try {
      const data = await fetch(`/api/topics/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...topic, title, description }),
      });
      if (data.ok) router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return <TopicForm handleSubmit={handleSubmit} topic={topic} />;
}
