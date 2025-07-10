"use client";

import { Card, Image, Tag, Collapse } from "antd";
import {
  InfoCircleOutlined,
  StarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { TripComponentCard } from "@/components/TripComponentCard";
import { CustomizationModal } from "@/components/CustomizationModal";
import { PriceSummary } from "@/components/PriceSummary";
import { useTripCustomization } from "@/hooks/useTripCustomization";
import {
  aiRecommendations,
  mockTripComponents,
  mockUserPreferences,
  selectedResort,
} from "@/utils/mockData";
import { UserPreferences, TripSummary } from "@/types/trip";
import { useState } from "react";

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

  const [visible, setVisible] = useState<boolean>(false);

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
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 bg-opacity-30"
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
        <div className="relative max-w-7xl mx-auto px-8 py-20 flex items-center justify-between gap-4">
          <div className="text-white">
            <div className="flex items-center gap-2 md:gap-4 mb-4">
              <h1 className="text-5xl font-bold">{selectedResort.name}</h1>
            </div>

            <p className="text-xl max-w-2xl">
              {selectedResort.description}
            </p>

            <p
              onClick={() => setVisible(true)}
              className="text-blue-500 hover:underline hover:text-blue-700 cursor-pointer my-6"
            >
              Show image preview
            </p>

            <div className="flex space-x-4">
              {selectedResort.tags.map((tag, index) => (
                <Tag
                  key={index}
                  color={
                    index === 0 ? "blue" : index === 1 ? "purple" : "green"
                  }
                  className="px-3 py-1 text-sm"
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex w-full max-w-md image-preview-container">
            <Image
              width={300}
              height={200}
              alt={selectedResort.name}
              src={selectedResort.image}
              preview={{
                visible,
                src: selectedResort.image,
                onVisibleChange: (value) => {
                  setVisible(value);
                },
              }}
              style={{ display: "none", objectFit: "cover" }}
              className="object-cover rounded-lg shadow-lg shadow-purple-500/50"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Trip Package Overview */}
            <Card
              className="border-0 shadow-lg"
              style={{ marginBottom: "32px" }}
              title={
                <div className="flex items-center space-x-3">
                  <StarOutlined className="text-yellow-500" />
                  <span className="text-2xl font-semibold">
                    Your Trip Package
                  </span>
                </div>
              }
            >
              <Collapse
                items={[
                  {
                    key: "1",
                    label: (
                      <div className="flex items-center space-x-3">
                        <CheckCircleOutlined className="text-green-500" />
                        <span className="font-semibold">
                          AI Recommendations
                        </span>
                      </div>
                    ),
                    children: (
                      <div>
                        <p className="text-gray-600 mb-4">
                          Based on your preferences:{" "}
                          <span className="font-medium text-blue-600">
                            {userPreferences.vibe}
                          </span>
                          ,{" "}
                          <span className="font-medium text-green-600">
                            {userPreferences.budget}
                          </span>
                          ,{" "}
                          <span className="font-medium text-purple-600">
                            {userPreferences.groupType}
                          </span>
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                          <p className="text-sm text-blue-700">
                            <InfoCircleOutlined className="mr-2" />
                            AI has curated this trip based on similar travelers
                            who loved the party atmosphere and challenging
                            slopes of Alpine Heights.
                          </p>
                        </div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">
                          Similar Destinations You Might Like
                        </h3>

                        <div className="flex items-center mb-0 px-4">
                          <ArrowRightOutlined
                            className="text-blue-500 text-lg"
                            style={{
                              animation: "bounceRight 2s ease-in-out infinite",
                              animationDelay: "1s",
                            }}
                          />
                          <span className="ml-2 text-sm text-gray-500">
                            Scroll to see more
                          </span>
                        </div>

                        <style
                          dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes bounceRight {
                              0%, 20%, 50%, 80%, 100% { transform: translateX(0); }
                              40% { transform: translateX(10px); }
                              60% { transform: translateX(5px); }
                            }
                          `,
                          }}
                        />

                        <div className="flex space-x-4 overflow-x-auto pb-4">
                          {aiRecommendations.map((dest, index) => (
                            <div
                              key={index}
                              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4 hover:shadow-xl hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                              <Image
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-32 object-cover rounded-lg mb-3"
                                preview={false}
                              />
                              <h4 className="font-semibold text-gray-800 mb-1">
                                {dest.name}
                              </h4>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-lg font-bold text-blue-600">
                                  {dest.price}
                                </span>
                                <span className="text-sm text-gray-600">
                                  ★ {dest.rating}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {dest.features.map((feature, i) => (
                                  <span
                                    key={i}
                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                ]}
                className="mb-4"
              />
              <div className="space-y-4 mt-6">
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
