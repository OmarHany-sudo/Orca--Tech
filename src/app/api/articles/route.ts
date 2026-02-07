import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const BLOG_PATH = path.join(process.cwd(), 'content/blog-en.json');

export async function GET() {
  const data = fs.readFileSync(BLOG_PATH, 'utf-8');
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = JSON.parse(fs.readFileSync(BLOG_PATH, 'utf-8'));

  data.push(body);

  fs.writeFileSync(BLOG_PATH, JSON.stringify(data, null, 2));
  return NextResponse.json({ success: true });
}