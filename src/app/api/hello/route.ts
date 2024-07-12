// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}
