# Food Nutrition Analyzer

![Project Screenshot](public/screenshot.png) *(Add screenshot after first run)*

A mobile-first web application that analyzes food nutrition using AI image recognition.

## Features

- 📷 Camera capture interface with instant preview
- 🍎 AI-powered food recognition and analysis  
- 📊 Detailed nutritional information display
- 📅 Food analysis history tracking
- 📱 Responsive design for all devices

## Technical Stack  

- Frontend: React.js
- Build Tool: Vite  
- Styling: Tailwind CSS
- AI Integration: Google Cloud Vision API
- State Management: React Hooks  
- Routing: React Router

## Getting Started

### Prerequisites

Gesture
- Node.js v18+
- Google Cloud Vision API credentials
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Add your Google Cloud credentials to .env

### Development

```bash
npm run dev
```

### Building for Production

```bash  
npm run build
```

## Project Structure

```
food-analysis-app/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages  
│   ├── services/        # API and storage services
│   └── utils/           # Helper functions
├── public/              # Static assets
└── tests/               # Test files
```

## Configuration

Edit `vite.config.js` and `tailwind.config.js` for custom setup.

## Deployment

The app can be deployed to any static hosting service:
- Vercel
- Netlify  
- GitHub Pages

## Contributing

1. Fork the project  
2. Create your feature branch
3. Commit your changes  
4. Push to the branch
5. Open a pull request

## License

MIT