import React from "react";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { TripComponent } from "@/types/trip";

interface TripComponentCardProps {
  component: TripComponent;
  onEdit: (component: TripComponent) => void;
}

export const TripComponentCard: React.FC<TripComponentCardProps> = ({
  component,
  onEdit,
}) => {
  const getComponentIcon = (type: string) => {
    // Icon mapping logic here
    console.log("Component type:", type);
    return component.icon;
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
          {getComponentIcon(component.type)}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{component.title}</h3>
          <p className="text-gray-600 text-sm">{component.description}</p>
          {component.features && (
            <div className="flex space-x-2 mt-1">
              {component.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="font-semibold text-lg">${component.price}</p>
          {component.type === "resort" && component.price === 0 && (
            <p className="text-xs text-green-600">Included</p>
          )}
        </div>
        {component.customizable && (
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => onEdit(component)}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};
