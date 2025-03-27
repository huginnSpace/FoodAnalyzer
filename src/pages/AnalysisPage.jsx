import { useState } from 'react'
import CameraCapture from '../components/CameraCapture'
import FoodDetails from '../components/FoodDetails'
import IngredientList from '../components/IngredientList'
import HealthImpactBadge from '../components/HealthImpactBadge'
import { analyzeFoodImage } from '../services/aiAnalysisService'
import { saveAnalysisResult } from '../services/storageService'

export default function AnalysisPage() {
  const [capturedImage, setCapturedImage] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState(null)

  const handleAnalyze = async () => {
    try {
      setIsAnalyzing(true)
      setError(null)
      const result = await analyzeFoodImage(capturedImage)
      setAnalysisResult(result.foodItems[0])
      saveAnalysisResult({
        image: capturedImage,
        analysis: result.foodItems[0],
        timestamp: new Date().toISOString()
      })
    } catch (err) {
      setError('Analysis failed. Please try again.')
      console.error(err)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Analyze Food</h2>
      
      {!capturedImage ? (
        <CameraCapture onCapture={setCapturedImage} />
      ) : (
        <div className="space-y-4">
          <img 
            src={capturedImage} 
            alt="Captured food" 
            className="rounded-lg w-full"
          />

          {analysisResult ? (
            <div className="space-y-4">
              <div className="flex items-center">
                <h3 className="text-xl font-semibold mr-2">
                  {analysisResult.name}
                </h3>
                <HealthImpactBadge score={analysisResult.nutritionalInfo.healthScore} />
              </div>
              <FoodDetails foodData={analysisResult.nutritionalInfo} />
              <IngredientList ingredients={analysisResult.ingredients} />
            </div>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={() => setCapturedImage(null)}
                className="flex-1 bg-gray-200 px-4 py-2 rounded-lg"
                disabled={isAnalyzing}
              >
                Retake
              </button>
              <button
                onClick={handleAnalyze}
                className="flex-1 bg-primary text-white px-4 py-2 rounded-lg"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze'}
              </button>
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg">
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  )
}