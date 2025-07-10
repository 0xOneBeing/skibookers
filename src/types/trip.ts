export interface TripComponent {
  id: string;
  type:
    | "resort"
    | "hotel"
    | "room"
    | "skipass"
    | "transfer"
    | "flight"
    | "insurance"
    | "addons";
  title: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  customizable: boolean;
  options?: ComponentOption[];
  features?: string[];
}

export interface ComponentOption {
  label: string;
  value: string;
  price: number;
  description?: string;
  popular?: boolean;
  savings?: number;
}

export interface UserPreferences {
  vibe: string;
  budget: string;
  groupType: string;
  difficulty?: string;
  duration?: string;
}

export interface TripSummary {
  totalPrice: number;
  duration: string;
  dates: string;
  travelers: string;
  destination: string;
}
