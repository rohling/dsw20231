import {updateById} from '@/app/model/StudentService';
import {FC, use} from "react"
import { db } from '@vercel/postgres';
//import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

// É necessário incluir request: Request  para conseguir pegar os params:any, se tirar não pega... vira um request: Request
 export async function DELETE(request: Request, {params}:any){
  console.log(params)
  const client = await db.connect(); 
  const {rows} = await client.sql`DELETE FROM Student where id=(${params.id})`;
  //console.log(rows)
  //const body = await request.json();
    
    return NextResponse.json({ success: "ok" });
//    return <div>page</div>
} 

export async function PUT(request: Request, {params}:any){
  console.log(params)
  const body = await request.json();
  updateById(params.id, body.name, body.email)
  //const client = await db.connect(); 
  //await client.sql`UPDATE student SET name = ${body.name}, email=${body.name} where id=(${params.id})`;
  //console.log(rows)
  //const body = await request.json();    
   return NextResponse.json({ success: "ok" });
//    return <div>page</div>
} 
//Poderia ser usado um UPTADE -- PUT aqui.. pois pega ID e tb algo com GetByID --> com GET


 //const page: FC = (request: Request) =>{
 //   console.log(request)
 //   return <div>page</div>
//}
//export default page


//const page = async (request: Request) =>{
  //     console.log(request)
       //return <div>page</div>
   //    return NextResponse.json({ success: "ok" });
   //}
   //export default page


   
//export default function Page(params) {
 // const body = await request.json();
  //console.log (request)
  //const data = await getData(body);
  //const client = await db.connect(); 
 // const {rows} = await client.sql`INSERT INTO Student (name, email) VALUES (${body.name}, ${body.email})`
  //return NextResponse.json({ success: "ok" });
//}