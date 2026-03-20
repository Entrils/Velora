import styles from "./ServiceIcon.module.css";

function ServiceIcon({ type }) {
  const icons = {
    concept: (
      <path d="M10 39h44M16 39V15l16-8 16 8v24M24 39V25h16v14" />
    ),
    planning: (
      <>
        <path d="M11 17h42M11 31h42M23 7v48M39 7v48" />
        <path d="M9 9h46v46H9z" />
      </>
    ),
    supervision: (
      <>
        <path d="M14 39l18-30 18 30H14z" />
        <path d="M32 18v12" />
        <path d="M32 36h.01" />
      </>
    ),
    furnishing: (
      <>
        <path d="M14 34V24a8 8 0 018-8h20a8 8 0 018 8v10" />
        <path d="M14 29h36" />
        <path d="M18 34v8M46 34v8" />
      </>
    )
  };

  return (
    <svg
      className={styles.icon}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

export default ServiceIcon;
