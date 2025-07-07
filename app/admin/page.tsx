import React from 'react';
import wait from 'wait';

async function AdminPage() {
    await wait(2000)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-4 rounded-lg border border-white/20 shadow-inner">
            <h2 className="text-xl font-semibold mb-2">User Management</h2>
            <p className="text-sm text-gray-200">View, edit, and manage user accounts.</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg border border-white/20 shadow-inner">
            <h2 className="text-xl font-semibold mb-2">Site Analytics</h2>
            <p className="text-sm text-gray-200">Monitor performance and user activity.</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg border border-white/20 shadow-inner">
            <h2 className="text-xl font-semibold mb-2">Content Control</h2>
            <p className="text-sm text-gray-200">Manage posts, pages, and uploads.</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg border border-white/20 shadow-inner">
            <h2 className="text-xl font-semibold mb-2">System Logs</h2>
            <p className="text-sm text-gray-200">View logs and monitor errors.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage