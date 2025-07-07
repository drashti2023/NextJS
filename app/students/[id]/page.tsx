import Link from 'next/link';
import React from 'react'

async function StudentDetail({params}:{params:Promise<{id:number}>}) {
    const {id} = await params;
    //console.log(params);
    const stu = await fetch("https://66ebcc352b6cf2b89c5bb9da.mockapi.io/api/js1/students/"+id);
    const data = await stu.json();
  return (
    <>
     <div className="min-h-screen p-10 text-white">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
        <img src={data.StudentImage} alt={data.StudentName} className="w-32 h-32 object-cover rounded-full mb-4" />
        <h1 className="text-2xl font-bold">{data.StudentName}</h1>
        <p><strong>DOB:</strong> {new Date(data.StudentDOB).toLocaleDateString()}</p>
        <p><strong>Country:</strong> {data.Country}</p>
        <p className="mt-2"><strong>Job Title:</strong> {data.StudentDescription}</p>

        <div className="mt-6">
          <Link href="/students">
            <span className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
              ← Back to Students
            </span>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default StudentDetail