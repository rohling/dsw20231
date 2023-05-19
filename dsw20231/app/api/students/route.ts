import { addStudent, getAllStudent } from '@/app/model/StudentService';
import { NextResponse } from 'next/server';

export async function GET() {
  const studentes = await getAllStudent()
  return NextResponse.json(studentes);
}
export async function POST(
  request: Request
) {
  const body = await request.json();
  console.log(body)

  await addStudent(body.name, body.email)
  return NextResponse.json({ success: "ok" });
}



