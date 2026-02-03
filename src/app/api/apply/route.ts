import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import GuideApplication from '@/models/GuideApplication';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const application = await GuideApplication.create(body);

    return NextResponse.json({ success: true, data: application }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}
