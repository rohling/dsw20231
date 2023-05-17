"use client";
import { Student } from "../types";
import { useTransition } from "react";

export function StudentItem ({
    student,
    deleteStudent
  }: {
    student: Student;
    deleteStudent: (id: number) => Promise<void>;
  }) {
   
    function Vai(id:number){
      if (confirm("Confirma a exclusão"))
      deleteStudent(id);
    }
    return (      
        
            <li key={student.id}><span className="text-green-600">{student.name}</span> <input type="button" value="Diga" onClick={() => Vai(student.id)} />  </li>
          
     
    )

  } 