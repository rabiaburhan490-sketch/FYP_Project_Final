import React, { useState } from 'react'

function App() {
  const [skills, setSkills] = useState("");
  const [matches, setMatches] = useState([]);

  // Farzi Job Data
  const jobData = [
    { id: 1, title: "Frontend Developer", company: "Tech Solutions", skills: "react, tailwind, javascript" },
    { id: 2, title: "Python Developer", company: "AI Labs", skills: "python, django, machine learning" },
    { id: 3, title: "Full Stack Engineer", company: "Web Works", skills: "node, react, mongodb" },
    { id: 4, title: "Data Scientist", company: "Data Inc", skills: "python, sql, statistics" },
  ];

  const handleMatch = () => {
    // Simple matching logic: Check if user skill is in job skills
    const filteredJobs = jobData.filter(job => 
      job.skills.toLowerCase().includes(skills.toLowerCase()) && skills !== ""
    );
    setMatches(filteredJobs);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Smart Job Matcher</h1>
        <p className="text-gray-500 mb-6">Enter a skill to see matching jobs</p>
        
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="e.g. React or Python" 
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <button 
            onClick={handleMatch}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Match
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-lg w-full space-y-4">
        {matches.length > 0 ? (
          matches.map(job => (
            <div key={job.id} className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500 animate-fade-in">
              <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
              <p className="text-blue-500 font-medium">{job.company}</p>
              <p className="text-sm text-gray-400 mt-2">Required: {job.skills}</p>
            </div>
          ))
        ) : (
          skills && <p className="text-center text-gray-400">No jobs found for this skill.</p>
        )}
      </div>
    </div>
  )
}

export default App