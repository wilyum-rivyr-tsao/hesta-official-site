// app/api/video/route.ts
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface ResponseError {
  status: number;
  statusText?: string;
  body?: string;
}

const CHUNK_SIZE = 100000; // 1MB

// async function toStream() {
// const parts = videoRange.replace(/bytes=/, '').split('-');
// const start = parseInt(parts[0], 10);
// const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
// const chunksize = end - start + 1;
// const videoStream = fs.createReadStream(videoPath, { start, end });
// const headers = {
//   'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//   'Accept-Ranges': 'bytes',
//   'Content-Length': chunksize,
//   'Content-Type': 'video/mp4',
// };
// }

async function streamResponse(videoRange, fileSize, videoPath) {
  const chunkStart = Number(videoRange.replace(/\D/g, '')) || 0;
  const chunkEnd = Math.min(chunkStart + CHUNK_SIZE, fileSize - 1);

  const contentLength = chunkEnd - chunkStart + 1;

  const headers = {
    'Content-Range': `bytes ${chunkStart}-${chunkEnd}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength.toString(),
    'Content-Type': 'video/mp4',
  };

  const videoStream = fs.createReadStream(videoPath, { start: chunkStart, end: chunkEnd });

  return new Response(videoStream, { status: 206, headers });
}

export async function GET(request: NextRequest, { params }: { params: any }) {
  const { video } = params;
  const videoPath = path.join(process.cwd(), 'public', ...video);

  try {
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    console.log('fileSize', fileSize);
    const videoRange = request.headers.get('range');

    // return response;
    if (videoRange) {
      const response = streamResponse(videoRange, fileSize, videoPath);
      return response;
    } else {
      return new Response('Range header missing', { status: 400 });
      // const headers = {
      //   'Content-Length': fileSize,
      //   'Content-Type': 'video/mp4',
      // };
      // const videoStream = fs.createReadStream(videoPath);
      // const response = new Response(videoStream, { status: 206, headers });
      // return response;
    }
  } catch (error) {
    console.error(error);
  }
}
