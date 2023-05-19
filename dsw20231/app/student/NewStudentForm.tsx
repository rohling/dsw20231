import { revalidatePath } from "next/cache";
import { addStudent } from "../model/StudentService";
export function NewStudentForm(){
    async function saveStudent(formData: FormData){
        'use server';
        console.log("Server")
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        await addStudent(name, email)
        revalidatePath('/student')
    
    };
    return (
        <form action={saveStudent}>
            <input type="text" name="name" placeholder="Digite o Nome" /> <br></br>
            <input type="text" name="email" placeholder="Digite o Email" />
            <button type="submit">Salvar</button>     
    
        </form>
    )
}

