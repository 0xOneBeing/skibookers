import { useState, useCallback } from "react";
import { TripComponent, ComponentOption } from "@/types/trip";

export const useTripCustomization = (initialComponents: TripComponent[]) => {
  const [tripComponents, setTripComponents] =
    useState<TripComponent[]>(initialComponents);
  const [selectedComponent, setSelectedComponent] =
    useState<TripComponent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = tripComponents.reduce(
    (sum, component) => sum + component.price,
    0
  );

  const handleComponentEdit = useCallback((component: TripComponent) => {
    setSelectedComponent(component);
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedComponent(null);
  }, []);

  const updateComponent = useCallback(
    (componentId: string, newOption: ComponentOption) => {
      setTripComponents((prev) =>
        prev.map((comp) =>
          comp.id === componentId
            ? { ...comp, title: newOption.label, price: newOption.price }
            : comp
        )
      );
    },
    []
  );

  const handleCheckout = useCallback(() => {
    // Implement checkout logic
    console.log("Proceeding to checkout with components:", tripComponents);
    alert("Proceeding to checkout...");
  }, [tripComponents]);

  return {
    tripComponents,
    selectedComponent,
    isModalOpen,
    totalPrice,
    handleComponentEdit,
    handleModalClose,
    updateComponent,
    handleCheckout,
  };
};
