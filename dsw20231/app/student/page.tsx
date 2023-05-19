import { redirect } from "next/navigation";
import { addStudent, getAllStudent } from "../model/StudentService";
import { Student } from "../types";
import { revalidatePath } from "next/cache";
import { NewStudentForm } from "./NewStudentForm";


export const dynamic = 'force-dynamic'

export default async function Home() {
    const students = await getAllStudent();

    return (
        <main className="mt-5">
            <NewStudentForm />
            <br></br>
            <ul className='mt-1'>
                {students?.map(student => (
                    <li key={student.id}><a href={`/student/edit?id=${student.id}`}>{student.name}</a></li>
                ))}
            </ul>
        </main>
    )
}