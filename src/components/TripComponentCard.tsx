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
    console.log("Component type:", type);
    return component.icon;
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors gap-4">
      <div className="flex items-center space-x-4 min-w-0 flex-1">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
          {getComponentIcon(component.type)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg">{component.title}</h3>
            <span className="text-xs bg-purple-700 text-white px-2 py-1 rounded uppercase font-semibold">
              {component.type}
            </span>
          </div>
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
      <div className="flex items-center justify-between sm:justify-end space-x-4 flex-shrink-0">
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
            className="text-blue-600 hover:text-blue-800 flex-shrink-0"
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};
