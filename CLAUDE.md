# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js 15 landing page for "Plantoto" - a plant care management mobile app. The site is built with React 19, TypeScript, and Tailwind CSS, using the App Router and shadcn/ui components.

## Development Commands

- `npm run dev` - Start development server with Turbopack (preferred)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page with hero, features, testimonials, and download sections
  - `layout.tsx` - Root layout with fonts and basic HTML structure
  - `globals.css` - Global styles and Tailwind CSS imports
- `components/` - Reusable UI components
  - `ui/` - shadcn/ui components (Button, Card, Badge)
- `lib/` - Utility functions
  - `utils.ts` - Tailwind CSS utility functions
- `public/` - Static assets (SVG icons, images)

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: Version 19
- **TypeScript**: Full TypeScript support
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Icons**: Lucide React and React Icons
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

## Code Architecture

The landing page is a single-page application with Japanese content promoting the Plantoto mobile app. Key sections include:

- Header with navigation and logo
- Hero section with app download links
- Features section showcasing app capabilities
- Testimonials from real users
- Download CTA section
- Footer with support links

## shadcn/ui Configuration

The project uses shadcn/ui with the "new-york" style variant. Component aliases are configured in `components.json`:
- `@/components` - Components directory
- `@/lib/utils` - Utility functions
- `@/components/ui` - UI components

## Development Notes

- Uses Turbopack for faster development builds
- Implements responsive design with mobile-first approach
- External links to App Store and Google Play for app downloads
- Japanese language content throughout
- Gradient styling for brand colors (green/emerald theme)