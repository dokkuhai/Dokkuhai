# Personal Portfolio Website

## Overview

This is a personal portfolio website for a fullstack developer, designed to showcase skills, projects, and achievements. The website is built as a single-page application using vanilla HTML, CSS, and JavaScript, featuring a modern, responsive design with dark/light theme support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Architecture Pattern**: Single-page application with component-based sections
- **Styling Approach**: CSS Custom Properties (CSS Variables) for theme management
- **Responsive Design**: Mobile-first approach with flexible layouts

### Design System
- **Theme System**: Dynamic light/dark mode toggle with localStorage persistence
- **Color Scheme**: Cyan primary (#00bcd4), coral secondary (#ff6b6b), with theme-aware variants
- **Typography**: Inter font family with multiple weights for hierarchy
- **Component Library**: Custom CSS components for consistent styling

## Key Components

### Navigation System
- **Sticky Navigation**: Fixed header with smooth scrolling links
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Theme Toggle**: Dark/light mode switcher with icon updates

### Content Sections
- **Hero Section**: Introduction with typing animation effect
- **About Section**: Personal introduction and background
- **University Section**: Educational background
- **Skills Section**: Technical skills showcase
- **Projects Section**: Portfolio project gallery
- **Certificates Section**: Achievement and certification display
- **Contact Section**: Contact information and social links

### Interactive Features
- **Typing Animation**: Dynamic text animation for engaging user experience
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Responsive Design**: Mobile-friendly layout with breakpoint adaptations

## Data Flow

### Client-Side State Management
1. **Theme Preference**: Stored in localStorage, retrieved on page load
2. **Navigation State**: Mobile menu toggle states managed via CSS classes
3. **Animation State**: Typing animation controlled through JavaScript timing

### User Interactions
1. **Theme Toggle**: Click → Update DOM attribute → Save to localStorage → Update UI
2. **Mobile Menu**: Click hamburger → Toggle CSS classes → Show/hide menu
3. **Navigation**: Click nav link → Smooth scroll to section → Close mobile menu

## External Dependencies

### CDN Resources
- **Google Fonts**: Inter font family (300, 400, 500, 600, 700 weights)
- **Font Awesome**: Version 6.4.0 for icons and social media symbols
- **Favicon**: Inline SVG emoji favicon (💻)

### Third-Party Services
- **Font Delivery**: Google Fonts CDN for typography
- **Icon Library**: Font Awesome CDN for consistent iconography

## Deployment Strategy

### Static Site Deployment
- **Hosting Requirements**: Static file hosting (GitHub Pages, Netlify, Vercel compatible)
- **Build Process**: No build step required - direct file deployment
- **Browser Compatibility**: Modern browsers with CSS Grid and Custom Properties support

### Performance Considerations
- **Loading Strategy**: External resources loaded via CDN
- **Caching**: localStorage for theme preferences
- **Optimization**: Minimal dependencies, efficient CSS with custom properties

### File Structure
```
/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling with theme support
├── script.js           # JavaScript functionality
└── assets/             # Images and other static assets (implied)
```

### Development Workflow
- **Local Development**: Simple HTTP server for local testing
- **Version Control**: Git-based workflow for code management
- **Deployment**: Direct file upload or Git-based deployment to static hosting

## Technical Implementation Notes

### CSS Architecture
- **Custom Properties**: Centralized theme management
- **Component Approach**: Reusable CSS classes for consistency
- **Responsive Strategy**: Mobile-first with progressive enhancement

### JavaScript Functionality
- **DOM Manipulation**: Query selectors for element interaction
- **Event Handling**: Click and scroll event management
- **State Persistence**: localStorage for user preferences

### Accessibility Considerations
- **Semantic HTML**: Proper heading hierarchy and navigation structure
- **Theme Support**: Respects user's system theme preferences
- **Keyboard Navigation**: Standard web navigation patterns