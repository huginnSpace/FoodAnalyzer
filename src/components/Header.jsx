import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-primary">
            Food Analyzer
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/analyze" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
            >
              Analyze
            </Link>
            <Link 
              to="/history" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
            >
              History
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}