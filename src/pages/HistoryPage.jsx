import { useState, useEffect } from 'react'
import { getAnalysisHistory, clearAnalysisHistory } from '../services/storageService'
import FoodDetails from '../components/FoodDetails'

export default function HistoryPage() {
  const [history, setHistory] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [showConfirm, setShowConfirm] = useState(false)

  useEffect(() => {
    setHistory(getAnalysisHistory())
  }, [])

  const handleClearHistory = () => {
    if (clearAnalysisHistory()) {
      setHistory([])
      setSelectedItem(null)
    }
    setShowConfirm(false)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Analysis History</h2>
        {history.length > 0 && (
          <button 
            onClick={() => setShowConfirm(true)}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Clear All
          </button>
        )}
      </div>

      {showConfirm && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="mb-3">Are you sure you want to clear all history?</p>
          <div className="flex space-x-2">
            <button
              onClick={handleClearHistory}
              className="px-3 py-1 bg-red-500 text-white rounded text-sm"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowConfirm(false)}
              className="px-3 py-1 bg-gray-200 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {history.length === 0 ? (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-gray-500">
            Your analyzed food items will appear here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {history.map((item, index) => (
              <div 
                key={index}
                onClick={() => setSelectedItem(item)}
                className={`p-3 rounded-lg cursor-pointer ${selectedItem?.timestamp === item.timestamp ? 'bg-blue-50 border border-blue-200' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
              >
                <div className="flex items-center">
                  <img 
                    src={item.image} 
                    alt="Food" 
                    className="w-12 h-12 rounded object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-medium">{item.analysis.name}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(item.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedItem && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <img 
                src={selectedItem.image} 
                alt="Selected food" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <FoodDetails foodData={selectedItem.analysis.nutritionalInfo} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}