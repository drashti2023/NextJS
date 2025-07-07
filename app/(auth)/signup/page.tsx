import React from 'react'

function SignupPage() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600/80 hover:bg-blue-600 transition-colors py-2 rounded-md text-white font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignupPage