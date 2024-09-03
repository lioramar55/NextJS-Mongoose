'use client';
import Link from 'next/link';
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi';

export default function TopicItem({ topic, onDelete }) {
  return (
    <div className="topic-item flex justify-between items-start my-2 p-4 border border-slate-300">
      <div className="topic-item__details">
        <div className="text-xl font-semibold">{topic.title}</div>
        <div>{topic.description}</div>
      </div>
      <div className="topic-item__actions flex gap-2">
        <Link href={`/edit-topic/${topic._id}`}>
          <HiPencilAlt cursor={'pointer'} size={24} />
        </Link>
        <button onClick={() => onDelete(topic._id)}>
          <HiOutlineTrash cursor={'pointer'} color="red" size={24} />
        </button>
      </div>
    </div>
  );
}
