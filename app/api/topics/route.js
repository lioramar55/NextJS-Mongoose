import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const topics = await Topic.find({});
  return NextResponse.json({ message: `Successfuly queried ${topics.length} topics`, topics }, { status: 200 });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await Topic.create({ title, description });
  return NextResponse.json({ message: 'Topic Created' }, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  const res = await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Topic deleted' }, { status: 200 });
}
