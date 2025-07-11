# Skibookers by [Sunday Oruwhone](https://github.com/0xonebeing)

Experience the future of ski trip planning with this customizable ski package builder. This is a **Next.js 15** desktop-first web application built using **TypeScript**, **TailwindCSS**, and **Ant Design**. It allows users to review, customize, and proceed with their ski trip with features like AI-recommendations, etc.

---

## 🧭 Project Overview

This app delivers a premium booking interface with:

- AI-powered ski resort and package recommendations
- Editable trip components (resort, hotel, skipass, flight, etc.)
- Dynamic pricing and summary
- Clean, modern user experience with a focus on modularity

---

## 📦 Deployment

This app is deployed to this link for demo purposes: [Skibookers on Vercel](https://skibookers.vercel.app)

---

## Figma Link for design file

Figma link to design file for customization screen: [Figma link](https://www.figma.com/design/41VX5zPPTZlq4MDM05PKQM/Skibookers-Customization-Screen?node-id=0-1&t=fxHLMpepC0h9re1v-1)

---

## ⚙️ Tech Stack

- **Next.js 15** (App Router)
- **React 19** with Hooks
- **TypeScript**
- **TailwindCSS** for utility-first styling
- **Ant Design** UI components

---

## 🚀 Quick Start

### ✅ Prerequisites

- Node.js v18.0+
- npm or yarn

### 🔧 Installation

Clone the repo, change directory to the skibookers folder, and run the command to install packages and dependencies:

```bash
# Clone the repo
git clone https://github.com/0xonebeing/skibookers.git

# Change directory to the skibookers folder
cd skibookers

# Install packages and dependencies
npm install
```

### 📂 Directory Structure

```bash
src/
├── app/
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # App layout with providers
│   └── page.tsx               # Main page
├── components/
│   ├── TripComponentCard.tsx  # UI for each trip item
│   ├── PriceSummary.tsx       # Price breakdown & checkout CTA
│   └── CustomizationModal.tsx # Component customization modal
├── types/
│   └── trip.ts                # TypeScript interfaces
├── utils/
│   └── mockData.ts            # Mock trip data
└── hooks/
    └── useTripCustomization.ts # Custom state hook
```

### ▶️ Run Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Key Features

### 🏔 Recommended Resort Section

- Resort name, description, and tags (region, difficulty, vibe)
- Hero section with background image of resort and also feature to view full resort image
- Responsive layout (optimized for **1440px+** desktop)

### 📦 Trip Package Overview

- Modular `TripComponentCard` for each trip item
- Mock data for:
  - Resort, Hotel, Room
  - Skipass, Transfer, Flight, Insurance, Add-ons
- Price calculation logic
- Component editing with visual feedback

### 💰 Price Summary + CTA

- Sidebar with dynamic total price
- “Continue to Checkout” button
- Displays trip duration, dates, travelers

### 🤖 Recommended for You

- Logic-based suggestions
- AI-powered explanation & personalization (in collapsible accordion)
- Highlighted preferences and badges

---

## 🌟 Bonus Features

### ✏️ Customization Modal

- Edit any component using modal
- Shows price differences per selected option
- Highlights most popular & AI-suggested choices

### 🎨 Modern UI Design

- Inspired by **Airbnb**, **Notion**, **Stripe**
- Gradient colors, clean typography
- Smooth transitions & hover states
- Accessibility helpers

### 🧩 Component Architecture

- Modular components
- Reusable custom hook for shared state
- Fully typed with TypeScript interfaces

---

## 🔍 Technical Details

### 🧱 Component Structure

| File                      | Description                        |
| ------------------------- | ---------------------------------- |
| `app/page.tsx`            | Main container and layout          |
| `TripComponentCard.tsx`   | Card for each customizable element |
| `PriceSummary.tsx`        | Sidebar for totals and CTA         |
| `CustomizationModal.tsx`  | Modal to update component options  |
| `useTripCustomization.ts` | Custom React hook for state        |

### ⚛️ State Management

- `useState` for local component state
- `useCallback` to memoize handlers
- `useTripCustomization` to centralize trip logic

### 🎨 Styling Approach

- **TailwindCSS**: Utility classes for rapid styling
- **Ant Design**: Sleek UI components
- Custom gradients and animation and effects
- Desktop-first layout (1440px+) with mobile consideration

### 🧾 Type Safety

- Full use of **TypeScript** throughout
- Defined interfaces for all mock data
- Strongly typed props and hooks

---

## 🧠 Design Decisions

- 📱 **Desktop-First** for wide-screen booking interfaces
- 🔌 **Mock Data** simulates real-world API payloads
- 🧩 **Modular Components** for future extensibility
- 🎯 **Intuitive UX** with clear flows and visual feedback

---

## 🧰 Performance Optimizations

- `React.memo` and `useCallback` to avoid re-renders
- Lazy loading for modals and graphic assets like images
- Tree-shaking & optimized Next.js bundle

---

## 🌐 Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 88+     |
| Firefox | 85+     |
| Safari  | 14+     |
| Edge    | 88+     |

---

## 📚 Documentation & Support

For help or reference:

- [Next.js Docs](https://nextjs.org/docs)
- [Ant Design Docs](https://ant.design/components/overview/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)

---
