const HISTORY_KEY = 'foodAnalysisHistory'

export function saveAnalysisResult(result) {
  try {
    const history = getAnalysisHistory()
    const newHistory = [result, ...history].slice(0, 50) // Keep last 50 items
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory))
    return true
  } catch (error) {
    console.error('Failed to save analysis:', error)
    return false
  }
}

export function getAnalysisHistory() {
  try {
    const history = localStorage.getItem(HISTORY_KEY)
    return history ? JSON.parse(history) : []
  } catch (error) {
    console.error('Failed to load history:', error)
    return []
  }
}

export function clearAnalysisHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY)
    return true
  } catch (error) {
    console.error('Failed to clear history:', error)
    return false
  }
}