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
    note: "Мягкие стены, много воздуха и спокойный дневной свет."
  },
  {
    id: "darkLuxury",
    label: "Темная роскошь",
    note: "Глубокие тона, теплый металл и более камерное настроение."
  },
  {
    id: "concrete",
    label: "Бетон и камень",
    note: "Четкая геометрия, холоднее палитра и архитектурный характер."
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
  const [lightMode, setLightMode] = useState("dusk");
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
        `.${styles.badge}`,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
      );

      gsap.to(`.${styles.glow}`, {
        scale: 1.08,
        opacity: 0.72,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
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
          <div className={styles.stage} data-reveal>
            <div className={styles.glow} />
            <div className={styles.stageTop}>
              <div className={styles.badges}>
                <span className={styles.badge}>Поворот мышью</span>
                <span className={styles.badge}>Смена света</span>
                <span className={styles.badge}>Живые материалы</span>
              </div>
              <div className={styles.liveNote}>
                <strong>Живая квартира</strong>
                <span>Сцена реагирует на стиль, свет, материалы и выбранный ракурс.</span>
              </div>
            </div>
            <div className={styles.canvasShell}>
              <Suspense
                fallback={
                  <div className={styles.canvasFallback}>
                    <strong>Загружаем интерьер</strong>
                    <span>Сейчас появится комната, в которой можно менять атмосферу и точку обзора.</span>
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
            <div className={styles.stageFooter}>
              <div className={styles.statusCard}>
                <span>Что выбрано сейчас</span>
                <div className={styles.statusList}>
                  <p>
                    <strong>Стиль:</strong> {activeStyle.label}
                  </p>
                  <p>
                    <strong>Свет:</strong> {activeLight.label}
                  </p>
                  <p>
                    <strong>Материал:</strong> {activeMaterial.label}
                  </p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span>Как смотреть сцену</span>
                <strong>{activeCamera.label}</strong>
                <p>
                  Переключайте ракурсы кнопками справа и слегка ведите мышью по сцене —
                  комната отзывается на движение и не остается статичной.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <SectionIntro
              eyebrow="Интерактив"
              title="Не просто смотрите интерьер. Зайдите в него."
              description="Этот блок работает как небольшой симулятор: можно сменить стиль, приглушить свет, проверить материалы и посмотреть комнату с нескольких точек, будто вы уже в квартире."
            />

            <div className={styles.controlGroup} data-reveal>
              <p className={styles.groupLabel}>Стиль сцены</p>
              <div className={styles.controlGrid}>
                {renderControls(styleModes, styleMode, setStyleMode)}
              </div>
            </div>

            <div className={styles.controlGroup} data-reveal>
              <p className={styles.groupLabel}>Световой режим</p>
              <div className={styles.inlineGrid}>
                {renderControls(lightModes, lightMode, setLightMode)}
              </div>
            </div>

            <div className={styles.controlGroup} data-reveal>
              <p className={styles.groupLabel}>Материалы</p>
              <div className={styles.inlineGrid}>
                {renderControls(materialModes, materialMode, setMaterialMode)}
              </div>
            </div>

            <div className={styles.controlGroup} data-reveal>
              <p className={styles.groupLabel}>Точка обзора</p>
              <div className={styles.inlineGrid}>
                {renderControls(cameraModes, cameraMode, setCameraMode)}
              </div>
            </div>

            <div className={styles.summaryCard} data-reveal>
              <span>Почему это полезно</span>
              <strong>{activeStyle.note}</strong>
              <p>
                Вместо абстрактного мудборда клиент сразу видит, как меняется ощущение
                пространства от света, фактуры и выбранного ракурса.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfiguratorSection;