import Link from 'next/link';
import React from 'react'

async function FacultyDetail({params}:{params:Promise<{id:number}>}) {
    const {id} = await params;
    const stu = await fetch("https://66ebcc352b6cf2b89c5bb9da.mockapi.io/api/js1/faculties/"+id);
    const data = await stu.json();
  return (
    <>
     <div className="min-h-screen p-10 text-white">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
        <img src={data.FacultyImage} alt={data.FacultyName} className="w-32 h-32 object-cover rounded-full mb-4" />
        <h1 className="text-2xl font-bold">{data.FacultyName}</h1>
        <p><strong>Email:</strong> {data.FacultyEmail}</p>
        <p className="mt-2"><strong>Faculty Title:</strong> {data.FacultyTitle}</p>

        <div className="mt-6">
          <Link href="/faculties">
            <span className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
              ← Back to Faculties
            </span>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default FacultyDetail