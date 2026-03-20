import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./CustomCursor.module.css";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;

    if (!supportsHover || !cursorRef.current) {
      return undefined;
    }

    const moveX = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.35,
      ease: "power3.out"
    });
    const moveY = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.35,
      ease: "power3.out"
    });

    const handlePointerMove = (event) => {
      moveX(event.clientX);
      moveY(event.clientY);
    };

    const handlePointerEnter = () => {
      cursorRef.current.classList.add(styles.visible);
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, label, .cursorTarget"
    );

    const addActiveState = () => cursorRef.current.classList.add(styles.active);
    const removeActiveState = () =>
      cursorRef.current.classList.remove(styles.active);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerenter", handlePointerEnter);

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", addActiveState);
      element.addEventListener("mouseleave", removeActiveState);
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerenter", handlePointerEnter);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", addActiveState);
        element.removeEventListener("mouseleave", removeActiveState);
      });
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef} aria-hidden="true" />;
}

export default CustomCursor;
