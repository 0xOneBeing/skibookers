import React from "react";
import {
  GlobalOutlined,
  HomeOutlined,
  CarOutlined,
  SafetyOutlined,
  GiftOutlined,
  PaperClipOutlined,
  RocketOutlined,
} from "@ant-design/icons";

import {
  AIRecommendations,
  TripComponent,
  UserPreferences,
  SelectedResort,
} from "@/types/trip";

export const mockTripComponents: TripComponent[] = [
  {
    id: "resort",
    type: "resort",
    title: "Alpine Heights",
    description: "Chamonix Valley, Expert-friendly, Vibrant après-ski scene",
    price: 100,
    icon: <GlobalOutlined />,
    customizable: true,
    features: ["Expert slopes", "Vibrant nightlife", "Scenic views"],
    options: [
      {
        label: "Alpine Heights",
        value: "alpine-heights",
        price: 100,
        description: "Perfect for expert skiers with vibrant nightlife",
        popular: true,
      },
      {
        label: "Snow Paradise",
        value: "snow-paradise",
        price: 150,
        description: "Family-friendly resort with beginner slopes",
      },
      {
        label: "Mountain Vista",
        value: "mountain-vista",
        price: -100,
        description: "Budget-friendly option with basic amenities",
      },
    ],
  },
  {
    id: "hotel",
    type: "hotel",
    title: "4* Chalet Aurora",
    description: "Near lifts, Mountain view, Spa included",
    price: 450,
    icon: <HomeOutlined />,
    customizable: true,
    features: ["Ski-in/ski-out", "Spa & Wellness", "Mountain views"],
    options: [
      {
        label: "4* Chalet Aurora",
        value: "chalet-aurora",
        price: 450,
        description: "Perfect balance of comfort and location",
        popular: true,
      },
      {
        label: "5* Grand Mountain Resort",
        value: "grand-mountain",
        price: 680,
        description: "Luxury experience with premium amenities",
      },
      {
        label: "3* Cozy Alpine Lodge",
        value: "cozy-lodge",
        price: 280,
        description: "Budget-friendly with essential amenities",
      },
    ],
  },
  {
    id: "room",
    type: "room",
    title: "Double Room with Breakfast",
    description: "Mountain view, Balcony, Free WiFi",
    price: 120,
    icon: <HomeOutlined />,
    customizable: true,
    features: ["Mountain view", "Private balcony", "Free WiFi"],
    options: [
      {
        label: "Double Room with Breakfast",
        value: "double-breakfast",
        price: 120,
        description: "Comfortable double room with daily breakfast",
      },
      {
        label: "Suite with Half Board",
        value: "suite-halfboard",
        price: 200,
        description: "Spacious suite with breakfast and dinner included",
        popular: true,
      },
      {
        label: "Single Room",
        value: "single",
        price: 80,
        description: "Cozy single room with breakfast",
      },
    ],
  },
  // Skipass component
  {
    id: "skipass",
    type: "skipass",
    title: "3-Day Premium Zone Pass",
    description: "Access to all lifts in Alpine Heights region",
    price: 210,
    icon: <PaperClipOutlined />,
    customizable: true,
    features: ["Unlimited lifts", "Premium zones included", "Electronic pass"],
    options: [
      {
        label: "3-Day Premium Zone Pass",
        value: "3day-premium",
        price: 210,
        description: "Full access to all lifts in the premium zone",
        popular: true,
      },
      {
        label: "5-Day Full Region Pass",
        value: "5day-full",
        price: 320,
        description: "Access to all lifts in the entire region",
      },
      {
        label: "2-Day Basic Pass",
        value: "2day-basic",
        price: 140,
        description: "Access to main lifts only",
      },
    ],
  },
  // Transfer component
  {
    id: "transfer",
    type: "transfer",
    title: "Private Shuttle from Geneva",
    description: "Direct to resort, 1h 30m, Max 8 people",
    price: 180,
    icon: <CarOutlined />,
    customizable: true,
    features: ["Private vehicle", "Direct transfer", "English-speaking driver"],
    options: [
      {
        label: "Private Shuttle from Geneva",
        value: "private-shuttle",
        price: 180,
        description: "Comfortable private transfer directly to your hotel",
        popular: true,
      },
      {
        label: "Shared Shuttle Service",
        value: "shared-shuttle",
        price: 60,
        description: "Economical shared transfer with 2-3 stops",
      },
      {
        label: "First Class Train Ticket",
        value: "train-first",
        price: 95,
        description: "Scenic train ride with first class comfort",
      },
    ],
  },
  // Flight component
  {
    id: "flight",
    type: "flight",
    title: "Emirates (Economy)",
    description: "London (LHR) → Geneva (GVA), 1h 45m flight",
    price: 220,
    icon: <RocketOutlined />,
    customizable: true,
    features: ["23kg baggage", "Meal included", "Entertainment system"],
    options: [
      {
        label: "Emirates (Economy)",
        value: "emirates-economy",
        price: 220,
        description: "Comfortable economy class with good amenities",
      },
      {
        label: "Swiss (Business Class)",
        value: "swiss-business",
        price: 550,
        description: "Premium business class with lounge access",
        popular: true,
      },
      {
        label: "EasyJet (Standard)",
        value: "easyjet-standard",
        price: 150,
        description: "Budget option with carry-on only",
      },
    ],
  },
  // Insurance component
  {
    id: "insurance",
    type: "insurance",
    title: "Basic Ski Insurance",
    description: "Medical coverage, Equipment protection",
    price: 45,
    icon: <SafetyOutlined />,
    customizable: true,
    features: ["Medical expenses", "Equipment cover", "Trip cancellation"],
    options: [
      {
        label: "Basic Ski Insurance",
        value: "basic-insurance",
        price: 45,
        description: "Essential coverage for medical and equipment",
      },
      {
        label: "Premium Protection",
        value: "premium-insurance",
        price: 75,
        description: "Full coverage including off-piste and heli-skiing",
        popular: true,
      },
      {
        label: "No Insurance",
        value: "no-insurance",
        price: 0,
        description: "I'll arrange my own insurance",
      },
    ],
  },
  // Add-ons component
  {
    id: "add-ons",
    type: "add-ons",
    title: "Ski Lessons & Spa Package",
    description: "3-day group lessons + 1 spa treatment",
    price: 175,
    icon: <GiftOutlined />,
    customizable: true,
    features: ["Group lessons", "Spa treatment", "Equipment discount"],
    options: [
      {
        label: "Ski Lessons & Spa Package",
        value: "lessons-spa",
        price: 175,
        description: "Great value package for beginners",
        popular: true,
      },
      {
        label: "Private Instructor (2 days)",
        value: "private-instructor",
        price: 300,
        description: "Personalized 1-on-1 instruction",
      },
      {
        label: "Full Spa Retreat",
        value: "full-spa",
        price: 220,
        description: "Unlimited spa access + 3 treatments",
      },
      {
        label: "Nightlife Experience",
        value: "nightlife",
        price: 90,
        description: "VIP club entries + 3 drink vouchers",
      },
    ],
  },
];

export const aiRecommendations: AIRecommendations[] = [
  {
    name: "Val d'Isère",
    image: `https://picsum.photos/300/200?random=${Math.random()}`,
    price: "$1,280",
    rating: 4.8,
    features: ["Expert slopes", "Luxury resorts"],
  },
  {
    name: "Verbier",
    image: `https://picsum.photos/300/200?random=${Math.random()}`,
    price: "$1,150",
    rating: 4.7,
    features: ["Party scene", "Off-piste"],
  },
  {
    name: "St. Anton",
    image: `https://picsum.photos/300/200?random=${Math.random()}`,
    price: "$980",
    rating: 4.6,
    features: ["Challenging runs", "Après-ski"],
  },
  {
    name: "Courchevel",
    image: `https://picsum.photos/300/200?random=${Math.random()}`,
    price: "$1,450",
    rating: 4.9,
    features: ["Luxury", "Fine dining"],
  },
];

export const mockUserPreferences: UserPreferences = {
  vibe: "Party vibe",
  budget: "Medium budget",
  groupType: "Group of friends",
  difficulty: "Expert",
  duration: "7 days",
};

export const selectedResort: SelectedResort = {
  name: "Alpine Heights",
  description:
    "Experience the ultimate ski adventure in the heart of Chamonix Valley. Expert-friendly slopes meet vibrant après-ski culture in this legendary resort.",
  image: "/alpine-heights.png",
  tags: ["Expert-friendly", "Vibrant nightlife", "Chamonix Valley"],
};
