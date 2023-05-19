import { addStudent, getAllStudent } from '@/app/model/StudentService';
import { db } from '@vercel/postgres';
//import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';
//import { NextApiRequest, NextApiResponse } from 'next';
//import type { NextApiRequest, NextApiResponse } from 'next'
//export async function GET(request: NextApiRequest,
// response: NextApiResponse){
// const client = await db.connect(); 
// const students = await client.sql`SELECT * FROM Student ;`;
// console.log(NextResponse.json(students))
//return NextResponse.json(students)
// response.status(200).json({ success: "ok" })
//return (response.status(200).json('test'))

//}
export async function GET() {
  //const client = await db.connect(); 
  //const {rows} = await client.sql`SELECT * FROM Student ;`;
  // const {rows}  = await sql`SELECT * FROM Student ;`;
  const studentes = await getAllStudent()
  return NextResponse.json(studentes);

}
export async function POST(
  request: Request
) {
  const body = await request.json();
  console.log(body)
  //const client = await db.connect(); 
  //const {rows} = await client.sql`INSERT INTO Student (name, email) VALUES (${body.name}, ${body.email})`
  addStudent(body.name, body.email)
  return NextResponse.json({ success: "ok" });
}



