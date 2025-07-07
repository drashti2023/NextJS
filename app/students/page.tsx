import Link from 'next/link';
import React from 'react'

async function StudentPage() {
  const stu = await fetch ("https://66ebcc352b6cf2b89c5bb9da.mockapi.io/api/js1/students");
  const data = await stu.json();
  
  const display = data.map((d:any)=>{
    return( 
        <Link key={d.id} href={"/students/"+d.id}>
        <div className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 text-white">
        <img
          src={d.StudentImage}
          alt={d.StudentName}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/30"
        />
        <h2 className="text-xl font-semibold text-center">{d.StudentName}</h2>
        <p className="text-sm text-center text-gray-300">{d.Country}</p>
        <p className="text-sm text-center text-gray-400 mb-4">
          DOB: {new Date(d.StudentDOB).toLocaleDateString()}
        </p>
        {/* <p className="text-sm text-gray-200 text-justify">{d.StudentDescription}</p> */}
      </div>
      </Link>
    );
  })
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#1e0032] via-[#3b0060] to-[#610094] p-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Alumini Students</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{display}</div>
    </div>
    </>
  )
}

export default StudentPage