export default function IngredientList({ ingredients }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
      <ul className="space-y-1">
        {(ingredients || []).map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}