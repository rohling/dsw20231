
import { db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { Student } from '../types';

export async function getStudentById(id: string) {
  const client = await db.connect();
  const { rows: students }= await client.sql`SELECT * FROM Student where id=(${id})`;
  return students[0];
}
export async function getAllStudent(){
  const client = await db.connect(); 
  const { rows: students } = await client.sql`SELECT * FROM Student ;`;
  //console.log(rows)
  //return JSON.stringify(rows)
  
  return students as Array<Student>;
}

export async function addStudent(name: string, email: string) {
  const client = await db.connect();
  client.sql`INSERT INTO Student (name, email) VALUES (${name}, ${email})`
  //revalidatePath('/student')
 // redirect('/student');
 //return "ok"
  //redirect(`/blog/${post.slug}`);
}
export async function deleteStudentById(id: string) {
  const client = await db.connect();
  await client.sql`DELETE FROM Student where id=(${id})`;
 // revalidatePath('/student')
}

export async function updateById(id: string, name: string, email:string){
  const client = await db.connect();
  client.sql`UPDATE Student SET name=(${name}), email=(${email}) where id=(${id}) `
}