import { useEffect, useState } from "react";

export const usePosition = (): { x: number; y: number } => {
  const isBrouser = typeof window !== undefined;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWindowMouseMove = (event) => {
    if (isBrouser) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return position;
};
