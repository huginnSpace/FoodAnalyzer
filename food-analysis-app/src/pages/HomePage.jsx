import { Link } from 'react-router-dom'  

export default function HomePage() {  
  return (  
    <div className="text-center py-12 px-4">  
      <h1 className="text-3xl font-bold mb-6">Food Nutrition Analyzer</h1>  
      <p className="mb-8 text-lg max-w-2xl mx-auto">  
        Analyze your food's nutritional value with AI-powered image recognition  
      </p>  
      <Link  
        to="/analyze"  
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition"  
      >  
        Start Analyzing  
      </Link>  
    </div>  
  )  
}