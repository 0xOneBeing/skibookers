import React, { useState, useEffect } from "react";
import { Modal, Button, Badge, App } from "antd";
import { TripComponent, ComponentOption } from "@/types/trip";

interface CustomizationModalProps {
  open: boolean;
  component: TripComponent | null;
  onCancel: () => void;
  onSave: () => void;
  onOptionSelect: (componentId: string, option: ComponentOption) => void;
}

export const CustomizationModal: React.FC<CustomizationModalProps> = ({
  open,
  component,
  onCancel,
  onSave,
  onOptionSelect,
}) => {
  const { message } = App.useApp();

  const [selectedOption, setSelectedOption] = useState<ComponentOption | null>(
    null
  );

  useEffect(() => {
    if (component && open) {
      const currentOption = component.options?.find(
        (opt) => opt.price === component.price
      );
      setSelectedOption(currentOption || null);
    }
  }, [component, open]);

  const handleOptionClick = (option: ComponentOption) => {
    setSelectedOption(option);
  };

  const handleSave = () => {
    if (selectedOption && component) {
      onOptionSelect(component.id, selectedOption);
      message.success(
        `${
          component.type[0].toUpperCase() + component.type.slice(1)
        } updated to ${selectedOption.label}`
      );
    }
    onSave();
  };

  const handleCancel = () => {
    if (component) {
      const currentOption = component.options?.find(
        (opt) => opt.price === component.price
      );
      setSelectedOption(currentOption || null);
    }
    onCancel();
  };
  const getComponentIcon = (type: string) => {
    console.log("Component type:", type);
    return component?.icon;
  };

  const calculatePriceDifference = (
    optionPrice: number,
    currentPrice: number
  ) => {
    const diff = optionPrice - currentPrice;
    if (diff > 0) return `+$${diff} upgrade`;
    if (diff < 0) return `-$${Math.abs(diff)} savings`;
    return "Current selection";
  };

  return (
    <Modal
      title={
        component && (
          <div className="flex items-center space-x-3">
            {getComponentIcon(component.type)}
            <span>Customize {component.title}</span>
          </div>
        )
      }
      open={open}
      onCancel={handleCancel}
      width={700}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save Changes
        </Button>,
      ]}
    >
      {component && (
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">
            Choose from available options for {component.title}:
          </p>
          <div className="space-y-3">
            {component.options?.map((option) => (
              <div
                key={option.value}
                className={`border rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors relative ${
                  selectedOption?.value === option.value
                    ? "border-blue-500 bg-blue-50"
                    : calculatePriceDifference(
                        option.price,
                        component.price
                      ) === "Current selection"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.popular && (
                  <Badge.Ribbon
                    text="Popular"
                    color="gold"
                    className="absolute -top-2 -right-2"
                  >
                    <div />
                  </Badge.Ribbon>
                )}
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h4 className="font-medium text-lg">{option.label}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {option.description ||
                        "Standard option with all essential features"}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-semibold text-lg">${option.price}</p>
                    <p className="text-xs text-gray-600">
                      {calculatePriceDifference(option.price, component.price)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Suggestion */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <span className="font-medium text-blue-700">
                AI Recommendation
              </span>
            </div>
            <p className="text-sm text-blue-600">
              Based on your preferences, we recommend the premium option for the
              best experience with your group of friends. It includes additional
              perks that align with your party vibe preference.
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};
