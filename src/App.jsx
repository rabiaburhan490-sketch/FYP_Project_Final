import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Smart Job Matcher
        </h1>
        <p className="text-gray-600 mb-6">
          Enter your skills and find best match.
        </p>
        
        <input 
          type="text" 
          placeholder="Enter skills (e.g. React, Python)" 
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Find Matches
        </button>
      </div>
    </div>
  )
}

export default App