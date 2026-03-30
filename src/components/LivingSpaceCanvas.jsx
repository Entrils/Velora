import { useEffect, useRef } from "react";
import styles from "./LivingSpaceCanvas.module.css";

function LivingSpaceCanvas({ styleMode, materialMode, lightMode, cameraMode }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const setNeutral = () => {
      root.style.setProperty("--pointer-pan", "0deg");
      root.style.setProperty("--pointer-tilt", "0deg");
      root.style.setProperty("--pointer-shift-x", "0px");
      root.style.setProperty("--pointer-shift-y", "0px");
    };

    setNeutral();

    return () => setNeutral();
  }, []);

  const handlePointerMove = (event) => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const bounds = root.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    root.style.setProperty("--pointer-pan", `${x * 5}deg`);
    root.style.setProperty("--pointer-tilt", `${y * -4}deg`);
    root.style.setProperty("--pointer-shift-x", `${x * 10}px`);
    root.style.setProperty("--pointer-shift-y", `${y * 8}px`);
  };

  const handlePointerLeave = () => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    root.style.setProperty("--pointer-pan", "0deg");
    root.style.setProperty("--pointer-tilt", "0deg");
    root.style.setProperty("--pointer-shift-x", "0px");
    root.style.setProperty("--pointer-shift-y", "0px");
  };

  return (
    <div
      ref={rootRef}
      className={`${styles.viewport} ${styles[styleMode]} ${styles[materialMode]} ${styles[lightMode]} ${styles[cameraMode]}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.atmosphere} />
      <div className={styles.sceneFrame} />
      <div className={styles.room}>
        <div className={styles.backWall}>
          <div className={styles.stripLight} />
          <div className={styles.artPanel} />
          <div className={styles.windowWide} />
          <div className={styles.windowTall} />
        </div>
        <div className={styles.leftWall} />
        <div className={styles.rightWall} />
        <div className={styles.floor} />
        <div className={styles.rug} />
        <div className={styles.sofaBase} />
        <div className={styles.sofaBack} />
        <div className={styles.sofaSeatLeft} />
        <div className={styles.sofaSeatRight} />
        <div className={styles.armchair} />
        <div className={styles.coffeeTableTop} />
        <div className={styles.coffeeTableLeg} />
        <div className={styles.console} />
        <div className={styles.consoleTower} />
        <div className={styles.floorLampStem} />
        <div className={styles.floorLampHead} />
      </div>
      <div className={styles.legend}>
        <span>Сцена</span>
        <strong>Жилая зона</strong>
      </div>
    </div>
  );
}

export default LivingSpaceCanvas;