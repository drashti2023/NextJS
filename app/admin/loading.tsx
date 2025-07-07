import React from 'react'

function LoadingPage() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400 text-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-white border-dashed rounded-full animate-spin"></div>
        <p className="text-lg font-semibold tracking-wide">Loading AdminPage, please wait...</p>
      </div>
    </div>
  )
}

export default LoadingPage