import React, { ReactNode } from 'react'

function AdminLayout({children, profile}:{children:ReactNode, profile:ReactNode}) {
  return (
    <>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-2xl font-bold text-center py-4 border-b border-gray-300 dark:border-gray-700">
        Admin Dashboard
      </div>

      <div className="flex flex-col md:flex-row h-full">
        {/* Profile Panel */}
        <div className="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-blue-500">
          {profile}
        </div>

        {/* Main Content */}
        <div className="w-full md:w-1/2 p-4">
          {children}
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminLayout