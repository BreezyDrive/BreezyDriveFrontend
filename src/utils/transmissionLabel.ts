export const getTransmissionLabel = (type: string): string => {
    switch (type) {
      case "Manual":
        return "Số sàn";
      case "Automatic":
        return "Số tự động";
      default:
        return "Không xác định";
    }
  };
  