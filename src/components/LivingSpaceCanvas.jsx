import { useEffect, useRef } from "react";
import styles from "./LivingSpaceCanvas.module.css";

function LivingSpaceCanvas({ styleMode, materialMode, lightMode, cameraMode }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const resetPointer = () => {
      root.style.setProperty("--pointer-pan", "0deg");
      root.style.setProperty("--pointer-tilt", "0deg");
      root.style.setProperty("--pointer-shift-x", "0px");
      root.style.setProperty("--pointer-shift-y", "0px");
    };

    resetPointer();

    return () => resetPointer();
  }, []);

  const handlePointerMove = (event) => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const bounds = root.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    root.style.setProperty("--pointer-pan", `${x * 1.8}deg`);
    root.style.setProperty("--pointer-tilt", `${y * -1.2}deg`);
    root.style.setProperty("--pointer-shift-x", `${x * 5}px`);
    root.style.setProperty("--pointer-shift-y", `${y * 4}px`);
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

      <div className={styles.cameraRig}>
        <div className={styles.roomShell}>
          <div className={styles.architectureLayer}>
            <div className={styles.backWall}>
              <div className={styles.wallWash} />
              <div className={styles.wallPanelLeft} />
              <div className={styles.wallPanelCenter} />
              <div className={styles.windowZone}>
                <div className={styles.windowWide}>
                  <div className={styles.windowView} />
                  <div className={styles.sheerCurtain} />
                </div>
                <div className={styles.windowTall}>
                  <div className={styles.windowView} />
                  <div className={styles.sheerCurtain} />
                </div>
              </div>
              <div className={styles.baseboard} />
              <div className={styles.coveLight} />
            </div>

            <div className={styles.leftWall}>
              <div className={styles.leftWallInset} />
            </div>

            <div className={styles.rightWall}>
              <div className={styles.slatPanel} />
              <div className={styles.console} />
              <div className={styles.consoleObjectTall} />
              <div className={styles.consoleObjectRound} />
            </div>

            <div className={styles.floor} />
            <div className={styles.floorShadow} />
            <div className={styles.cornerShadowLeft} />
            <div className={styles.cornerShadowRight} />
            <div className={styles.rug} />
          </div>

          <div className={styles.furnitureLayer}>
            <div className={styles.sofaGroup}>
              <div className={styles.sofaBody} />
              <div className={styles.sofaBack} />
              <div className={styles.sofaSeatLeft} />
              <div className={styles.sofaSeatRight} />
              <div className={styles.sofaSide} />
            </div>

            <div className={styles.armchair} />
            <div className={styles.coffeeTableLarge} />
            <div className={styles.coffeeTableSmall} />
            <div className={styles.objectShadow} />

            <div className={styles.floorLampStem} />
            <div className={styles.floorLampShade} />
            <div className={styles.floorLampGlow} />
          </div>
        </div>
      </div>

      <div className={styles.legend}>
        <span>Сцена</span>
        <strong>Жилая зона</strong>
      </div>
    </div>
  );
}

export default LivingSpaceCanvas;