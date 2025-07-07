import Link from 'next/link';
import React from 'react'

async function FacultyPage() {
  const fact = await fetch ("https://66ebcc352b6cf2b89c5bb9da.mockapi.io/api/js1/faculties");
  const data = await fact.json();
  
  const display = data.map((d:any)=>{
    return( 
        <Link key={d.id} href={"/faculties/"+d.id}>
        <div className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 text-white">
        <img
          src={d.FacultyImage}
          alt={d.FacultyName}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/30"
        />
        <h2 className="text-xl font-semibold text-center">{d.FacultyName}</h2>
        <p className="text-sm text-center text-gray-300">{d.FacultyEmail}</p>
      </div>
      </Link>
    );
  })
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-[#000428] via-[#004e92] to-[#000428] p-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Faculties</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{display}</div>
    </div>
    </>
  )
}

export default FacultyPage