
import { db } from '@vercel/postgres';
import { Student } from '../types';

export async function getStudentById(id: string) {
  const client = await db.connect();
  const { rows: students }= await client.sql`SELECT * FROM Student where id=(${id})`;
  return students[0];
}
export async function getAllStudent(){
  const client = await db.connect(); 
  const { rows: students } = await client.sql`SELECT * FROM Student ;`;
  return students as Array<Student>;
}

export async function addStudent(name: string, email: string) {
  const client = await db.connect();
  client.sql`INSERT INTO Student (name, email) VALUES (${name}, ${email})`
  //const {rows: student} = await client.sql`INSERT INTO Student (name, email) VALUES (${name}, ${email}) RETURNING id`
  //console.log(student[0].id)
  
}
export async function deleteStudentById(id: string) {
  const client = await db.connect();
  await client.sql`DELETE FROM Student where id=(${id})`;
}

export async function updateStudentById(id: string, name: string, email:string){
  const client = await db.connect();
  client.sql`UPDATE Student SET name=(${name}), email=(${email}) where id=(${id}) `
}