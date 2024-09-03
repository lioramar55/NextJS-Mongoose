'use client';

import { useState, useEffect } from 'react';

export default function TopicForm({ topic, handleSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (topic) {
      setTitle(topic.title || '');
      setDescription(topic.description || '');
    }
  }, [topic]);

  return (
    <div className="topic-topiform">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          handleSubmit(title, description);
        }}
      >
        <div className="w-full mb-6">
          <label className="block uppercase tracking-wide text-slate-700 text-sm font-bold mb-2">Topic Title</label>
          <input
            className="appearance-none block w-full bg-gray-100 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Your Topic Title..."
            onInput={(ev) => {
              setTitle(ev.target.value);
            }}
            value={title}
          />
        </div>
        <div className="w-full mb-6">
          <label className="block uppercase tracking-wide text-slate-700 text-sm font-bold mb-2">
            Topic Description
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Your Topic Description..."
            onInput={(ev) => {
              setDescription(ev.target.value);
            }}
            value={description}
          />
        </div>
        <button
          className="bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          {topic ? 'Update' : 'Save'} Topic
        </button>
      </form>
    </div>
  );
}
