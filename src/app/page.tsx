"use client";

import { useState } from "react";
import { Card, Button, Modal, Tag } from "antd";
import {
  EditOutlined,
  InfoCircleOutlined,
  StarOutlined,
  CheckCircleOutlined,
  CarOutlined,
  HomeOutlined,
  GiftOutlined,
  SafetyOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

// Types
interface ComponentOption {
  label: string;
  value: string;
  price: number;
}

interface TripComponent {
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
}

interface UserPreferences {
  vibe: string;
  budget: string;
  groupType: string;
}

export default function SkiTripBooking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] =
    useState<TripComponent | null>(null);
  const [tripComponents, setTripComponents] = useState<TripComponent[]>([
    {
      id: "resort",
      type: "resort",
      title: "Alpine Heights",
      description: "Chamonix Valley, Expert-friendly, Vibrant après-ski scene",
      price: 0,
      icon: <GlobalOutlined />,
      customizable: true,
      options: [
        { label: "Alpine Heights", value: "alpine-heights", price: 0 },
        { label: "Snow Paradise", value: "snow-paradise", price: 150 },
        { label: "Mountain Vista", value: "mountain-vista", price: -100 },
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
      options: [
        { label: "4* Chalet Aurora", value: "chalet-aurora", price: 450 },
        { label: "5* Grand Mountain", value: "grand-mountain", price: 680 },
        { label: "3* Cozy Lodge", value: "cozy-lodge", price: 280 },
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
      options: [
        {
          label: "Double Room with Breakfast",
          value: "double-breakfast",
          price: 120,
        },
        {
          label: "Suite with Half Board",
          value: "suite-halfboard",
          price: 200,
        },
        { label: "Single Room", value: "single", price: 80 },
      ],
    },
    {
      id: "skipass",
      type: "skipass",
      title: "3 Days Premium Zone",
      description: "Access to all slopes, Express lifts",
      price: 180,
      icon: <StarOutlined />,
      customizable: true,
      options: [
        { label: "3 Days Premium", value: "3-premium", price: 180 },
        { label: "5 Days Premium", value: "5-premium", price: 280 },
        { label: "3 Days Basic", value: "3-basic", price: 120 },
      ],
    },
    {
      id: "transfer",
      type: "transfer",
      title: "From Geneva Airport",
      description: "Private transfer, 2.5 hours, Meet & Greet",
      price: 85,
      icon: <CarOutlined />,
      customizable: true,
      options: [
        { label: "Private Transfer", value: "private", price: 85 },
        { label: "Shared Shuttle", value: "shared", price: 45 },
        { label: "Public Transport", value: "public", price: 25 },
      ],
    },
    {
      id: "flight",
      type: "flight",
      title: "Emirates Economy",
      description: "Dep: 12.01 15:40, Arr: 13.01 08:30",
      price: 320,
      icon: <GlobalOutlined />,
      customizable: true,
      options: [
        { label: "Emirates Economy", value: "emirates-eco", price: 320 },
        { label: "Lufthansa Business", value: "lufthansa-bus", price: 890 },
        { label: "Budget Airline", value: "budget", price: 180 },
      ],
    },
    {
      id: "insurance",
      type: "insurance",
      title: "Travel Insurance Basic",
      description: "Medical coverage, Trip cancellation",
      price: 45,
      icon: <SafetyOutlined />,
      customizable: true,
      options: [
        { label: "Basic Coverage", value: "basic", price: 45 },
        { label: "Premium Coverage", value: "premium", price: 85 },
        { label: "No Insurance", value: "none", price: 0 },
      ],
    },
    {
      id: "addons",
      type: "addons",
      title: "Ski Lessons + Spa Access",
      description: "Group lessons (3 days), Spa & wellness",
      price: 150,
      icon: <GiftOutlined />,
      customizable: true,
      options: [
        { label: "Ski Lessons + Spa", value: "lessons-spa", price: 150 },
        { label: "Just Ski Lessons", value: "lessons", price: 90 },
        { label: "Equipment Rental", value: "equipment", price: 60 },
      ],
    },
  ]);

  const userPreferences: UserPreferences = {
    vibe: "Party vibe",
    budget: "Medium budget",
    groupType: "Group of friends",
  };

  const totalPrice = tripComponents.reduce(
    (sum, component) => sum + component.price,
    0
  );

  const handleComponentEdit = (component: TripComponent) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  };

  const handleModalOk = () => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  };

  const updateComponent = (componentId: string, newOption: ComponentOption) => {
    setTripComponents((prev) =>
      prev.map((comp) =>
        comp.id === componentId
          ? { ...comp, title: newOption.label, price: newOption.price }
          : comp
      )
    );
  };

  const getComponentIcon = (type: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      resort: <GlobalOutlined className="text-blue-500" />,
      hotel: <HomeOutlined className="text-green-500" />,
      room: <HomeOutlined className="text-purple-500" />,
      skipass: <StarOutlined className="text-yellow-500" />,
      transfer: <CarOutlined className="text-orange-500" />,
      flight: <GlobalOutlined className="text-indigo-500" />,
      insurance: <SafetyOutlined className="text-red-500" />,
      addons: <GiftOutlined className="text-pink-500" />,
    };
    return iconMap[type] || <InfoCircleOutlined />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Resort */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <div
          className="absolute inset-0 bg-black bg-opacity-30"
          style={{
            opacity: 0.5,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "soft-light",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backgroundImage: "url('/alpine-heights.png')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-8 py-20">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Alpine Heights</h1>
            <p className="text-xl mb-6 max-w-2xl">
              Experience the ultimate ski adventure in the heart of Chamonix
              Valley. Expert-friendly slopes meet vibrant après-ski culture in
              this legendary resort.
            </p>
            <div className="flex space-x-4">
              <Tag color="blue" className="px-3 py-1 text-sm">
                Expert-friendly
              </Tag>
              <Tag color="purple" className="px-3 py-1 text-sm">
                Vibrant nightlife
              </Tag>
              <Tag color="green" className="px-3 py-1 text-sm">
                Chamonix Valley
              </Tag>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recommended For You */}
            <Card className="mb-8 border-0 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircleOutlined className="text-green-500 text-xl" />
                <h2 className="text-2xl font-semibold">Recommended for You</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Based on your preferences:
                <span className="font-medium text-blue-600">
                  {" "}
                  {userPreferences.vibe}
                </span>
                ,
                <span className="font-medium text-green-600">
                  {" "}
                  {userPreferences.budget}
                </span>
                ,
                <span className="font-medium text-purple-600">
                  {" "}
                  {userPreferences.groupType}
                </span>
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <InfoCircleOutlined className="mr-2" />
                  AI has curated this trip based on similar travelers who loved
                  the party atmosphere and challenging slopes of Alpine Heights.
                </p>
              </div>
            </Card>

            {/* Trip Package Overview */}
            <Card
              className="border-0 shadow-lg"
              title={
                <div className="flex items-center space-x-3">
                  <StarOutlined className="text-yellow-500" />
                  <span className="text-2xl font-semibold">
                    Your Trip Package
                  </span>
                </div>
              }
            >
              <div className="space-y-4">
                {tripComponents.map((component) => (
                  <div
                    key={component.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        {getComponentIcon(component.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {component.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {component.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-lg">
                          ${component.price}
                        </p>
                        {component.type === "resort" &&
                          component.price === 0 && (
                            <p className="text-xs text-green-600">Included</p>
                          )}
                      </div>
                      {component.customizable && (
                        <Button
                          type="text"
                          icon={<EditOutlined />}
                          onClick={() => handleComponentEdit(component)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2">Trip Summary</h3>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
                  <p className="text-sm opacity-90">Total Price</p>
                  <p className="text-3xl font-bold">
                    ${totalPrice.toLocaleString()}
                  </p>
                  <p className="text-sm opacity-90">per person</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Duration:</span>
                  <span className="font-medium">7 days, 6 nights</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Dates:</span>
                  <span className="font-medium">Jan 12-19, 2025</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Travelers:</span>
                  <span className="font-medium">2 adults</span>
                </div>
              </div>

              <Button
                type="primary"
                size="large"
                className="w-full mb-4 h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 border-0 hover:from-blue-700 hover:to-purple-700"
              >
                Continue to Checkout
              </Button>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircleOutlined className="text-green-500" />
                  <span className="text-sm font-medium text-green-700">
                    Price Protection
                  </span>
                </div>
                <p className="text-xs text-green-600">
                  Your price is locked for 24 hours. Free cancellation within 48
                  hours.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      <Modal
        title={
          <div className="flex items-center space-x-3">
            {selectedComponent && getComponentIcon(selectedComponent.type)}
            <span>Customize {selectedComponent?.title}</span>
          </div>
        }
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={600}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleModalOk}>
            Save Changes
          </Button>,
        ]}
      >
        {selectedComponent && (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              Choose from available options for {selectedComponent.title}:
            </p>
            <div className="space-y-3">
              {selectedComponent.options?.map((option) => (
                <div
                  key={option.value}
                  className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors"
                  onClick={() => updateComponent(selectedComponent.id, option)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{option.label}</h4>
                      <p className="text-sm text-gray-500">
                        {option.value === "premium"
                          ? "Includes additional benefits"
                          : "Standard option"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${option.price}</p>
                      {option.price > selectedComponent.price && (
                        <p className="text-xs text-green-600">
                          +${option.price - selectedComponent.price} upgrade
                        </p>
                      )}
                      {option.price < selectedComponent.price && (
                        <p className="text-xs text-red-600">
                          -${selectedComponent.price - option.price} savings
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
