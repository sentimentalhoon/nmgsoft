# NMGSOFT Project

This project is the official homepage for **NMGSOFT**, a software development company specializing in web and app solutions.

## Overview
The current focus of the project is branding and visual identity. We have implemented a comprehensive logo showcase featuring both high-fidelity AI-generated concepts and a vast collection of CSS-based variations.

## Key Features

### 1. AI Brand Concepts
A curated selection of high-quality logo designs generated using advanced AI models.
- **Styles**: Modern Minimalist, Futuristic Tech, Luxury Serif, Abstract Icon, Premium Corporate.
- **Variations**: 
  - **NMGSOFT**: 7 unique high-resolution variants.
  - **NMyeongGaSoft**: 2 Premium Corporate variants.

### 2. Comprehensive Logo Collection
A massive library of 100 programmatic logo variations created with pure CSS and SVG.
- **Scope**: 5 Brand Names × 20 Distinct Styles = 100 Variations.
- **Brand Names**:
  1. NMGSOFT
  2. NMyeongGaSoft
  3. NMG
  4. 앤명가소프트 (Korean)
  5. 앤명가 (Korean)
- **Styles**: Minimalist, Bold, Cyberpunk, Retro, Handwritten, 3D, Gradient, Neon, Glitch, and more.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (Zero-runtime overhead)
- **Design System**: Mobile-first responsive design (Max-width 640px optimization)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Running the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### 1. Prerequisites
- Docker & Docker Compose installed on the server.
- The `infrastructure` project setup for Nginx Gateway.

### 2. Infrastructure Setup
1. Go to `infrastructure` directory.
2. Update `.env` (or run `./setup-env.sh`) to include `NMGSOFT_DOMAIN=nmgsoft.duckdns.org`.
3. If this is the first time, run `./init-ssl.sh` to generate certificates.
4. If certificates exist, run `./apply-nginx-config.sh` to generate the Nginx config.

### 3. Deploy NMGSOFT
1. Navigate to `nmgsoft/nmg` directory on the server.
2. Build and start the container:
   ```bash
   docker compose -f docker-compose.prod.yml up -d --build
   ```
3. The site should be accessible at https://nmgsoft.duckdns.org