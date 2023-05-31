import { useEffect, useState } from "react";

import styles from "./MovingObject.module.css";

export const MovingObject = (): JSX.Element => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.moving_object}
      style={{ transform: `translate(${coords.x - 25}px, ${coords.y - 25}px)` }}
    />
  );
};
