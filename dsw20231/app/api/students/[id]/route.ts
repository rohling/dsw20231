import {getStudentById, updateStudentById} from '@/app/model/StudentService';
import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

 export async function DELETE(request: Request, {params}:any){
  console.log(params)
  const client = await db.connect(); 
  const {rows} = await client.sql`DELETE FROM Student where id=(${params.id})`;
    return NextResponse.json({ success: "ok" });

} 

export async function GET(request: Request, {params}:any){
  console.log(params)
 const student= await getStudentById(params.id)
 return NextResponse.json(student)
}

export async function PUT(request: Request, {params}:any){
  console.log(params)
  const body = await request.json();
  updateStudentById(params.id, body.name, body.email) 
   return NextResponse.json({ success: "ok" });

} 