import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const topic = await request.json();
  await Topic.findByIdAndUpdate(params.id, { title: topic.title, description: topic.description });
  return NextResponse.json({ message: `Successful request`, topic }, { status: 200 });
}

export async function GET(request, { params }) {
  const topic = await Topic.findById(params.id);
  return NextResponse.json({ message: `Successful request`, topic }, { status: 200 });
}
