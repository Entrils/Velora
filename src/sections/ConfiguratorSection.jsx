import { Suspense, lazy, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import SectionIntro from "../components/SectionIntro";
import useReveal from "../hooks/useReveal";
import styles from "./ConfiguratorSection.module.css";

const LivingSpaceCanvas = lazy(() => import("../components/LivingSpaceCanvas"));

const styleModes = [
  {
    id: "minimal",
    label: "Светлый минимализм",
    note: "Мягкие стены, чистый объём и спокойный дневной свет."
  },
  {
    id: "darkLuxury",
    label: "Тёплый тёмный",
    note: "Глубокие тона, тёплый металл и более камерная атмосфера."
  },
  {
    id: "concrete",
    label: "Камень и бетон",
    note: "Чёткая геометрия, холоднее палитра и архитектурный характер."
  }
];

const lightModes = [
  { id: "day", label: "День" },
  { id: "dusk", label: "Вечер" },
  { id: "night", label: "Ночь" }
];

const materialModes = [
  { id: "oak", label: "Дуб" },
  { id: "walnut", label: "Орех" },
  { id: "stone", label: "Камень" }
];

const cameraModes = [
  { id: "entry", label: "От входа" },
  { id: "lounge", label: "Из гостиной" },
  { id: "panorama", label: "К окну" }
];

function ConfiguratorSection() {
  const [styleMode, setStyleMode] = useState("minimal");
  const [lightMode, setLightMode] = useState("day");
  const [materialMode, setMaterialMode] = useState("oak");
  const [cameraMode, setCameraMode] = useState("entry");
  const sectionRef = useReveal({ selector: "[data-reveal], [data-control]" });

  const activeStyle = styleModes.find((item) => item.id === styleMode);
  const activeLight = lightModes.find((item) => item.id === lightMode);
  const activeMaterial = materialModes.find((item) => item.id === materialMode);
  const activeCamera = cameraModes.find((item) => item.id === cameraMode);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.controlButton}`,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.05, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  const renderControls = (items, activeId, setter) =>
    items.map((item) => (
      <button
        key={item.id}
        type="button"
        className={`${styles.controlButton} ${activeId === item.id ? styles.activeControl : ""}`}
        onClick={() => setter(item.id)}
        data-control
      >
        <span>{item.label}</span>
        {item.note ? <small>{item.note}</small> : null}
      </button>
    ));

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.introColumn}>
            <SectionIntro
              eyebrow="Интерактив"
              title="Посмотрите, как меняется интерьер от света, материала и точки обзора."
              description="Это лёгкий симулятор атмосферы: он помогает быстро показать клиенту, как одна и та же комната ощущается в разных сценариях."
            />

            <div className={styles.summaryCard} data-reveal>
              <span>Сейчас выбрано</span>
              <strong>{activeStyle.label}</strong>
              <p>
                {activeStyle.note} Текущий свет: {activeLight.label.toLowerCase()},
                материал: {activeMaterial.label.toLowerCase()}, ракурс: {activeCamera.label.toLowerCase()}.
              </p>
            </div>
          </div>

          <div className={styles.stageColumn}>
            <div className={styles.stage} data-reveal>
              <div className={styles.stageHeader}>
                <div>
                  <span>Живая квартира</span>
                  <strong>Псевдо-3D демонстрация пространства</strong>
                </div>
                <p>Выберите стиль и меняйте атмосферу комнаты.</p>
              </div>
              <div className={styles.canvasShell}>
                <Suspense
                  fallback={
                    <div className={styles.canvasFallback}>
                      <strong>Загружаем сцену</strong>
                      <span>Сейчас появится комната для быстрого просмотра атмосферы.</span>
                    </div>
                  }
                >
                  <LivingSpaceCanvas
                    styleMode={styleMode}
                    materialMode={materialMode}
                    lightMode={lightMode}
                    cameraMode={cameraMode}
                  />
                </Suspense>
              </div>
            </div>

            <div className={styles.controlsGrid}>
              <div className={styles.controlGroup} data-reveal>
                <p className={styles.groupLabel}>Стиль</p>
                <div className={styles.controlStack}>{renderControls(styleModes, styleMode, setStyleMode)}</div>
              </div>
              <div className={styles.controlGroup} data-reveal>
                <p className={styles.groupLabel}>Свет</p>
                <div className={styles.inlineGrid}>{renderControls(lightModes, lightMode, setLightMode)}</div>
              </div>
              <div className={styles.controlGroup} data-reveal>
                <p className={styles.groupLabel}>Материал</p>
                <div className={styles.inlineGrid}>{renderControls(materialModes, materialMode, setMaterialMode)}</div>
              </div>
              <div className={styles.controlGroup} data-reveal>
                <p className={styles.groupLabel}>Ракурс</p>
                <div className={styles.inlineGrid}>{renderControls(cameraModes, cameraMode, setCameraMode)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfiguratorSection;