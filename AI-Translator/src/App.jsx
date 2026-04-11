import React, { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    if (!inputText) return;
    setLoading(true);
    try {
      // MyMemory Free API use kar rahe hain (English to Urdu)
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=en|ur`);
      const data = await res.json();
      setResultText(data.responseData.translatedText);
    } catch (err) {
      setResultText("Error! Dobara try karein.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-5">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">AI Translator 🤖</h1>
        
        <textarea 
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-32 mb-4"
          placeholder="Write in English..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button 
          onClick={translateText}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mb-4"
        >
          {loading ? "Translating..." : "Translate to Urdu"}
        </button>

        <div className="p-4 bg-gray-100 rounded-lg min-h-[100px] text-lg text-gray-700 border-l-4 border-blue-500">
          {resultText || "Urdu translation yahan aayegi..."}
        </div>
      </div>
    </div>
  )
}

export default App