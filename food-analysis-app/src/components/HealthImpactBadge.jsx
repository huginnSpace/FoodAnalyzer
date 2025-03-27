export default function HealthImpactBadge({ score }) {
  const getBadgeColor = () => {
    if (score >= 7) return 'bg-green-100 text-green-800'
    if (score >= 4) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const getHealthLabel = () => {
    if (score >= 7) return 'Very Healthy'
    if (score >= 4) return 'Moderate'
    return 'Unhealthy'
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor()}`}>
      {getHealthLabel()}
      {score && (
        <span className="ml-1 text-xs opacity-80">
          ({score}/10)
        </span>
      )}
    </span>
  )
}