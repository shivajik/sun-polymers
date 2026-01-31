# Sun Polymers Website

## Overview
This is the Sun Polymers company website - a plastic injection moulding solutions company based in Jalna, Maharashtra, India. The site showcases their products, services, and company information.

## Project Architecture
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **Animation**: Framer Motion
- **State Management**: TanStack React Query

## Directory Structure
```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # Static data files
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── assets/         # Static assets
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Development
- Run `npm run dev` to start the development server on port 5000
- Run `npm run build` to build for production

## Deployment
This project is configured for static deployment. The build output goes to the `dist` directory.

## Recent Changes
- Migrated from Lovable to Replit environment
- Updated Vite config to use port 5000 with allowedHosts enabled
- Configured for static deployment
