# Food Vision Analyzer

AI-powered web app for food nutrition analysis via image recognition. Captures food images and provides detailed nutritional breakdown via backend webhook integration.

## Key Features
- 📷 Snap or upload food photos
- 🔍 AI-powered ingredient/nutrition analysis
- 📊 Visual health impact scoring (1-10 scale)
- 🕒 Scan history with saved results
- 🔄 Real-time webhook integration

## Technical Implementation
### Frontend
- React + Vite + Tailwind CSS
- WebRTC camera capture
- Responsive mobile-first UI

### Backend Integration
- Webhook-based architecture
- Base64 image processing  
- JSON API contract:
```json
{
  "analysis": {
    "foodName": "string",
    "confidence": 0.0-1.0,
    "ingredients": ["array"],
    "nutrition": {
      "calories": number,
      "protein": number,
      "carbs": number,
      "fat": number,
      "healthScore": 1-10  
    }
  }
}
```

### Scoring System
| Metric | Range | Description |
|---------|-------|-------------|
| Confidence | 0-1 | Identification accuracy |  
| HealthScore | 1-10 | Nutrient quality rating |

## Setup Instructions
1. Configure `.env`:
```bash
VITE_ANALYSIS_WEBHOOK="your-webhook-url"
```
2. Install & run:
```bash
npm install
npm run dev
```

## Development
```bash
npm run dev    # Start dev server
npm run build  # Production build
```

## Deployment
Configured for:
- Vercel
- Netlify
- GitHub Pages