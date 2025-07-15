# Digital Mashwarah - Digital Marketing Agency Website

## Overview

Digital Mashwarah is a professional digital marketing agency website built with modern web technologies. The application features a React-based frontend with TypeScript, a Node.js/Express backend, and PostgreSQL database integration using Drizzle ORM. The site includes comprehensive content protection, modern UI components, and a responsive design optimized for digital marketing services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom theme variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Content Protection**: Custom implementation preventing right-click, copy/paste, and screenshot functionality

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for schema migrations
- **Session Storage**: PostgreSQL-based session storage
- **Development Storage**: In-memory storage fallback for development

## Key Components

### Client-Side Components
1. **Layout System**: Header, Footer, and floating action buttons
2. **Page Sections**: Hero, About, Services, Portfolio, Testimonials, Blog, Contact
3. **Interactive Elements**: Animated counters, intersection observers, carousels
4. **Form Handling**: Contact forms with validation
5. **Content Protection**: Comprehensive client-side protection mechanisms

### Server-Side Components
1. **API Routes**: RESTful API structure with Express router
2. **Database Layer**: Abstract storage interface with concrete implementations
3. **Authentication**: User management system ready for expansion
4. **Static Assets**: Vite-integrated static file serving

### UI Component Library
- Complete shadcn/ui implementation
- Radix UI primitives for accessibility
- Custom themed components matching brand colors
- Responsive design patterns

## Data Flow

### Request Flow
1. Client requests → Express server → API routes
2. API routes → Storage layer → Database operations
3. Database responses → Storage layer → API responses → Client

### Development Flow
1. Vite dev server serves React application
2. Express server handles API requests
3. Hot reload for both frontend and backend changes
4. In-memory storage for development testing

### Production Flow
1. Vite builds optimized React bundle
2. Express serves static files and API routes
3. PostgreSQL handles persistent data storage
4. Session management via database

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Minimalist routing library

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **tsx**: TypeScript execution
- **esbuild**: JavaScript bundler

### UI Dependencies
- **lucide-react**: Icon library
- **class-variance-authority**: Type-safe CSS variants
- **tailwind-merge**: Tailwind class merging utility

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit pushes schema changes
4. **Asset Optimization**: Vite optimizes static assets

### Environment Configuration
- **Development**: Local development with hot reload
- **Production**: Optimized builds with static file serving
- **Database**: Environment-specific PostgreSQL connections

### Content Protection Strategy
- Client-side protection against common content theft
- Disabled right-click context menus
- Keyboard shortcut blocking (F12, Ctrl+U, etc.)
- Text selection prevention
- Drag and drop disabling
- Clipboard clearing mechanisms

## Changelog

Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Major upgrade with premium features:
  - Added sticky navigation with scroll effects
  - Enhanced hero section with animated particles and platform logos
  - Improved team section with hover overlays showing specialties
  - Added Industries We Serve section (Real Estate, E-Commerce, Healthcare, Education, Food & Restaurants)
  - Enhanced portfolio with clickable modals showing detailed case studies
  - Added client logos section under portfolio
  - Implemented lead magnet popup for email capture (appears after 30s or 50% scroll)
  - Enhanced content protection with advanced features
  - Added SEO meta tags, Open Graph, and Schema markup
  - Mobile optimization for spacing and floating buttons
- July 10, 2025. Recent improvements:
  - Removed Stats section (Clients Served, Campaigns Completed, ROI %) completely from homepage
  - Fixed mobile responsiveness by hiding analytics animation on small screens to prevent overlap with SEO & SEM section
- July 12, 2025. About page implementation:
  - Created dedicated About page with comprehensive company information
  - Added About page to navigation (header and footer)
  - Includes company story, team members, values, mission, and statistics
  - Updated routing and navigation to support dedicated About page
- July 15, 2025. About page redesign with modern storytelling layout:
  - Redesigned hero section with bold heading, gradient background, and "Explore Our Journey" CTA
  - Converted journey section into visual timeline format with 8 key milestones from 2018-2025
  - Added dedicated Mission, Vision, and Core Values section with colorful icons
  - Enhanced team section with circular profile images and LinkedIn links
  - Implemented alternating light blue and white backgrounds for better visual flow
  - Added smooth scroll animations and hover effects throughout
  - Maintained mobile responsiveness across all sections

## User Preferences

Preferred communication style: Simple, everyday language.