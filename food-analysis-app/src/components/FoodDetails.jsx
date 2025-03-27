export default function FoodDetails({ foodData }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{foodData?.name || 'Food Item'}</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-medium text-gray-500">Serving Size</h4>
          <p>{foodData?.servingSize || '100g'}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-500">Calories</h4>
          <p>{foodData?.calories || '--'} kcal</p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-500 mb-1">Nutritional Values</h4>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Protein</span>
            <span>{foodData?.protein || '--'}g</span>
          </div>
          <div className="flex justify-between">
            <span>Carbs</span>
            <span>{foodData?.carbs || '--'}g</span>
          </div>
          <div className="flex justify-between">
            <span>Fat</span>
            <span>{foodData?.fat || '--'}g</span>
          </div>
        </div>
      </div>
    </div>
  )
}