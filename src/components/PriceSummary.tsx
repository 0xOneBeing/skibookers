import React from "react";
import { Card, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { TripSummary } from "@/types/trip";

interface PriceSummaryProps {
  summary: TripSummary;
  onCheckout: () => void;
}

export const PriceSummary: React.FC<PriceSummaryProps> = ({
  summary,
  onCheckout,
}) => {
  return (
    <Card className="border-0 shadow-lg sticky">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2">Trip Summary</h3>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
          <p className="text-sm opacity-90">Total Price</p>
          <p className="text-3xl font-bold">
            ${summary.totalPrice.toLocaleString()}
          </p>
          <p className="text-sm opacity-90">per person</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span>Duration:</span>
          <span className="font-medium">{summary.duration}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Dates:</span>
          <span className="font-medium">{summary.dates}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Travelers:</span>
          <span className="font-medium">{summary.travelers}</span>
        </div>
      </div>

      <Button
        type="primary"
        size="large"
        className="w-full mb-4 h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 border-0 hover:from-blue-700 hover:to-purple-700"
        onClick={onCheckout}
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
          Your price is locked for 24 hours. Free cancellation within 48 hours.
        </p>
      </div>
    </Card>
  );
};
