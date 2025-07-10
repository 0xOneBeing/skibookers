"use client";

import { Card, Image, Tag } from "antd";
import {
  InfoCircleOutlined,
  StarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { TripComponentCard } from "@/components/TripComponentCard";
import { CustomizationModal } from "@/components/CustomizationModal";
import { PriceSummary } from "@/components/PriceSummary";
import { useTripCustomization } from "@/hooks/useTripCustomization";
import { mockTripComponents, mockUserPreferences } from "@/utils/mockData";
import { UserPreferences, TripSummary } from "@/types/trip";

export default function SkiTripBooking() {
  const {
    tripComponents,
    selectedComponent,
    isModalOpen,
    totalPrice,
    handleComponentEdit,
    handleModalClose,
    updateComponent,
    handleCheckout,
  } = useTripCustomization(mockTripComponents);

  const userPreferences: UserPreferences = mockUserPreferences;

  const tripSummary: TripSummary = {
    totalPrice,
    duration: "7 days, 6 nights",
    dates: "Jan 12-19, 2025",
    travelers: "2 adults",
    destination: "Alpine Heights",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Resort */}
      <div className="relative h-96 bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-black bg-opacity-30"
          style={{
            opacity: 0.9,
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
            <div className="flex items-center gap-2 md:gap-4 mb-4">
              <h1 className="text-5xl font-bold">Alpine Heights</h1>
              <div className="w-10">
                <Image
                  height={50}
                  width={"100%"}
                  alt="Alpine Heights"
                  src="/alpine-heights.png"
                />
              </div>
            </div>
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
            <Card
              className="border-0 shadow-lg"
              style={{ marginBottom: "32px" }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircleOutlined className="text-green-500 text-xl" />
                <h2 className="text-2xl font-semibold">Recommended for You</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Based on your preferences:
                <span className="font-medium text-blue-600">
                  {userPreferences.vibe}
                </span>
                ,
                <span className="font-medium text-green-600">
                  {userPreferences.budget}
                </span>
                ,
                <span className="font-medium text-purple-600">
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
                  <TripComponentCard
                    key={component.id}
                    component={component}
                    onEdit={handleComponentEdit}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <PriceSummary summary={tripSummary} onCheckout={handleCheckout} />
          </div>
        </div>
      </div>

      {/* Customization Modal */}
      <CustomizationModal
        open={isModalOpen}
        onSave={handleModalClose}
        onCancel={handleModalClose}
        component={selectedComponent}
        onOptionSelect={updateComponent}
      />
    </div>
  );
}
