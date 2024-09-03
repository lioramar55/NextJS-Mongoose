import Link from 'next/link';

export function Navbar() {
  return (
    <div className="flex justify-between items-center px-2 py-2 bg-slate-400">
      <Link href={'/'} className="text-white font-bold text-2xl">
        MyTopics
      </Link>
      <Link href={'/add-topic'} className="bg-white py-2 px-4 rounded-md">
        Create Topic
      </Link>
    </div>
  );
}
