import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AnalysisPage from './pages/AnalysisPage'
import HistoryPage from './pages/HistoryPage'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="analyze" element={<AnalysisPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default App