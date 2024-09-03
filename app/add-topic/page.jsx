'use client';
import TopicForm from '@/components/TopicForm';
import { useRouter } from 'next/navigation';

export default function AddTopic() {
  const router = useRouter();

  const handleSubmit = async (title, description) => {
    if (!title || !description) {
      alert('Title and description are required.');
      return;
    }

    try {
      const data = await fetch('/api/topics', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
      });
      if (data.ok) router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return <TopicForm handleSubmit={handleSubmit} />;
}
