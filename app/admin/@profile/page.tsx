import React from 'react'
import wait from 'wait'

async function ProfilePage() {
    await wait(5000)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-indigo-800 to-purple-900 text-white">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 mb-4" />
          <h2 className="text-2xl font-bold mb-1">Drashti Rathod</h2>
          <p className="text-sm text-gray-300 mb-6">Software Engineer</p>

          <div className="space-y-2 text-left text-sm text-gray-200">
            <p><span className="font-semibold text-white">Email:</span> dr@example.com</p>
            <p><span className="font-semibold text-white">Location:</span> New York, USA</p>
            <p><span className="font-semibold text-white">Joined:</span> Jan 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage