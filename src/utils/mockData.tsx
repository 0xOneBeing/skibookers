import React from "react";
import {
  GlobalOutlined,
  HomeOutlined,
  // StarOutlined,
  // CarOutlined,
  // SafetyOutlined,
  // GiftOutlined,
} from "@ant-design/icons";
import { TripComponent, UserPreferences } from "@/types/trip";

export const mockTripComponents: TripComponent[] = [
  {
    id: "resort",
    type: "resort",
    title: "Alpine Heights",
    description: "Chamonix Valley, Expert-friendly, Vibrant après-ski scene",
    price: 0,
    icon: <GlobalOutlined />,
    customizable: true,
    features: ["Expert slopes", "Vibrant nightlife", "Scenic views"],
    options: [
      {
        label: "Alpine Heights",
        value: "alpine-heights",
        price: 0,
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
];

export const mockUserPreferences: UserPreferences = {
  vibe: "Party vibe",
  budget: "Medium budget",
  groupType: "Group of friends",
  difficulty: "Expert",
  duration: "7 days",
};
